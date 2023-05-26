import ProductModel from "@/api/db/models/ProductModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import {
  stringValidator,
  intValidator,
  pageValidator,
  limitValidator,
  idValidator,
} from "@/validators.js"

const handler = mw({
  POST: [
    validate({
      body: {
        name: stringValidator.required(),
        description: stringValidator.required(),
        price: intValidator.required(),
        quantity: intValidator.required(),
        material: stringValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { name, description, price, quantity, material },
      },
      res,
    }) => {
      const product = await ProductModel.query().insertAndFetch({
        name,
        description,
        price,
        quantity,
        material_id: material,
      })

      res.send({ result: product })
    },
  ],
  GET: [
    async ({
      res,
      query: { page = pageValidator, limit = limitValidator },
    }) => {
      const products = await ProductModel.query().paginate(limit, page)

      res.send({ result: products })
    },
  ],
  GET_BY_ID: [
    validate({
      params: {
        id: intValidator.required(),
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
        id: idValidator.required(),
      },
      body: {
        name: stringValidator.optional(),
        description: stringValidator.optional(),
        price: intValidator.optional(),
        quantity: intValidator.optional(),
        material: stringValidator.optional(),
      },
    }),
    async ({
      locals: {
        params: { id },
        body: { name, description, price, quantity, material },
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
        material_id: material,
      })

      res.send({ result: updatedProduct })
    },
  ],
  DELETE: [
    validate({
      params: {
        id: idValidator.required(),
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
