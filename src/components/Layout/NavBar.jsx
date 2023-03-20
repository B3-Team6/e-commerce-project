import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline"
import { useState } from "react"

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-5 bg-[#F6E6D1] font-semibold font-[Galdeano]">
      <a href="#">
        <span className="text-black ml-10 font-bold text-2xl">AIRNEIS</span>
      </a>
      <nav>
        <section className="flex flex-row">
          <button className="cursor-pointer">
            <MagnifyingGlassIcon className="w-10 h-10 mr-6"></MagnifyingGlassIcon>
          </button>
          <button className="cursor-pointer">
            <ShoppingCartIcon className="w-10 h-10 mr-6"></ShoppingCartIcon>
          </button>

          <div
            className="space-y-2 pr-10 mt-2 cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Bars3Icon className="w-10 h-10 cursor-pointer"></Bars3Icon>
          </div>

          <div className={isOpen ? "showNav" : "hideNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="w-12 h-12 mr-6 cursor-pointer"></XMarkIcon>
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
