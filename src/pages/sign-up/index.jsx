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
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()
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
              className="absolute ml-16"
            />
          </div>
        </div>

        <div className="flex-col  lg:col-span-1">
          <div className="mt-20 flex justify-center text-3xl font-bold">
            Sign-Up
          </div>
          <div className="mx-auto mb-16 mt-8 max-w-md  border-black">
            <Form
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              error={error}
            >
              <FormField
                name="displayName"
                placeholder={t('displayNamePlaceholder')}
                label={t('displayNameLabel')}
              />
              <FormField
                name="email"
                placeholder={t('emailPlaceholder')}
                label={t('emailLabel')}
                type="email"
              />
              <FormField
                name="password"
                placeholder={t('passwordPlaceholder')}
                label={t('passwordLabel')}
                type="password"
              />
              <SubmitButton className="mt-10"></SubmitButton>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

SignUpPage.isPublicPage = true

export default SignUpPage
