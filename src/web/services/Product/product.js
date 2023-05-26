import routes from "@/web/routes"

const product =
  ({ api }) =>
  async ({ name, quantity, price, description, material }) => {
    try {
      const { data } = await api.post(routes.api.product(), {
        name,
        quantity,
        price,
        description,
        material,
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default product
