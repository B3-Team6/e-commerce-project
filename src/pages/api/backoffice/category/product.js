import ProductModel from "@/api/db/models/ProductModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import { idValidator } from "@/validators.js"

const handler = mw({
  GET: [
    validate({ query: { categoryId: idValidator } }),
    async ({
      locals: {
        query: { categoryId },
      },
      res,
    }) => {
      const product = await ProductModel.query()
        .orderBy("id")
        .where({ categories_id: categoryId })

      if (!product) {
        res.status(401).send({ error: "Product Not Found" })

        return
      }

      res.send({ result: product })
    },
  ],
})

export default handler
