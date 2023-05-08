import { Model } from "objection"
import ProductModel from "./ProductModel"

class OrderModel extends Model {
  static tableName = "orders"

  static get relationMappings() {
    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: ProductModel,
        join: {
          from: "orders.product_id",
          to: "products.id",
        },
      },
    }
  }
}

export default OrderModel
