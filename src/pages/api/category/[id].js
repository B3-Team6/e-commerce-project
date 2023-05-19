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
        res.status(401).send({ error: "La categorie n'existe pas !" })

        return
      }

      res.send({ result: category })
    },
  ],
})

export default handler
