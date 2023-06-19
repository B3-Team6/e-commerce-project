import BaseModel from "@/api/db/models/BaseModel.js"
import MaterialModel from "./MaterialModel"
import CategoryModel from "./CategoryModel"

class ProductModel extends BaseModel {
  static tableName = "products"

  static relationMappings = {
    material: {
      relation: BaseModel.HasOneRelation,
      modelClass: MaterialModel,
      join: {
        from: "materials.id",
        to: "products.material_id",
      },
    },
    category: {
      relation: BaseModel.HasOneRelation,
      modelClass: CategoryModel,
      join: {
        from: "categories.id",
        to: "products.categories_id",
      },
    },
  }

  static modifiers = {
    paginate: (query, limit, page) =>
      query.limit(limit).offset((page - 1) * limit),
  }
}

export default ProductModel
