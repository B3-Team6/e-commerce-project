import { createValidator, emailValidator } from "@/validators.js"
import Head from "next/head"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import { useCallback, useState } from "react"
import { useRouter } from "next/router"

const initialValues = {
  email: "",
}
const validationSchema = createValidator({
  email: emailValidator.required(),
})

const ForgotPasswordResetpage = () => {
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
        <title>Airneis - Forgot Password</title>
        <meta name="description" content="Contact us page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-16 flex min-h-screen flex-col lg:mx-96">
        <div className="my-20 flex justify-center text-xl font-bold lg:text-4xl">
          Forgot Password
        </div>
        <div>
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            error={error}
          >
            <FormField
              name="password"
              placeholder="Enter your new password"
              label="Reset Password"
              type="password"
            />

            <SubmitButton className="mt-10">Submit</SubmitButton>
          </Form>
        </div>
      </div>
    </>
  )
}

ForgotPasswordResetpage.isPublicPage = true
export default ForgotPasswordResetpage
