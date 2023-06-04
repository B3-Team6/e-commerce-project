import routes from "@/web/routes"

const deleteProduct =
  ({ api }) =>
  async (id) => {
    try {
      const { data } = await api.delete(routes.api.product.product(id))

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default deleteProduct
