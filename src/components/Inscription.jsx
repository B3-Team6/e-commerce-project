import { Formik, Form } from "formik"
import * as yup from "yup"
import FormField from "@/components/Formfield"

const initialValues = {
  
  email: "",
 
password: ""

}
const validationSchema = yup.object().shape({

  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a special character"),

})

const App = (props) => 
{
 const {onSubmit} = props

  return (
    <>
    <div className="flex justify-center text-xl font-bold my-12 lg:my-20 lg:text-5xl">Inscription</div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, isValid}) => (
          <Form className="flex flex-col gap-4 mx-6 lg:mx-12">

             <FormField
              name="Name"
              type="text"
              label="Name"
              placeholder="Entre your Name"
            />

            <FormField
              name="email"
              type="email"
              label="Email*"
              placeholder="Entre your E-mail"
            />
           
            <FormField
              name="password"
              type="password"
              label="Password*"
              placeholder="Enter your Password"
            />
            
            <div className="flex items-center justify-center font-bold mb-32 lg:mb-32 ">
               <span className="mr-2">Pas de compte?</span>
               <a href="" className="text-blue-500">Inscrivez-vous</a>
            </div>
           
            <div className="flex justify-center">
             <button
               disabled={isSubmitting || !isValid}
               type="submit"
               className=" font-bold bg-orange-200 disabled:bg-slate-400 text-md flex justify-center items-center h-12 rounded-lg w-80"> 
              Connexion
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