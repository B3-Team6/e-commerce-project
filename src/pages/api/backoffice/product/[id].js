import ProductModel from "@/api/db/models/ProductModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import { stringValidator, intValidator, idValidator } from "@/validators.js"

const handler = mw({
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
        image: stringValidator.optional(),
      },
    }),
    async ({
      locals: {
        params: { id },
        body: { name, description, price, quantity, material, image },
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
        image,
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
