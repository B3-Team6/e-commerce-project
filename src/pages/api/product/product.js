import ProductModel from "@/api/db/models/ProductModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import { stringValidator, numberValidator } from "@/validators.js"

const handler = mw({
  POST: [
    validate({
      body: {
        name: stringValidator.required(),
        description: stringValidator.required(),
        price: numberValidator.required(),
        quantity: numberValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { name, description, price, quantity },
      },
      res,
    }) => {
      const product = await ProductModel.query().insertAndFetch({
        name,
        description,
        price,
        quantity,
      })

      res.send({ result: product })
    },
  ],
  GET: [
    async ({ res }) => {
      const products = await ProductModel.query()

      res.send({ result: products })
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
      const product = await ProductModel.query().findById(id)

      if (!product) {
        res.status(404).send({ error: "Product not found" })

        return
      }

      res.send({ result: product })
    },
  ],
  PATCH: [
    validate({
      params: {
        id: numberValidator.required(),
      },
      body: {
        name: stringValidator.optional(),
        description: stringValidator.optional(),
        price: numberValidator.optional(),
        quantity: numberValidator.optional(),
      },
    }),
    async ({
      locals: {
        params: { id },
        body: { name, description, price, quantity },
      },
      res,
    }) => {
      const product = await ProductModel.query().findById(id)

      if (!product) {
        res.status(404).send({ error: "Product not found" })

        return
      }

      const updatedProduct = await product.$query().patchAndFetch({
        name,
        description,
        price,
        quantity,
      })

      res.send({ result: updatedProduct })
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
      const deletedProduct = await ProductModel.query().deleteById(id)

      if (!deletedProduct) {
        res.status(404).send({ error: "Product not found" })

        return
      }

      res.send({ result: true })
    },
  ],
})

export default handler
