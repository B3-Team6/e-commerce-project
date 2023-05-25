import routes from "@/web/routes"

const addCategory =
  ({ api }) =>
  async ({ name, description, image }) => {
    try {
      const { data } = await api.post(routes.api.category.category(), {
        name: name,
        slug: name.toLowerCase().replace(/ /g, "-"),
        description: description,
        image: image,
      })

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default addCategory
