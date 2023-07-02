import routes from "@/web/routes"

const addMaterial =
  ({ api }) =>
  async ({ name }) => {
    try {
      const { data } = await api.post(routes.api.materials.material(), {
        name,
        slug: name.toLowerCase().replace(/ /g, "-"),
      })

      return [null, data]
    } catch (err) {
      const error =
        err.response?.data?.error || "Oops. dzzd Something went wrong"

      return [Array.isArray(error) ? error : [error]]
    }
  }

export default addMaterial
