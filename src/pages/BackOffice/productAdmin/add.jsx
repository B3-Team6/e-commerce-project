import LayoutAdmin from "@/web/components/BackOffice/LayoutAdmin"
import Head from "next/head"
import { createValidator, intValidator, stringValidator } from "@/validators.js"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import { useRouter } from "next/router.js"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"

const initialValues = {
  name: "",
  description: "",
  quantity: "",
  price: "",
  image: "",
}

const validationSchema = createValidator({
  name: stringValidator.required(),
  description: stringValidator.required(),
  quantity: intValidator.required(),
  price: intValidator.required(),
})
const ProductPage = () => {
  const router = useRouter()
  const {
    actions: { addProduct },
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

      const [err] = await addProduct({ ...values, image: file })

      if (err) {
        setError(err)

        return
      }

      router.push("/BackOffice/productAdmin")
    },
    [addProduct, router, file]
  )

  const [materials, setMaterials] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const materialResponse = await axios.get(
        "http://localhost:3000/api/backoffice/material"
      )
      setMaterials(materialResponse.data.result)

      const categoryResponse = await axios.get(
        "http://localhost:3000/api/backoffice/category"
      )
      setCategories(categoryResponse.data.result)
    }

    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Back Office</title>
        <meta name="description" content="Terms of Use page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        error={error}
      >
        <FormField
          name="name"
          type="text"
          placeholder="Enter the name of the product"
          label="Name"
        />
        <FormField
          name="description"
          type="text"
          placeholder="Enter the description of the product"
          label="Description"
        />
        <FormField
          name="quantity"
          type="number"
          placeholder="Enter the quantity of the product"
          label="Quantity"
        />
        <FormField
          name="price"
          type="number"
          placeholder="Enter the price of the product"
          label="Price"
        />
        <FormField
          name="image"
          placeholder="Enter the image"
          label="Image"
          type="file"
          multiple={false}
          handleChange={handleImageChange}
        />
        <FormField name="materials" label="Material" type="select">
          <option value="">Select a material</option>
          {materials.map((material) => (
            <option key={material.id} value={material.id}>
              {material.name}
            </option>
          ))}
        </FormField>

        <FormField name="categories" label="Category" type="select">
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </FormField>

        <SubmitButton>Add a new product</SubmitButton>
      </Form>
    </>
  )
}

ProductPage.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

ProductPage.isPublicPage = true

export default ProductPage
