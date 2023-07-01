import MaterialModel from "@/api/db/models/MaterialModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import { stringValidator } from "@/validators.js"

const handler = mw({
  GET: [
    async ({ res }) => {
      const material = await MaterialModel.query().orderBy("id")

      if (!material) {
        res.status(401).send({ error: "Material Not Found" })

        return
      }

      res.send({ result: material })
    },
  ],
  POST: [
    validate({
      body: {
        name: stringValidator.required(),
        slug: stringValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { name, slug },
      },
      res,
    }) => {
      const product = await MaterialModel.query().insertAndFetch({
        name,
        slug,
      })

      res.send({ result: product })
    },
  ],
})

export default handler
