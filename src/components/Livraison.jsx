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
    
    <div className="flex justify-center text-xl font-bold my-12  lg:text-5xl">Livraison</div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, isValid}) => (
        <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 ">
          <Form className="flex lg:flex-col gap-4  justify-center">
            <div className="lg:col-start-1  lg:ml-8">

               <FormField
                name="Name"
                type="text"
                label="Name"
                placeholder="Name"
                className="mb-8"
              />

              <FormField
                name="Surname"
                type="texte"
                label="Surname"
                placeholder="Surname"
                className="mb-8"
              />
           
              <FormField
                name="Address"
                type="text"
                label="Address"
                placeholder="Enter your Address"
                className="mb-8"
                
              />

              <FormField
                name="City"
                type="text"
                label="City"
                placeholder="Name of your City"
                className="mb-8"
              />

             <FormField
                name="Region"
                type="text"
                label="Region"
                placeholder="Name of your Region"
                className="mb-8"
              />

              <FormField
                name="Zip code"
                type="text"
                label="Zip code"
                placeholder="Enter your Zip code"
                className="mb-8"
              />

              <FormField
                name="Country"
                type="*text"
                label="Country"
                placeholder="Enter your Country"
                className="mb-8"
              />

              <FormField
                name="Phone number"
                type="number"
                label="Phone number"
                placeholder="Enter your phone number"
                className="mb-8"
              />
            </div>
            
          </Form>
              <div className="flex justify-center items-center  lg:col-start-2">
               <button
                 disabled={isSubmitting || !isValid}
                 type="submit"
                 className=" font-bold bg-orange-200 disabled:bg-slate-400 text-md lg:mt-8 items-center  h-12 rounded-lg w-64"> 
                Passer au paiement 
               </button>
              </div>
        </div>
        )
        }
      </Formik>
      
    </>
  )
}

export default App