import OrderModel from "@/api/db/models/OrderModel"
import ProductModel from "@/api/db/models/ProductModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import {
  stringValidator,
  numberValidator,
  emailValidator,
} from "@/validators.js"

const handler = mw({
  POST: [
    validate({
      body: {
        product_id: numberValidator.required(),
        quantity: numberValidator.required(),
        customer_name: stringValidator.required(),
        customer_email: emailValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { product_id, quantity, customer_name, customer_email },
      },
      res,
    }) => {
      const product = await ProductModel.query().findById(product_id)

      if (!product) {
        res.status(404).send({ error: "Product not found" })

        return
      }

      if (product.quantity < quantity) {
        res.status(400).send({ error: "Not enough quantity available" })

        return
      }

      const order = await OrderModel.query().insertAndFetch({
        product_id,
        quantity,
        customer_name,
        customer_email,
      })

      await product.$query().patch({ quantity: product.quantity - quantity })

      res.send({ result: order })
    },
  ],
  GET: [
    async ({ res }) => {
      const orders = await OrderModel.query()

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
