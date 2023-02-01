import {Bars3Icon} from "@heroicons/react/24/solid"

const NavBar = () => {
  return (
  <div className="bg-white z-50 fixed top-0 w-full shadow">
    <nav id="main-nav" className="bg-white max-w-5xl mx-auto p-6 flex items-center justify-between">
      <a href="#" className="flex" aria-label="Page d'accueil">
        <p className="hidden md:w-7 md:inline md:mr-4"></p><span className="text-lg lg:text-xl" aria-hidden="true">AIRNEIS</span>
      </a>
        <button className="cursor-pointer w-7 md:hidden" aria-expanded="false" aria-label="toogle button" id="menu-btn">
          <Bars3Icon></Bars3Icon>
       </button>
      <ul className="w-full absolute top-full left-0 -translate-y-full -z-10  text-gray-800 border-b border-gray-200 flex flex-col items-center md:static md:z-10  
      md:w-min md:transform-none md:border-none md:flex-row" id="toogle-menu">
        <li className="py-4 md:py-0 md:mr-6">
          <a href="#" className="text-sm uppercase fony-semibold w-full hover:text-rose-600">Accueil</a>
          </li>
           <li className="py-4 md:py-0 md:mr-6">
          <a href="#" className="text-sm uppercase fony-semibold w-full hover:text-rose-600">Produits</a>
          </li>
           <li className="py-4 md:py-0 md:mr-6">
          <a href="#" className="text-sm uppercase fony-semibold w-full hover:text-rose-600">Categories</a>
          </li>
           <li className="py-4 md:py-0 md:mr-6">
          <a href="#" className="text-sm uppercase fony-semibold w-full hover:text-rose-600">Contact</a>
          </li>
      </ul>
    </nav>
    </div> 
  )  
}
 
export default NavBar;