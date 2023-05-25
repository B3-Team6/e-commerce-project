import routes from "@/web/routes"

const addCategory =
  ({ api }) =>
  async (editedId, editedName, editedDescription, editedImage) => {
    try {
      const { data } = await api.post(
        routes.api.category.categories(editedId),
        {
          name: editedName,
          description: editedDescription,
          image: editedImage,
        }
      )

      return [null, data]
    } catch (err) {
      const error = err.response?.data?.error || "Oops. Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default addCategory
