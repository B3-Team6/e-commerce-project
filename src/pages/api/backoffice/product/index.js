import ProductModel from "@/api/db/models/ProductModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import { stringValidator, intValidator } from "@/validators.js"

const handler = mw({
  GET: [
    async ({ res }) => {
      const product = await ProductModel.query().orderBy("id")

      if (!product) {
        res.status(401).send({ error: "Product Not Found" })

        return
      }

      res.send({ result: product })
    },
  ],
  POST: [
    validate({
      body: {
        name: stringValidator.required(),
        description: stringValidator.required(),
        price: intValidator.required(),
        quantity: intValidator.required(),
        slug: stringValidator.required(),
        materials: stringValidator.required(),
        image: stringValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { name, description, price, quantity, materials, image, slug },
      },
      res,
    }) => {
      const product = await ProductModel.query().insertAndFetch({
        name,
        description,
        price,
        quantity,
        image,
        slug,
        material_id: materials,
      })

      res.send({ result: product })
    },
  ],
})

export default handler
