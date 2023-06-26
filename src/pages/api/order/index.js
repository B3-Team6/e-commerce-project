import validate from "@/api/middlewares/validate"
import mw from "@/api/mw"
import { dateValidator, idValidator, statusOrderValidator } from "@/validators"
import OrderModel from "@/api/db/models/OrderModel"

const handler = mw({
  GET: [
    async ({ res }) => {
      const orders = await OrderModel.query().orderBy("id")

      if (!orders) {
        return res.status(401).send({ error: "Il n'y a pas de commandes" })
      }

      res.send({ result: orders })
    },
  ],
  POST: [
    validate({
      body: {
        userId: idValidator.required(),
        status: statusOrderValidator.required(),
        date: dateValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { userId, status, date },
      },
      res,
    }) => {
      await OrderModel.query().insert({
        userId,
        status,
        date,
      })
      res.send({ result: true })
    },
  ],
})

export default handler
