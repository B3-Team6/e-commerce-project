import ContactModel from "@/api/db/models/ContactModel"
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
      const contact = await ContactModel.query().findOne({ id: id })

      if (!contact) {
        res.status(401).send({ error: "La message n'existe pas !" })

        return
      }

      res.send({ result: contact })
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
      const deleteContact = await ContactModel.query()
        .delete()
        .where({
          id: id,
        })
        .returning("*")

      res.send({ result: deleteContact })
    },
  ],
})

export default handler
