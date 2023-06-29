import config from "@/api/config.js"
import UserModel from "@/api/db/models/UserModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import { emailValidator } from "@/validators.js"

const handler = mw({
  POST: [
    validate({
      body: {
        email: emailValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { email },
      },
      res,
    }) => {
      const user = await UserModel.query().findOne({ email })

      if (user) {
        res.send({ result: true })

        return
      }

      await UserModel.query().insertAndFetch({
        email,
      })

      const sgMail = require("@sendgrid/mail")
      sgMail.setApiKey(config.security.sendgrid)

      const msg = {
        to: email,
        from: "test@example.com",
        templateId: "",
        // dynamic_template_date: (
        //   url : `${config.baseURL}/reset-passord`,
        // )
      }

      try {
        sgMail
          .send(msg)
          .then((response) => {
            // eslint-disable-next-line no-console
            console.log(response[0].statusCode)
            // eslint-disable-next-line no-console
            console.log(response[0].headers)
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error)
          })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }

      res.send({ result: true })
    },
  ],
})

export default handler
