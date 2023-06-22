import FormField from "@/web/components/FormField"
import { Formik, Form } from "formik"
import * as yup from "yup"


const initialValues = {
    Name: "",

    Surname: "",

    Adress: "",

    City: "",

    Region: "",

    Zipcode: "",

    Country: "",

    Phonenumber: "",
}

const validationSchema = yup.object().shape({
    Name: yup
    .string()
    .required("Name is required"),

    Surname: yup
    .string()
    .required("Surname is required"),

    Address: yup
    .string()
    .required("Address is required"),

    City: yup
    .string()
    .required("City is required"),

    Region: yup
    .string()
    .required("Region is required"),

    Zipcode: yup
    .string()
    .required("Zipcode is required"),

    Country: yup
    .string()
    .required("Country is required"),

    Phonenumber: yup
    .string()
    .required("Phonenumber is required"),
  })

const Checkout = (props) => 
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
                name="Zipcode"
                type="text"
                label="Zipcode"
                placeholder="Enter your Zip code"
                className="mb-8"
              />

              <FormField
                name="Country"
                type="text"
                label="Country"
                placeholder="Enter your Country"
                className="mb-8"
              />

              <FormField
                name="Phonenumber"
                type="number"
                label="Phonenumber"
                placeholder="Enter your phone number"
                className="mb-8"
              />
            </div>
            
          </Form>
              <div className="flex justify-center items-center  lg:col-start-2">
               <button
                 disabled={isSubmitting || !isValid}
                 type="submit"
                 className=" font-bold bg-orange-100 disabled:bg-slate-400 text-md lg:mt-8 items-center  h-12 rounded-lg w-64"> 
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

Checkout.isPublicPage = true
export default Checkout