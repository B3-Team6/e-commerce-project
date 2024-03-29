import routes from "@/web/routes"

const resetPassword =
  ({ api }) =>
  async (id, password) => {
    try {
      const { data } = await api.patch(routes.api.resetPassword(id), {
        password,
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default resetPassword
