import validate from "@/api/middlewares/validate"
import mw from "@/api/mw"
import { idValidator } from "@/validators"
import OrderModel from "@/api/db/models/OrderModel"

const handler = mw({
  GET: [
    validate({ query: { id: idValidator } }),
    async ({
      locals: {
        query: { id },
      },
      res,
    }) => {
      const order = await OrderModel.query().findOne({ id })

      if (!order) {
        return res.status(401).send({ error: "La commande n'existe pas !" })
      }

      res.send({ result: order })
    },
  ],

  PATCH: [
    validate({ query: { id: idValidator } }),
    async ({
      locals: {
        query: { id },
        body: { status, date },
      },
      res,
    }) => {
      const orderUpdate = await OrderModel.query()
        .update({
          ...(status ? { status } : {}),
          ...(date ? { date } : {}),
        })
        .where({
          id: id,
        })
        .returning("*")

      res.send({ result: orderUpdate })
    },
  ],
  DELETE: [
    validate({ query: { id: idValidator } }),
    async ({
      locals: {
        query: { id },
      },
      res,
    }) => {
      const OrderModel = await OrderModel.query()
        .delete()
        .where({
          id: id,
        })
        .returning("*")

      res.send({ result: OrderModel })
    },
  ],
})

export default handler

