import ContactModel from "@/api/db/models/ContactModel.js"
import validate from "@/api/middlewares/validate.js"
import slowDown from "@/api/middlewares/slowDown.js"
import mw from "@/api/mw.js"
import { emailValidator, messageValidator } from "@/validators.js"

const handler = mw({
  GET: [
    async ({ res }) => {
      const contact = await ContactModel.query().orderBy("id")

      if (!contact) {
        res.status(401).send({ error: "Il n'y a pas de categories" })

        return
      }

      res.send({ result: contact })
    },
  ],
  POST: [
    slowDown(500),
    validate({
      body: {
        email: emailValidator.required(),
        message: messageValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { email, message },
      },
      res,
    }) => {
      await ContactModel.query().insertAndFetch({
        email,
        message,
      })

      res.send({ result: true })
    },
  ],
})

export default handler
