import { createValidator, stringValidator } from "@/validators.js"
import LayoutAdmin from "@/web/components/BackOffice/LayoutAdmin"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import { useRouter } from "next/router.js"
import { useCallback, useState } from "react"

const initialValues = {
  name: "",
  description: "",
  image: "",
}
const validationSchema = createValidator({
  name: stringValidator.required(),
  description: stringValidator.required(),
  image: stringValidator.required(),
})

const CategoryPage = () => {
  const router = useRouter()
  const {
    actions: { addCategory },
  } = useAppContext()

  const [error, setError] = useState(null)

  const handleSubmit = useCallback(
    async (values) => {
      const [err] = await addCategory(values)

      if (err) {
        setError(err)

        return
      }

      router.push("/BackOffice/categoryAdmin")
    },
    [addCategory, router]
  )

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      error={error}
    >
      <FormField name="name" placeholder="Enter the name" label="Name" />
      <FormField
        name="description"
        placeholder="Enter the description"
        label="Description"
        type="description"
      />
      <FormField
        name="image"
        placeholder="Enter the image"
        label="Image"
        type="text"
      />
      <SubmitButton>Create</SubmitButton>
    </Form>
  )
}

CategoryPage.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

CategoryPage.isPublicPage = true

export default CategoryPage
