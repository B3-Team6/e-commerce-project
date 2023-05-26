import BaseModel from "@/api/db/models/BaseModel.js"
import MaterialModel from "./MaterialModel"

class ProductModel extends BaseModel {
  static tableName = "products"

  static relationMappings = {
    product: {
      relation: BaseModel.HasOneRelation,
      modelClass: MaterialModel,
      join: {
        from: "materials.id",
        to: "products.material_id",
      },
    },
  }

  static modifiers = {
    paginate: (query, limit, page) =>
      query.limit(limit).offset((page - 1) * limit),
  }
}

export default ProductModel
