import routes from "@/web/routes"

const updateProduct =
  ({ api }) =>
  async (
    editedId,
    editedDisplayName,
    editedPasswordHash,
    editedPasswordSalt,
    editedEmail,
    editedIsAdmin
  ) => {
    try {
      const { data } = await api.patch(routes.api.product.products(editedId), {
        displayName: editedDisplayName,
        passwordHash: editedPasswordHash,
        passwordSalt: editedPasswordSalt,
        email: editedEmail,
        isAdmin: editedIsAdmin,
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default updateProduct