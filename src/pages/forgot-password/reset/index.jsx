import {
  confirmPasswordValidator,
  createValidator,
  passwordValidator,
} from "@/validators.js"
import Head from "next/head"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import { useCallback, useState } from "react"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"

const initialValues = {
  password: "",
  comfirmpassword: "",
}
const validationSchema = createValidator({
  password: passwordValidator.required(),
  comfirmpassword: confirmPasswordValidator.required(),
})

const ForgotPasswordResetPage = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const {
    actions: { resetPassword },
  } = useAppContext()
  const [error, setError] = useState(null)
  const { query } = router
  const userId = query.id || null

  const handleSubmit = useCallback(
    async (values) => {
      setError(null)

      const [err] = await resetPassword(userId, values.password)

      if (err) {
        setError(err)

        return
      }

      router.push("/sign-in")
    },
    [resetPassword, router, userId]
  )

  return (
    <>
      <Head>
        <title>{t("forgotPasswordTitle")}</title>
        <meta name="description" content="Contact us page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-16 flex min-h-screen flex-col lg:mx-96">
        <div className="my-20 flex justify-center text-xl font-bold lg:text-4xl">
          {t("resetPassword")}
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
            <FormField
              name="comfirmpassword"
              placeholder="Enter your new password"
              label="Confirm Reset Password"
              type="password"
            />

            <SubmitButton className="mt-10"></SubmitButton>
          </Form>
        </div>
      </div>
    </>
  )
}

ForgotPasswordResetPage.isPublicPage = true
export default ForgotPasswordResetPage
