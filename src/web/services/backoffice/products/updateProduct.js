import routes from "@/web/routes"

const updateProduct =
  ({ api }) =>
  async (
    editedId,
    editedName,
    editedQuantity,
    editedPrice,
    editedMaterial,
    editedDescription,
    editedImage
  ) => {
    try {
      const { data } = await api.patch(routes.api.product.product(editedId), {
        name: editedName,
        description: editedDescription,
        quantity: editedQuantity,
        price: editedPrice,
        material: editedMaterial,
        image: editedImage,
        slug: editedName.toLowerCase().replace(/ /g, "-"),
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default updateProduct
