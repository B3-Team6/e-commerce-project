import hashPassword from "@/api/db/hashPassword.js"
import BaseModel from "@/api/db/models/BaseModel.js"
import ProductModel from "./ProductModel"

class UserModel extends BaseModel {
  static tableName = "users"

  static relationMappings = {
    product: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: ProductModel,
      join: {
        from: "users.product_id",
        to: "products.id",
      },
    },
  }

  checkPassword = async (password) => {
    const [passwordHash] = await hashPassword(password, this.passwordSalt)

    return passwordHash === this.passwordHash
  }

  static modifiers = {
    paginate: (query, limit, page) =>
      query.limit(limit).offset((page - 1) * limit),
  }
}

export default UserModel
