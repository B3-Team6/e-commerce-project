import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    isOpen
      ? (document.body.style.position = "fixed")
      : (document.body.style.position = "initial")
  })

  return (
    <div className="flex items-center justify-between border-b border-gray-400 p-3 bg-[#F6E6D1] font-semibold font-[Galdeano]">
      <a href="#">
        <span className="text-black lg:ml-10 font-bold text-2xl">AIRNEIS</span>
      </a>
      <nav>
        <section className="flex gap-3 flex-row">
          <button className="cursor-pointer hover:text-gray-500">
            <MagnifyingGlassIcon className="lg:w-10 h-8 lg:mr-6" />
          </button>

          <div className="relative">
            <button className="group relative flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <ShoppingCartIcon
                className="w-10 h-8 lg:mr-6"
                aria-hidden="true"
              />
              <span className="sr-only">Cart</span>
            </button>
          </div>
          <div
            className="space-y-2 lg:pr-10 mt-2 cursor-pointer"
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
                <a href="#">Sign in</a>
              </li>
              <li className="border-b border-gray-400 my-8  uppercase">
                <a href="#">Sign up</a>
              </li>
              <li className="border-b border-gray-400 my-8  uppercase">
                <a href="#">Legal Notice</a>
              </li>
              <li className="border-b border-gray-400 my-8   uppercase">
                <a href="#">Terms of use</a>
              </li>
              <li className="border-b border-gray-400 my-8   uppercase">
                <a href="#">Contact</a>
              </li>
              <li className="border-b border-gray-400 my-8  uppercase">
                <a href="#">About AIRNEIS</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </div>
  )
}

export default NavBar
