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
        body: { userId, status },
      },
      res,
    }) => {
      const order = await OrderModel.query()
        .update({
          ...(userId ? { userId } : {}),
          ...(status ? { status } : {}),
        })
        .where({
          id: id,
        })
        .returning("*")

      res.send({ result: order })
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
      const order = await OrderModel.query()
        .delete()
        .where({ id })
        .returning("*")

      res.send({ result: order })
    },
  ],
})

export default handler
