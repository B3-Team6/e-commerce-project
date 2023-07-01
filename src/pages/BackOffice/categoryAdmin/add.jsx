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
})

const CategoryPage = () => {
  const router = useRouter()
  const {
    actions: { addCategory },
  } = useAppContext()

  const [error, setError] = useState(null)
  const [file, setFile] = useState(null)

  const handleImageChange = (event) => {
    const eventFile = event.target.files[0]

    if (eventFile) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const fileContent = e.target.result
        const buffer = Buffer.from(fileContent.split(",")[1], "base64")

        setFile({
          name: eventFile.name,
          content: buffer,
          type: eventFile.type,
        })
      }
      reader.readAsDataURL(eventFile)
    }
  }

  const handleSubmit = useCallback(
    async (values) => {
      if (!file.content) {
        return setError(["Please select a file"])
      }

      const [err] = await addCategory({ ...values, image: file })

      if (err) {
        setError(err)

        return
      }

      router.push("/BackOffice/categoryAdmin")
    },
    [addCategory, router, file]
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
        type="file"
        multiple={false}
        handleChange={handleImageChange}
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
