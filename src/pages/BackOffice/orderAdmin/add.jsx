/*import { createValidator, stringValidator } from "@/validators.js"*/
import LayoutAdmin from "@/web/components/BackOffice/LayoutAdmin"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import { useRouter } from "next/router.js"
import { useCallback, useState } from "react"

const initialValues = {
  userId: "",
  status: "",
  date: "",
}

const OrderPage = () => {
  const router = useRouter()
  const {
    actions: { addOrder },
  } = useAppContext()

  const [error, setError] = useState(null)

  const handleSubmit = useCallback(
    async (values) => {
      const [err] = await addOrder({ ...values })

      if (err) {
        setError(err)

        return
      }

      router.push("/BackOffice/OrderAdmin")
    },
    [addOrder, router]
  )

  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit} error={error}>
      <FormField name="userId" placeholder="userID" label="Name" />
      <FormField
        name="date"
        placeholder="Enter date"
        label="date"
        type="date"
      />

      <FormField
        name="status"
        placeholder="Enter status"
        label="Status"
        type="enum"
        enumvalues={["pending", "finished"]}
      />
      <SubmitButton>Create</SubmitButton>
    </Form>
  )
}

OrderPage.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

OrderPage.isPublicPage = true

export default OrderPage
