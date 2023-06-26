// prettier-ignore
import routes from "@/web/routes"

const addOrder =
  ({ api }) =>
  async ({ userId, name, date, status }) => {
    try {
      const { data } = await api.post(routes.api.order.orders(), {
        name: name,
        date: date,
        status: status,
        userId: userId,
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default addOrder

