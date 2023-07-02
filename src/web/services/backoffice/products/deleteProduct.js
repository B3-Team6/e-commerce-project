import routes from "@/web/routes"

const deleteProduct =
  ({ api }) =>
  async (id) => {
    try {
      // eslint-disable-next-line no-console
      console.log(id)
      const { data } = await api.delete(routes.api.product.products(id))

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default deleteProduct
