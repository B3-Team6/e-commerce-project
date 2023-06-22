import routes from "@/web/routes"
import Link from "next/link"




const Summary = () => {

  return (
    <>
    <h1 className="flex justify-center text-3xl font-bold py-8">Commande effectuée</h1>
    
    <h2 className="flex justify-center text-lg">Merci de votre achat !</h2>
    <div className=" flex justify-center">
    <h3 className="flex justify-center text-lg">Votre commande à bien été enregistrée sous le numéro </h3> <a href="#" className="text-blue-600 hover:underline"> XXXXXX</a>.<br/>
    <h3 > Vous pouvez suivre son état depuis votre <a href="#" className="text-blue-600 hover:underline">espace client</a>.</h3>
     </div>
    <Link href={routes.home()} className="flex justify-center">
    <button  className=" text-white p-2 font-semibold rounded-lg bg-black px-4 mb-80 mt-8">Back to home</button>
    </Link>

    </>
  )
}

Summary.isPublicPage = true
export default Summary