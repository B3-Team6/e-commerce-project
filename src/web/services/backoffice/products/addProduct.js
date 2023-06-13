import routes from "@/web/routes"

const addProduct =
  ({ api }) =>
  async ({ name, description, price, quantity, materials, image }) => {
    try {
      const { data } = await api.post(routes.api.product.product(), {
        name,
        description,
        price,
        quantity,
        materials,
        image,
        slug: name.toLowerCase().replace(/ /g, "-"),
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default addProduct
