// prettier-ignore
import routes from "@/web/routes"
import { AwsService } from "../../../../api/services/aws.service"

const addCategory =
  ({ api }) =>
  async ({ name, description, image }) => {
    try {
      const aws = new AwsService()
      const { url } = await aws.uploadFile({
        content: image?.content,
        name: image?.name,
        type: image?.type,
      })

      const { data } = await api.post(routes.api.category.category(), {
        name: name,
        slug: name.toLowerCase().replace(/ /g, "-"),
        description: description,
        image: url,
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default addCategory
