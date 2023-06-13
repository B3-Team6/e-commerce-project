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
  image: stringValidator.required(),
  quantity: intValidator.required(),
  price: intValidator.required(),
})

const ProductPage = () => {
  const router = useRouter()
  const {
    actions: { addProduct },
  } = useAppContext()

  const [error, setError] = useState(null)

  const handleSubmit = useCallback(
    async (values) => {
      const [err] = await addProduct(values)

      if (err) {
        setError(err)

        return
      }

      router.push("/BackOffice/productAdmin")
    },
    [addProduct, router]
  )

  const [materials, setMaterials] = useState([])

  const fecthData = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/backoffice/material"
    )
    setMaterials(data.result)
  }

  useEffect(() => {
    fecthData()
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
          type="number"
          placeholder="Enter the image of the product"
          label="Image"
        />
        <FormField name="materials" label="Material" component="select">
          <option value="">Select a material</option>
          {materials.map((material) => (
            <option key={material.id} value={material.id}>
              {material.name}
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
