import hashPassword from "@/api/db/hashPassword.js"
import BaseModel from "@/api/db/models/BaseModel.js"

class ContactModel extends BaseModel {
  static tableName = "contact"
}

export default ContactModel
