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

      if (!user) {
        res.status(404).send({ error: "User undefined" })

        return
      }

      const sgMail = require("@sendgrid/mail")
      sgMail.setApiKey(config.security.sendgrid)

      const msg = {
        to: email,
        from: "airneis.e.commerce@gmail.com",
        templateId: "d-a93f200ea9de4730b9119978415ff009",
        dynamic_template_data: {
          url: `${config.baseURL}/forgot-password/reset?id=${user.id}`,
        },
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
