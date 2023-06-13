import ProductModel from "@/api/db/models/ProductModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import { stringValidator, intValidator } from "@/validators.js"

const handler = mw({
  GET: [
    async ({ res }) => {
      const product = await ProductModel.query()
        .orderBy("id")
        .withGraphFetched("material")

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
        image: intValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { name, description, price, quantity, image, materials, slug },
      },
      res,
    }) => {
      try {
        const product = await ProductModel.query().findOne({
          slug: slug,
        })

        if (product) {
          return res.status(401).send({ error: "Product already exists" })
        }

        const newProduct = await ProductModel.query().insert({
          name,
          description,
          price,
          quantity,
          image,
          material_id: parseInt(materials),
          slug: slug,
        })

        res.send({ result: newProduct })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        res
          .status(500)
          .send({ error: "An error occurred while creating the product" })
      }
    },
  ],
})

export default handler
