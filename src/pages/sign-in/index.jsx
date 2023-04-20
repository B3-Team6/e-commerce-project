import { createValidator, emailValidator } from "@/validators.js"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import Layout from "@/web/components/Layout/Layout"

import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import { useRouter } from "next/router.js"
import { useCallback, useState } from "react"

const initialValues = {
  email: "",
  password: "",
}
const validationSchema = createValidator({
  email: emailValidator.required(),
})

const SignInPage = () => {
  const router = useRouter()
  const {
    actions: { signIn },
  } = useAppContext()
  const [error, setError] = useState(null)
  const handleSubmit = useCallback(
    async (values) => {
      setError(null)

      const [err] = await signIn(values)

      if (err) {
        setError(err)

        return
      }

      router.push("/")
    },
    [signIn, router]
  )

  return (
    <Layout>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        error={error}
      >
        <FormField
          name="email"
          placeholder="Enter your e-mail"
          label="E-mail"
          type="email"
        />
        <FormField
          name="password"
          placeholder="Enter your password"
          label="Password"
          type="password"
        />
        <SubmitButton>Sign In</SubmitButton>
      </Form>
    </Layout>
  )
}

SignInPage.isPublicPage = true
export default SignInPage
