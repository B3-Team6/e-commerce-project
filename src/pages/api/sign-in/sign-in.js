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
})

export default handler
