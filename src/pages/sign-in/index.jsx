import { createValidator, emailValidator } from "@/validators.js"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
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
    <div className="min-h-screen">
      <div className=" lg:grid lg:grid-cols-2">
        <div className="hidden lg:col-span-1 lg:mb-8  lg:mt-12  lg:flex">
          <Image
            alt="canape"
            width={800}
            height={500}
            src="/images/canape.jpg"
            className=" ml-4 mt-20 opacity-50"
          />
          <Image
            alt="logo"
            width={150}
            height={150}
            src="/images/Airneis.jpg"
            className="absolute left-64 top-80"
          />
        </div>
        <div className="lg:col-span-1">
          <div className="mt-20 flex justify-center text-lg font-bold">
            Sign-In
          </div>
          <div className="mx-auto mb-28 mt-8 max-w-md  border border-black">
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
                className="mb-4"
              />
              <FormField
                name="password"
                placeholder="Enter your password"
                label="Password"
                type="password"
                className="mb-4"
              />
              <SubmitButton>Sign In</SubmitButton>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

SignInPage.isPublicPage = true
export default SignInPage
