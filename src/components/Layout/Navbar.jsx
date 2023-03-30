import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { Bars3Icon } from "@heroicons/react/24/solid"
import React, { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="bg-orange-100 flex justify-between p-2 sticky top-0 z-20">
        <a href="#" className="font-serif font-bold text-2xl pl-2">
          AIRNEIS
        </a>
        <div className="flex gap-4 ">
          <MagnifyingGlassIcon className="h-8 w-8 hover:text-white" />
          <ShoppingCartIcon className="h-8 w-8  hover:text-white" />
          <div className="">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <Bars3Icon className="h-8 w-8  hover:text-white  " />
            </button>
            {isOpen && (
              <ul className="absolute right-0 mt-2 bg-orange-100 p-8 ">
                <li className="mb-3">
                  <a
                    href="#"
                    className="block p-2 hover:text-white hover:bg-black  justify-center"
                  >
                    Se connecter
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="block p-2  hover:text-white hover:bg-black"
                  >
                    S'inscrire
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="block p-2 hover:text-white hover:bg-black"
                  >
                    A propos d'AIRNEIS
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
