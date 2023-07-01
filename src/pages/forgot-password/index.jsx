import { createValidator, emailValidator } from "@/validators.js"
import Head from "next/head"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"

const initialValues = {
  email: "",
}
const validationSchema = createValidator({
  email: emailValidator.required(),
})

const ForgotPasswordPage = () => {
  const { t } = useTranslation()
  const {
    actions: { sendMailPassword },
  } = useAppContext()
  const [error, setError] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = useCallback(
    async (values, { resetForm }) => {
      setError(null)

      const [err] = await sendMailPassword(values)

      if (err) {
        setError(err)
      } else {
        setIsSubmitted(true)
        resetForm()
      }
    },
    [sendMailPassword]
  )

  return (
    <>
      <Head>
        <title>{t('forgotPasswordTitle')}</title>
        <meta name="description" content="Contact us page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-16 flex min-h-screen flex-col lg:mx-96">
        <div className="my-20 flex justify-center text-xl font-bold lg:text-4xl">
          {t('forgotPassword')}
        </div>
        <div>
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

            <SubmitButton className="mt-10"></SubmitButton>
            {isSubmitted && (
              <div className="text-center text-green-600">
                {t('submitSuccessEmail')}
              </div>
            )}
          </Form>
        </div>
      </div>
    </>
  )
}

ForgotPasswordPage.isPublicPage = true
export default ForgotPasswordPage
