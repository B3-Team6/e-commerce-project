import ProductModel from "@/api/db/models/ProductModel"
import UserModel from "@/api/db/models/UserModel"
import validate from "@/api/middlewares/validate.js"
import mw from "@/api/mw.js"
import {
  numberValidator,
  pageValidator,
  limitValidator,
  displayNameValidator,
  stringValidator,
} from "@/validators.js"

const handler = mw({
  GET: [
    async ({
      res,
      currentUser: { id: userId },
      query: { page = pageValidator, limit = limitValidator },
    }) => {
      const user = await UserModel.query()
        .findById(userId)
        .withGraphFetched("cart.[product]")
        .first()

      const products = user.cart
        .map((cartItem) => cartItem.product)
        .paginate(limit, page)

      res.send({ result: products })
    },
  ],
  POST: [
    validate({
      body: {
        productId: numberValidator.required(),
        name: displayNameValidator.required(),
        description: stringValidator.required(),
        price: numberValidator.required(),
        quantity: numberValidator.required(),
      },
    }),
    async ({
      locals: {
        currentUser: { id: userId },
        body: { productId, name, description, price, quantity },
      },
      res,
    }) => {
      const product = await ProductModel.query().findById(productId)

      if (!product) {
        res.status(404).send({ error: "Product not found" })

        return
      }

      const user = await UserModel.query().findById(userId)

      const cartItem = await user.$relatedQuery("cart").insert({
        productId,
        name,
        description,
        price,
        quantity,
      })

      res.send({ result: cartItem })
    },
  ],
  DELETE: [
    validate({
      params: {
        id: numberValidator.required(),
      },
    }),
    async ({
      locals: {
        currentUser: { id: userId },
        params: { id: cartItemId },
      },
      res,
    }) => {
      const user = await UserModel.query().findById(userId)

      const numDeleted = await user.$relatedQuery("cart").deleteById(cartItemId)

      if (numDeleted === 0) {
        res.status(404).send({ error: "Cart item not found" })

        return
      }

      res.send({ result: true })
    },
  ],
  PATCH: [
    validate({
      params: {
        id: numberValidator.required(),
      },
      body: {
        quantity: numberValidator.required(),
      },
    }),
    async ({
      locals: {
        currentUser: { id: userId },
        params: { id: cartItemId },
        body: { quantity },
      },
      res,
    }) => {
      const user = await UserModel.query().findById(userId)

      const cartItem = await user
        .$relatedQuery("cart")
        .patchAndFetchById(cartItemId, { quantity })

      if (!cartItem) {
        res.status(404).send({ error: "Cart item not found" })

        return
      }

      res.send({ result: cartItem })
    },
  ],
})

export default handler
