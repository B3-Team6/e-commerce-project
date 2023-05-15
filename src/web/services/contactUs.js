import routes from "@/web/routes.js"

const contactUs =
  ({ api }) =>
  async ({ email, message }) => {
    try {
      await api.post(routes.api.contactUs(), {
        email,
        message,
      })
      setTimeout(() => {
        window.location.reload()
      }, 3000)

      return [null, true]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default contactUs
