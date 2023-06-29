import routes from "@/web/routes"

const deleteOrder =
  ({ api }) =>
  async (id) => {
    try {
      const { data } = await api.delete(routes.api.order.orders(id))

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default deleteOrder
