import routes from "@/web/routes"
const updateOrder =
  ({ api }) =>
  async (editedId, editeduserId, editedStatus, editedDate) => {
    try {
      const { data } = await api.patch(routes.api.order.orders(editedId), {
        userId: editeduserId,
        Status: editedStatus,
        date: editedDate,
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default updateOrder
