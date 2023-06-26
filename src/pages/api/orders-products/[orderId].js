import validate from "@/api/middlewares/validate"
import mw from "@/api/mw"
import { decimalValidator, idValidator, integerValidator } from "@/validators"
import OrdersProductsModel from "@/api/db/models/OrdersProductsModel"
import ProductModel from "@/api/db/models/ProdutModel"
import OrderModel from "@/api/db/models/OrderModel"

const handler = mw({
  GET: [
    validate({ query: { orderId: idValidator } }),
    async ({
      locals: {
        query: { orderId },
      },
      res,
    }) => {
      const orderProducts = await OrdersProductsModel.query().where(
        "orderId",
        orderId
      )

      if (!orderProducts) {
        return res.status(401).send({
          error: `Il n'y a pas de commande avec ${orderId}`,
        })
      }

      res.send({ result: orderProducts })
    },
  ],
  POST: [
    validate({
      query: { orderId: idValidator },
      body: {
        productId: idValidator.required(),
        quantity: integerValidator.required(),
        price: decimalValidator.required(),
      },
    }),
    async ({
      locals: {
        query: { orderId },
        body: { productId, quantity },
      },
      res,
    }) => {
      const order = await OrderModel.query().findById(orderId)

      if (!order) {
        return res.status(401).send({
          error: `Il n'y a pas de commande ${orderId}`,
        })
      }

      const product = await ProductModel.query().findById(productId)

      if (!product) {
        return res.status(401).send({
          error: `Il n'y a pas de produit ${productId} dans la commande ${orderId}`,
        })
      }

      await OrdersProductsModel.query()
        .insert({
          orderId,
          productId,
          quantity,
          price: product.price,
        })
        .returning("*")

      res.send({ result: true })
    },
  ],
  PATCH: [
    validate({
      query: { orderId: idValidator },
      body: {
        productId: idValidator.required(),
        quantity: integerValidator.required(),
        price: decimalValidator.required(),
      },
    }),
    async ({
      locals: {
        query: { orderId },
        body: { productId, quantity },
      },
      res,
    }) => {
      const order = await OrderModel.query().findById(orderId)

      if (!order) {
        return res.status(401).send({
          error: `Il n'y a pas de commande ${orderId}`,
        })
      }

      const product = await ProductModel.query().findById(productId)

      if (!product) {
        return res.status(401).send({
          error: `Il n'y a pas de produit ${productId} dans la commande ${orderId}`,
        })
      }

      const orderProductsUpdate = await OrdersProductsModel.query()
        .update({
          ...(quantity ? { quantity } : {}),
        })
        .where({
          productId,
          orderId,
        })
        .returning("*")

      res.send({ result: orderProductsUpdate })
    },
  ],
  DELETE: [
    validate({
      query: { orderId: idValidator },
      body: {
        productId: idValidator.required(),
      },
    }),
    async ({
      locals: {
        query: { orderId },
        body: { productId },
      },
      res,
    }) => {
      const orderProducts = await OrdersProductsModel.query().where({
        orderId,
        productId,
      })

      if (!orderProducts) {
        return res.status(401).send({
          error: `Il n'y a pas de produit ${productId} dans la commande ${orderId}`,
        })
      }

      await OrdersProductsModel.query().delete().where({ orderId, productId })

      res.send({ result: true, message: "commande supprimée" })
    },
  ],
})

export default handler
