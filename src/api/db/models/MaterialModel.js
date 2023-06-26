import BaseModel from "./BaseModel"

class MaterialModel extends BaseModel {
  static tableName = "materials"

  static modifiers = {
    paginate: (query, limit, page) =>
      query.limit(limit).offset((page - 1) * limit),
  }
}

export default MaterialModel
