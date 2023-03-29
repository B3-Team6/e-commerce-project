import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline"
import { useState } from "react"

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  const cartItems = [
    { name: "Ordinateur portable", quantity: 10 },
    { name: "Casque sans fil", quantity: 1 },
    { name: "Souris de jeu", quantity: 3 },
  ]

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="flex items-center justify-between border-b border-gray-400 p-3 bg-[#F6E6D1] font-semibold font-[Galdeano]">
      <a href="#">
        <span className="text-black ml-10 font-bold text-2xl">AIRNEIS</span>
      </a>
      <nav>
        <section className="flex flex-row">
          <button className="cursor-pointer hover:text-gray-500">
            <MagnifyingGlassIcon className="w-10 h-8 mr-6"></MagnifyingGlassIcon>
          </button>

          <div className="relative">
            <button
              type="button"
              className="group -mr-2 relative flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <ShoppingCartIcon className="w-10 h-8 mr-6" aria-hidden="true" />
              <span className="sr-only">Panier</span>
              {totalItems > 0 && (
                <span className="absolute mr-8 top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <div
            className="space-y-2 pr-10 mt-2 cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Bars3Icon className="w-10 h-8 cursor-pointer hover:text-gray-500"></Bars3Icon>
          </div>
          <div className={isOpen ? "showNav" : "hideNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="w-12 h-12 mr-6  hover:text-gray-500 cursor-pointer"></XMarkIcon>
            </div>

            <ul className="flex flex-col items-center justify-between min-h-[200px] font-[Galdeano]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Se connecter</a>
              </li>
              <li className="border-b border-gray-400 my-8  uppercase">
                <a href="#">S’inscrire</a>
              </li>
              <li className="border-b border-gray-400 my-8  uppercase">
                <a href="#">CGU</a>
              </li>
              <li className="border-b border-gray-400 my-8   uppercase">
                <a href="#">Mentions légales</a>
              </li>
              <li className="border-b border-gray-400 my-8   uppercase">
                <a href="#">Contact</a>
              </li>
              <li className="border-b border-gray-400 my-8  uppercase">
                <a href="#">À propos d’AIRNEIS</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </div>
  )
}

export default NavBar
