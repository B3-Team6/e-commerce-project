import ContactModel from "@/api/db/models/ContactModel.js"
import validate from "@/api/middlewares/validate.js"
import slowDown from "@/api/middlewares/slowDown.js"
import mw from "@/api/mw.js"
import { emailValidator, messageValidator } from "@/validators.js"

const handler = mw({
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
