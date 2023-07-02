import FormField from "@/web/components/FormField"
import routes from "@/web/routes"
import { Formik } from "formik"
import Link from "next/link"
import * as yup from "yup"

const initialValues = {
  Firstname: "",
  Lastname: "",
  Cardnumber: "",
  Expirationdate: "",
  Cvv: "",
}

const validationSchema = yup.object().shape({
  Firstname: yup.string().required("First name is required"),
  Lastname: yup.string().required("Last name is required"),
  Cardnumber: yup.string().required("Card number is required"),
  Expirationdate: yup.string().required("Expiration date is required"),
  Cvv: yup
    .string()
    .required("CVV is required")
    .min(3, "CVV should be 3 characters length")
    .max(3, "CVV should be 3 characters length"),
})

const Payment = (props) => {
  const { onSubmit } = props

  return (
    <div className="mb-8 flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="my-12  text-xl font-bold  lg:text-5xl">Payment</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, isValid }) => (
            <div className="flex w-fit flex-col">
              <div className="flex justify-center gap-4">
                <FormField
                  name="Firstname"
                  type="text"
                  label="First Name"
                  placeholder="Firstname"
                />

                <FormField
                  name="Lastname"
                  type="text"
                  label="Last Name"
                  placeholder="Lastname"
                />
              </div>

              <FormField
                name="Cardnumber"
                type="text"
                label="Card Number"
                placeholder="Cardnumber"
              />

              <div className="flex justify-center gap-10">
                <FormField
                  name="Expirationdate"
                  type="month"
                  label="Expiration Date"
                  placeholder="Expirationdate"
                  className="mb-8"
                />

                <FormField
                  name="Cvv"
                  type="password"
                  label="CVV"
                  placeholder="CVV"
                  className="mb-8"
                />
              </div>

              <Link
                href={routes.checkout.summary()}
                className="flex items-center justify-center  lg:col-start-2"
              >
                <button
                  disabled={isSubmitting || !isValid}
                  type="submit"
                  className=" text-md h-12 w-64 items-center rounded-lg bg-orange-100  font-bold disabled:bg-slate-400 lg:mt-8"
                >
                  Purchase
                </button>
              </Link>
            </div>
          )}
        </Formik>
      </div>
    </div>
  )
}

Payment.isPublicPage = true
export default Payment
