import routes from "@/web/routes"
import { AwsService } from "@/api/services/aws.service"

const updateCategory =
  ({ api }) =>
  async (editedId, editedName, editedDescription, editedImage) => {
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

      const { data } = await api.patch(
        routes.api.category.categories(editedId),
        {
          name: editedName,
          description: editedDescription,
          image: editedImage ?? null,
          slug: editedName.toLowerCase().replace(/ /g, "-"),
        }
      )

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default updateCategory
