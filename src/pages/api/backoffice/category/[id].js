import CategoryModel from "@/api/db/models/CategoryModel"
import validate from "@/api/middlewares/validate"
import mw from "@/api/mw"
import { idValidator } from "@/validators"

const handler = mw({
  GET: [
    validate({ query: { id: idValidator } }),
    async ({
      locals: {
        query: { id },
      },
      res,
    }) => {
      const category = await CategoryModel.query().findOne({ id: id })

      if (!category) {
        res.status(401).send({ error: "This category doesn't exist" })

        return
      }

      res.send({ result: category })
    },
  ],
  PATCH: [
    validate({ query: { id: idValidator } }),
    async ({
      locals: {
        query: { id },
        body: { name, description, image, slug },
      },
      res,
    }) => {
      const categoryUpdate = await CategoryModel.query()
        .update({
          ...(name ? { name } : {}),
          ...(description ? { description } : {}),
          ...(image ? { image } : {}),
          ...(slug ? { slug } : {}),
        })
        .where({
          id: id,
        })
        .returning("*")

      res.send({ result: categoryUpdate })
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
      const categoryUpdate = await CategoryModel.query()
        .delete()
        .where({
          id: id,
        })
        .returning("*")

      res.send({ result: categoryUpdate })
    },
  ],
})

export default handler
