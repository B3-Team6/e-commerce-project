import hashPassword from "@/api/db/hashPassword"
import UserModel from "@/api/db/models/UserModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import {
  displayNameValidator,
  emailValidator,
  passwordValidator,
} from "@/validators.js"

const handler = mw({
  GET: [
    async ({ res }) => {
      const user = await UserModel.query().orderBy("id")

      if (!user) {
        res.status(401).send({ error: "User Not Found" })

        return
      }

      res.send({ result: user })
    },
  ],
  POST: [
    validate({
      body: {
        displayName: displayNameValidator.required(),
        email: emailValidator.required(),
        password: passwordValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { displayName, email, password, isAdmin },
      },
      res,
    }) => {
      const user = await UserModel.query().findOne({ email })

      if (user) {
        res.send({ result: true })

        return
      }

      const [passwordHash, passwordSalt] = await hashPassword(password)

      await UserModel.query().insertAndFetch({
        displayName,
        email,
        passwordHash,
        passwordSalt,
        isAdmin,
      })

      res.send({ result: true })
    },
  ],
})

export default handler
