import LayoutAdmin from "@/web/components/BackOffice/LayoutAdmin"
import Head from "next/head"
import { createValidator, intValidator, stringValidator } from "@/validators.js"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import { useRouter } from "next/router.js"
import { useCallback, useState } from "react"
import routes from "@/web/routes"

const materials = [
  {
    id: 1,
    name: "Bois",
  },
]

const initialValues = {
  name: "",
  description: "",
  quantity: "",
  price: "",
  material: "",
  stock: "",
}
const validationSchema = createValidator({
  name: stringValidator.required(),
  description: stringValidator.required(),
  quantity: intValidator.required(),
  price: intValidator.required(),
  stock: intValidator.required(),
})

const ProductAdmin = () => {
  const router = useRouter()
  const {
    actions: { product },
  } = useAppContext()
  const [error, setError] = useState(null)
  const handleSubmit = useCallback(
    async (values) => {
      const [err] = await product(values)

      if (err) {
        setError(err)

        return
      }

      router.push(routes.backoffice(product))
    },
    [product, router]
  )

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
          placeholder="Enter the name of the product"
          label="Name"
        />
        <FormField
          name="description"
          placeholder="Enter the description of the product"
          label="Description"
        />
        <FormField
          name="quantity"
          placeholder="Enter the quantity of the product"
          label="Quantity"
        />
        <FormField
          name="price"
          placeholder="Enter the price of the product"
          label="Price"
        />
        <FormField
          name="stock"
          placeholder="Enter the price of the product"
          label="Stock"
        />
        <FormField name="material" label="Material" component="select">
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
ProductAdmin.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

ProductAdmin.isPublicPage = true
export default ProductAdmin
