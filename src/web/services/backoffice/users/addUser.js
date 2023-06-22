import routes from "@/web/routes"

const addUser =
  ({ api }) =>
  async ({ displayName, email, passwordHash, passwordSalt, isAdmin }) => {
    try {
      const { data } = await api.post(routes.api.user.user(), {
        displayName,
        email,
        passwordHash,
        passwordSalt,
        isAdmin,
        slug: displayName.toLowerCase().replace(/ /g, "-"),
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default addUser
