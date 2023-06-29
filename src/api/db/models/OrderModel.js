import BaseModel from "./BaseModel"

class OrderModel extends BaseModel {
  static tableName = "orders"

  static modifiers = {
    paginate: (query, limit, page) =>
      query.limit(limit).offset((page - 1) * limit),
  }
}

export default OrderModel
