import hashPassword from "@/api/db/hashPassword"
import UserModel from "@/api/db/models/UserModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import { idValidator, passwordValidator } from "@/validators.js"

const handler = mw({
  PATCH: [
    validate({
      query: {
        id: idValidator.required(),
      },
      body: {
        password: passwordValidator.required(),
      },
    }),
    async ({
      locals: {
        query: { id },
        body: { password },
      },
      res,
    }) => {
      try {
        const user = await UserModel.query().findById(id)

        if (!user) {
          res.status(404).send({
            error: "User not found.",
          })

          return
        }

        const [newPasswordHash, newPasswordSalt] = await hashPassword(password)

        await UserModel.query().findById(id).patch({
          passwordHash: newPasswordHash,
          passwordSalt: newPasswordSalt,
        })

        res.send({ result: true })
      } catch (error) {
        res.status(500).send({
          error: "An error occurred while updating the password.",
        })
      }
    },
  ],
})

export default handler
