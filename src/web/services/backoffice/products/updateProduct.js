import routes from "@/web/routes"

const updateProduct =
  ({ api }) =>
  async (
    editedId,
    editedName,
    editedDescription,
    editedMaterial,
    editedQuantity,
    editedPrice,
    editedImage
  ) => {
    try {
      // eslint-disable-next-line no-console
      console.log(editedMaterial)
      // eslint-disable-next-line no-console
      console.log(editedPrice)
      // eslint-disable-next-line no-console
      console.log(editedQuantity)
      // eslint-disable-next-line no-console
      console.log(editedImage)

      const { data } = await api.patch(routes.api.product.products(editedId), {
        name: editedName,
        description: editedDescription,
        quantity: editedQuantity,
        price: editedPrice,
        materials: editedMaterial,
        image: editedImage,
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default updateProduct
