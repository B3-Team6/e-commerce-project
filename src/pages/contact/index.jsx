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
        <title>Contact us</title>
        <meta name="description" content="Contact us page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-96 flex min-h-screen flex-col">
        <div className="my-20 flex justify-center text-xl font-bold lg:text-4xl">
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
            <SubmitButton className="my-14">Submit</SubmitButton>
            {isSubmitted && (
              <div className="text-center text-green-600">
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
