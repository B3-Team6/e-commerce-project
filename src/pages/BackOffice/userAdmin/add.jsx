import LayoutAdmin from "@/web/components/BackOffice/LayoutAdmin"
import { createValidator, displayNameValidator, emailValidator, passwordValidator } from "@/validators.js"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import { useRouter } from "next/router.js"
import { useCallback, useState } from "react"

const initialValues = {
  displayName: "",
  email: "",
  password: "",
}

const validationSchema = createValidator({
  displayName: displayNameValidator.required(),
  email: emailValidator.required(),
  password: passwordValidator.required(),
})

const UserPage = () => {
  const router = useRouter()
  const {
    actions: { addUser },
  } = useAppContext()

  const [error, setError] = useState(null)

  const handleSubmit = useCallback(
    async (values) => {
      const [err] = await addUser(values)

      if (err) {
        setError(err)

        return
      }

      router.push("/BackOffice/userAdmin")
    },
    [addUser, router]
  )

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      error={error}
    >
      <FormField
        name="displayName"
        placeholder="Enter the username"
        label="Username"
        type="text"
      />
      <FormField
        name="email"
        placeholder="Enter the email"
        label="Email"
        type="email"
      />
      <FormField
        name="password"
        placeholder="Enter the password"
        label="Password"
        type="password"
      />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  )
}

UserPage.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

UserPage.isPublicPage = true

export default UserPage
