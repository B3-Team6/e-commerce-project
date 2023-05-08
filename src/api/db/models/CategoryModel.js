import BaseModel from "@/api/db/models/BaseModel.js"
import ProductModel from "@/api/db/models/ProductModel.js"

class CategoryModel extends BaseModel {
  static tableName = "categories"

  static relationMappings = {
    products: {
      relation: BaseModel.HasManyRelation,
      modelClass: ProductModel,
      join: {
        from: "categories.id",
        to: "products.category_id",
      },
    },
  }
}

export default CategoryModel
