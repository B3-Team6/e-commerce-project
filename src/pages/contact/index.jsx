import {
  createValidator,
  emailValidator,
  messageValidator,
} from "@/validators.js"
import Head from "next/head"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"

const initialValues = {
  email: "",
  message: "",
}
const validationSchema = createValidator({
  email: emailValidator.required(),
  message: messageValidator.required(),
})

const ContactUsPage = () => {
  const { t } = useTranslation()
  const {
    actions: { contactUs },
  } = useAppContext()
  const [error, setError] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = useCallback(
    async (values, { resetForm }) => {
      setError(null)

      const [err] = await contactUs(values)

      if (err) {
        setError(err)
      } else {
        setIsSubmitted(true)
        resetForm()
      }
    },
    [contactUs]
  )

  return (
    <>
      <Head>
        <title>{t("contactHeadTitle")}</title>
        <meta name="description" content="Contact us page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Airneis.jpg" />
      </Head>
      <div className="mx-16 flex min-h-screen flex-col lg:mx-96">
        <div className="my-20 flex justify-center text-xl font-bold lg:text-4xl">
          {t("contactTitle")}
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
              placeholder={t("emailPlaceholder")}
              label={t("emailLabel")}
              type="email"
            />
            <FormField
              name="message"
              placeholder={t("messagePlaceholder")}
              label={t("messageLabel")}
              type="textarea"
              aria-label={t("messageAriaLabel")}
            />

            <SubmitButton className="mt-10">{t("submitButton")}</SubmitButton>
            {isSubmitted && (
              <div className="text-center text-green-600">
                {t("submitSuccessMessage")}
              </div>
            )}
          </Form>
        </div>
      </div>
    </>
  )
}

ContactUsPage.isPublicPage = true
export default ContactUsPage
