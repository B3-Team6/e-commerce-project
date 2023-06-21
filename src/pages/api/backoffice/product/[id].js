import ProductModel from "@/api/db/models/ProductModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import { stringValidator, intValidator, idValidator } from "@/validators.js"

const handler = mw({
  GET: [
    validate({
      query: {
        id: idValidator.required(),
      },
    }),
    async ({
      locals: {
        query: { id },
      },
      res,
    }) => {
      const product = await ProductModel.query()
        .findById(id)
        .withGraphFetched("material")
        .withGraphFetched("category")

      if (!product) {
        res.status(404).send({ error: "Product not found" })

        return
      }

      res.send({ result: product })
    },
  ],
  PATCH: [
    validate({
      query: {
        id: idValidator.required(),
      },
      body: {
        name: stringValidator.required(),
        description: stringValidator.required(),
        price: intValidator.required(),
        quantity: intValidator.required(),
        image: intValidator.required(),
      },
    }),
    async ({
      locals: {
        query: { id },
        body: {
          name,
          description,
          price,
          quantity,
          materials,
          categories,
          image,
        },
      },
      res,
    }) => {
      // eslint-disable-next-line no-console
      console.log(categories)

      try {
        const updatedProduct = await ProductModel.query().patchAndFetchById(
          id,
          {
            name,
            description,
            price,
            quantity,
            image,
            material_id: parseInt(materials),
            categories_id: parseInt(categories),
          }
        )

        res.send({ result: updatedProduct })
      } catch (error) {
        res
          .status(500)
          .send({ error: "An error occurred while updating the product" })
      }
    },
  ],
  DELETE: [
    validate({
      query: {
        id: idValidator.required(),
      },
    }),
    async ({
      locals: {
        query: { id },
      },
      res,
    }) => {
      try {
        const deletedProduct = await ProductModel.query().deleteById(id)

        res.send({ result: deletedProduct })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        res
          .status(500)
          .send({ error: "An error occurred while deleting the product" })
      }
    },
  ],
})

export default handler
