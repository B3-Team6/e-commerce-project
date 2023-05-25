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
      router.push("/sign-in")
    },
    [signIn, router]
  )

  return (
    <div className=" min-h-screen">
      <div className="lg:grid lg:grid-cols-2">
        <div className="hidden lg:col-span-1 lg:mb-8  lg:mt-40 lg:flex lg:justify-center">
          <div className="flex max-h-80 items-center justify-center">
            <Image
              alt="canape"
              width={700}
              height={1000}
              src="/images/canape.jpg"
              className="ml-16 opacity-50"
            />

            <Image
              alt="logo"
              width={150}
              height={150}
              src="/images/Airneis.jpg"
              className="absolute z-10 ml-16"
            />
          </div>
        </div>

        <div className="flex-col  lg:col-span-1">
          <div className="mt-20 flex justify-center text-3xl font-bold">
            Sign-In
          </div>
          <div className="mx-auto mb-16 mt-8 max-w-md border border-black">
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
          </div>
        </div>
      </div>
    </div>
  )
}

SignInPage.isPublicPage = true
export default SignInPage
