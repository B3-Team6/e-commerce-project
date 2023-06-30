import {
  createValidator,
  displayNameValidator,
  emailValidator,
  passwordValidator,
} from "@/validators.js"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import Head from "next/head"
import { useRouter } from "next/router.js"
import { useCallback, useState } from "react"
import Image from "next/image"

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

const SignUpPage = () => {
  const router = useRouter()
  const {
    actions: { signUp },
  } = useAppContext()
  const [error, setError] = useState(null)
  const handleSubmit = useCallback(
    async (values) => {
      const [err] = await signUp(values)

      if (err) {
        setError(err)

        return
      }

      router.push("/sign-in")
    },
    [signUp, router]
  )

  return (
    <>
      <Head>
        <title>Airneis - Sign Up</title>
        <meta name="description" content="Contact us page" />
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
          name="displayName"
          placeholder="Enter your name"
          label="Name"
        />
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
        <SubmitButton>Sign Up</SubmitButton>
      </Form>
    </>
  )
}

SignUpPage.isPublicPage = true

export default SignUpPage
