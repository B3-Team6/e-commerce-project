import routes from "@/web/routes.js"

const sendMailPassword =
  ({ api }) =>
  async ({ email }) => {
    try {
      await api.post(routes.api.sendMailPassword(), {
        email,
      })

      return [null, true]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default sendMailPassword
