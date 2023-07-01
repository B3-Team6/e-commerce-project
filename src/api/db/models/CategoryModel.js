import BaseModel from "./BaseModel"

class CategoryModel extends BaseModel {
  static tableName = "categories"

  static modifiers = {
    paginate: (query, limit, page) =>
      query.limit(limit).offset((page - 1) * limit),
  }
}

export default CategoryModel
