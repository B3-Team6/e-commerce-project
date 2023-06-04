import routes from "@/web/routes"

const addProduct =
  ({ api }) =>
  async ({ name, quantity, price, description, material, image }) => {
    try {
      const { data } = await api.post(routes.api.product.product(), {
        name,
        quantity,
        price,
        description,
        material,
        image,
        slug: name.toLowerCase().replace(/ /g, "-"),
      })

      return [null, data]
    } catch (err) {
      const error =
        err.response?.data?.error || "Oops. dzzd Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default addProduct
