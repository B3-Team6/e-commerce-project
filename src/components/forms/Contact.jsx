import { Formik, Form } from "formik"
import * as yup from "yup"
import FormField from "@/components/forms/Formfield"

const initialValues = {
  
  email: "",
 
  message: ""

}
const validationSchema = yup.object().shape({

  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  message: yup
    .string()
    .required("Password is required"),

})

const App = (props) => 
{
 const {onSubmit} = props

  return (
    <>
    <div className="flex justify-center text-xl font-bold sm:my-20 lg:text-5xl">Contact us</div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, isValid}) => (
          <Form className="flex flex-col gap-4 mx-6 lg:mx-12">
            
            <FormField
              name="email"
              type="email"
              label="Email*"
              placeholder="Enter your E-mail"
            />
           
            <FormField
              name="message"
              type="message"
              label="Message*"
              placeholder="Enter your Message"
            />
           
            <div className="flex justify-center">
             <button
               disabled={isSubmitting || !isValid}
               type="submit"
               className=" font-bold bg-orange-200 disabled:bg-slate-400 text-md flex justify-center items-center  h-12 rounded-lg w-80"> 
              Submit
             </button>
            </div>
            
            
          </Form>
        )
        }
      </Formik>
      
    </>
  )
}

export default App