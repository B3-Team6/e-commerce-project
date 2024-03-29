import * as yup from "yup"

export const boolValidator = yup.bool()
export const stringValidator = yup.string()

export const idValidator = yup.number().integer().min(1)

export const intValidator = yup.number()

export const displayNameValidator = yup.string().min(1)

export const emailValidator = yup.string().email()

export const messageValidator = yup.string().min(1)

export const passwordValidator = yup
  .string()
  .min(8)
  .matches(
    /^(?=.*[\p{Ll}])(?=.*[\p{Lu}])(?=.*[0-9])(?=.*[^0-9\p{Lu}\p{Ll}]).*$/gu,
    "Password must contain at least 1 upper & 1 lower case letters, 1 digit, 1 special character"
  )
  .label("Password")

export const confirmPasswordValidator = yup
  .string()
  .oneOf([yup.ref("password"), null], "Passwords must match")
  .label("Confirm Password")

export const limitValidator = yup.number().integer().min(1).max(100).default(5)

export const pageValidator = yup.number().integer().min(1).default(1)

export const orderFieldValidator = (fields) => yup.string().oneOf(fields)

export const orderValidator = yup.string().lowercase().oneOf(["asc", "desc"])

export const createValidator = (object) => yup.object().shape(object)

export const imageValidator = yup.mixed()
export const dateValidator = yup.date()
export const statusOrderValidator = yup
  .string()
  .lowercase()
  .oneOf(["pending", "finished"])
