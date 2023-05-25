import { createValidator, stringValidator } from "@/validators.js"
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
      <FormField name="name" placeholder="Enter your name" label="Name" />
      <FormField
        name="description"
        placeholder="Enter your e-mail"
        label="E-mail"
        type="email"
      />
      <FormField
        name="image"
        placeholder="Enter your password"
        label="Password"
        type="text"
      />
      <SubmitButton>Create</SubmitButton>
    </Form>
  )
}

CategoryPage.isPublicPage = true

export default CategoryPage
