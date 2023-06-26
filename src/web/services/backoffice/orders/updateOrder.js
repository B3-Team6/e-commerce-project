import routes from "@/web/routes"
const updateOrder =
  ({ api }) =>
  async (editedId, editeduserId, editedDate, editedStatus) => {
    try {
      const { data } = await api.patch(routes.api.order.orders(editedId), {
        userId: editeduserId,
        Date: editedDate,
        Status: editedStatus,
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default updateOrder
