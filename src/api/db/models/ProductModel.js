import BaseModel from "@/api/db/models/BaseModel.js"
import CategoryModel from "@/api/db/models/CategoryModel.js"

class ProductModel extends BaseModel {
  static tableName = "products"

  static relationMappings = {
    category: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: CategoryModel,
      join: {
        from: "products.category_id",
        to: "categories.id",
      },
    },
  }
}

export default ProductModel
