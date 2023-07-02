import routes from "@/web/routes"

const deleteContact =
  ({ api }) =>
  async (id) => {
    try {
      const { data } = await api.delete(routes.api.contact.contacts(id))

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default deleteContact
