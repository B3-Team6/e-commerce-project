import { createValidator, emailValidator } from "@/validators.js"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import routes from "@/web/routes"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router.js"
import { useCallback, useState } from "react"
import Image from "next/image"

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
    <>
      <Head>
        <title>Airneis - Sign In</title>
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
      <Link rel="stylesheet" href={routes.forgotPassword()}>
        Mot de passe ?
      </Link>
    </>
  )
}

SignInPage.isPublicPage = true
export default SignInPage
