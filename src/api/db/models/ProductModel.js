import BaseModel from "@/api/db/models/BaseModel.js"

class ProductModel extends BaseModel {
  static tableName = "products"

  static modifiers = {
    paginate: (query, limit, page) =>
      query.limit(limit).offset((page - 1) * limit),
  }
}

export default ProductModel
