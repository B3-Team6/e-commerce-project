import BaseModel from "./BaseModel"

class OrdersProductsModel extends BaseModel {
  static tableName = "orders_products"

  static modifiers = {
    paginate: (query, limit, page) =>
      query.limit(limit).offset((page - 1) * limit),
  }
}

export default OrdersProductsModel
