import routes from "@/web/routes"

const updateUser =
  ({ api }) =>
  async (editedId, editedDisplayName, editedEmail, editedIsAdmin) => {
    try {
      const { data } = await api.patch(routes.api.user.users(editedId), {
        displayName: editedDisplayName,
        email: editedEmail,
        isAdmin: editedIsAdmin,
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default updateUser
