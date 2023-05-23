import config from "@/api/config.js"
import UserModel from "@/api/db/models/UserModel.js"
import slowDown from "@/api/middlewares/slowDown.js"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import {
  emailValidator,
  stringValidator,
  limitValidator,
  pageValidator,
} from "@/validators.js"
import jsonwebtoken from "jsonwebtoken"

const handler = mw({
  GET: [
    async ({
      res,
      query: { page = pageValidator, limit = limitValidator },
    }) => {
      const users = await UserModel.query().paginate(limit, page)

      res.send({ result: users })
    },
  ],
  POST: [
    slowDown(500),
    validate({
      body: {
        email: emailValidator.required(),
        password: stringValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { email, password },
      },
      res,
    }) => {
      const user = await UserModel.query().findOne({ email })

      if (!user || !(await user.checkPassword(password))) {
        res.status(401).send({ error: "Invalid credentials" })

        return
      }

      const jwt = jsonwebtoken.sign(
        {
          payload: {
            user: {
              id: user.id,
            },
          },
        },
        config.security.jwt.secret,
        { expiresIn: config.security.jwt.expiresIn }
      )

      res.send({ result: jwt })
    },
  ],
  DELETE: [
    async ({ locals: { user }, res }) => {
      if (user.isAdmin) {
        const { id } = user

        await UserModel.query().deleteById(id)

        res.send({ result: true })
      } else {
        res.status(403).send({ error: "Access denied" })
      }
    },
  ],
  GET_BY_ID: [
    async ({ locals: { user }, params: { id }, res }) => {
      if (user.isAdmin) {
        const user = await UserModel.query().findById(id)

        if (user) {
          res.send({ result: user })
        } else {
          res.status(404).send({ error: "User not found" })
        }
      } else {
        res.status(403).send({ error: "Access denied" })
      }
    },
  ],
  PATCH: [
    async ({ locals: { user }, params: { id }, body, res }) => {
      if (user.isAdmin) {
        const updatedFields = {}

        if (body.email) {
          updatedFields.email = body.email
        }

        if (body.password) {
          updatedFields.password = body.password
        }

        const userToUpdate = await UserModel.query().findById(id)

        if (userToUpdate) {
          await userToUpdate.$query().patch(updatedFields)

          res.send({ result: true })
        } else {
          res.status(404).send({ error: "User not found" })
        }
      } else {
        res.status(403).send({ error: "Access denied" })
      }
    },
  ],
})

export default handler
