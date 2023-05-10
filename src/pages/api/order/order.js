import OrderModel from "@/api/db/models/OrderModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import { limitValidator, numberValidator, pageValidator } from "@/validators.js"

const handler = mw({
  POST: [
    validate({
      body: {
        product_id: numberValidator.required(),
        quantity: numberValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { product_id, quantity },
      },
      res,
    }) => {
      const order = await OrderModel.query().insertAndFetch({
        product_id,
        quantity,
      })

      res.send({ result: order })
    },
  ],
  GET: [
    async ({
      res,
      query: { page = pageValidator, limit = limitValidator },
    }) => {
      const orders = await OrderModel.query().paginate(limit, page)

      res.send({ result: orders })
    },
  ],
  GET_BY_ID: [
    validate({
      params: {
        id: numberValidator.required(),
      },
    }),
    async ({ req, res }) => {
      const { id } = req.params
      const order = await OrderModel.query().findById(id)

      if (!order) {
        res.status(404).send({ error: "Order not found" })

        return
      }

      res.send({ result: order })
    },
  ],
  PATCH: [
    validate({
      params: {
        id: numberValidator.required(),
      },
      body: {
        product_id: numberValidator.optional(),
        quantity: numberValidator.optional(),
      },
    }),
    async ({
      locals: {
        params: { id },
        body: { product_id, quantity },
      },
      res,
    }) => {
      const order = await OrderModel.query().findById(id)

      if (!order) {
        res.status(404).send({ error: "Order not found" })

        return
      }

      const updatedOrder = await order.$query().patchAndFetch({
        product_id,
        quantity,
      })

      res.send({ result: updatedOrder })
    },
  ],
  DELETE: [
    validate({
      params: {
        id: numberValidator.required(),
      },
    }),
    async ({ req, res }) => {
      const { id } = req.params
      const deletedOrder = await OrderModel.query().deleteById(id)

      if (!deletedOrder) {
        res.status(404).send({ error: "Order not found" })

        return
      }

      res.send({ result: true })
    },
  ],
})

export default handler
