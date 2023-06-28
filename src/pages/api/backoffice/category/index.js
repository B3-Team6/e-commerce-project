import CategoryModel from "@/api/db/models/CategoryModel"
import validate from "@/api/middlewares/validate"
import mw from "@/api/mw"
import { stringValidator, imageValidator } from "@/validators"

const handler = mw({
  GET: [
    async ({ res }) => {
      const category = await CategoryModel.query().orderBy("id")

      if (!category) {
        res.status(401).send({ error: "Il n'y a pas de categories" })

        return
      }

      res.send({ result: category })
    },
  ],
  POST: [
    validate({
      body: {
        name: stringValidator.required(),
        slug: stringValidator.required(),
        description: stringValidator.required(),
        image: imageValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { name, slug, description, image },
      },
      res,
    }) => {
      const category = await CategoryModel.query().findOne({ slug: slug })

      if (category) {
        res.status(401).send({ error: "La categorie existe deja" })

        return
      }

      await CategoryModel.query().insert({
        name,
        slug,
        description,
        image,
      })
      res.send({ result: true })
    },
  ],
})

export default handler
