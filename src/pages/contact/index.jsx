import { createValidator, emailValidator, messageValidator } from "@/validators.js"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import { useCallback, useState } from "react"

const initialValues = {
  email: "",
  message: "",
}
const validationSchema = createValidator({
  email: emailValidator.required(),
  message: messageValidator.required(),
})

const ContactUsPage = () => {
  const {
    actions: { contactUs },
  } = useAppContext()
  const [error, setError] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = useCallback(
    async (values) => {
      setError(null)

      const [err] = await contactUs(values)

      if (err) {
        setError(err)

        return
      }

      setIsSubmitted(true)
    },
    [contactUs]
  )

  return (
    <>
      <div className="flex min-h-screen flex-col mx-16">
        <div className="flex justify-center text-xl font-bold my-20 lg:text-4xl">
          Contact us
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
            <FormField
              name="message"
              placeholder="Enter your message"
              label="Message"
              type="message"
            />
            <SubmitButton>Submit</SubmitButton>
            {isSubmitted && (
              <div className="mt-4 text-green-500">
                Successfully sent the message!
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
