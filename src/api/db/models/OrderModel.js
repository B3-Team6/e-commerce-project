import BaseModel from "./BaseModel"
import ProductModel from "./ProductModel"

class OrderModel extends BaseModel {
  static tableName = "orders"

  static relationMappings = {
    product: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: ProductModel,
      join: {
        from: "orders.product_id",
        to: "products.id",
      },
    },
  }
  static modifiers = {
    paginate: (query, limit, page) =>
      query.limit(limit).offset((page - 1) * limit),
  }
}

export default OrderModel
