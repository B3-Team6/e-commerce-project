import { AwsService } from "@/api/services/aws.service"
import routes from "@/web/routes"

const updateProduct =
  ({ api }) =>
  async (
    editedId,
    editedName,
    editedDescription,
    editedCategory,
    editedMaterial,
    editedQuantity,
    editedPrice,
    editedImage
  ) => {
    try {
      if (editedImage) {
        const aws = new AwsService()
        const { url } = await aws.uploadFile({
          content: editedImage?.content,
          name: editedImage?.name,
          type: editedImage?.type,
        })
        editedImage = url
      }

      const { data } = await api.patch(routes.api.product.products(editedId), {
        name: editedName,
        description: editedDescription,
        quantity: editedQuantity,
        price: editedPrice,
        materials: editedMaterial,
        image: editedImage ?? null,
        categories: editedCategory,
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default updateProduct
