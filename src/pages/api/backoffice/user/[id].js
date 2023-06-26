import UserModel from "@/api/db/models/UserModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import {
  displayNameValidator,
  idValidator,
  emailValidator,
  boolValidator,
} from "@/validators.js"

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
      const user = await UserModel.query().findById(id)

      if (!user) {
        res.status(404).send({ error: "User not found" })

        return
      }

      res.send({ result: user })
    },
  ],
  PATCH: [
    validate({
      query: {
        id: idValidator.required(),
      },
      body: {
        displayName: displayNameValidator.required(),
        email: emailValidator.required(),
        isAdmin: boolValidator.required(),
      },
    }),
    async ({
      locals: {
        query: { id },
        body: { displayName, email, isAdmin },
      },
      res,
    }) => {
      // eslint-disable-next-line no-console

      try {
        const updatedUser = await UserModel.query().patchAndFetchById(id, {
          displayName,
          email,
          isAdmin,
        })

        res.send({ result: updatedUser })
      } catch (error) {
        res
          .status(500)
          .send({ error: "An error occurred while updating the user" })
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
        const deleteUser = await UserModel.query().deleteById(id)

        res.send({ result: deleteUser })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        res
          .status(500)
          .send({ error: "An error occurred while deleting the user" })
      }
    },
  ],
})

export default handler
