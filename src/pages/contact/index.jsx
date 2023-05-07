import { createValidator, emailValidator, bodyValidator } from "@/validators.js"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import useAppContext from "@/web/hooks/useAppContext.jsx"
import { useRouter } from "next/router.js"
import { useCallback, useState } from "react"

const initialValues = {
  email: "",
  body: "",
}
const validationSchema = createValidator({
  email: emailValidator.required(),
  body: bodyValidator.required(),
})

const ContactUsPage = () => {
  const router = useRouter()
  const {
    actions: { contactUs },
  } = useAppContext()
  const [error, setError] = useState(null)
  const handleSubmit = useCallback(
    async (values) => {
      setError(null)

      const [err] = await contactUs(values)

      if (err) {
        setError(err)

        return
      }

      router.push("/")
    },
    [contactUs, router]
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
              name="body"
              placeholder="Enter your message"
              label="Message"
              type="body"
            />
            <SubmitButton>Submit</SubmitButton>
          </Form>
        </div>
      </div>
    </>
  )
}

ContactUsPage.isPublicPage = true
export default ContactUsPage
