import useAppContext from "@/web/hooks/useAppContext"
import routes from "@/web/routes.js"
import { useContext, useEffect, useState } from "react"
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import { CartContext } from "@/web/hooks/CartContext"

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    isOpen
      ? (document.body.style.position = "fixed")
      : (document.body.style.position = "initial")
  })

  const {
    actions: { signOut },
    state: { session },
  } = useAppContext()

  const HandleSignOut = () => {
    signOut()
    window.location.href = "/"

    return HandleSignOut
  }

  const handleClose = () => {
    setOpen(false)
  }

  const { cart, setCart } = useContext(CartContext)

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")

    if (savedCart) {
      const parsedCart = JSON.parse(savedCart)

      setCart(parsedCart)
    }
  }, [setCart])

  const cartCount = Object.values(cart).reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-400 bg-[#F6E6D1] p-3 font-[Mulish] font-semibold">
        <Link href={routes.home()}>
          <span className="text-2xl font-bold text-black lg:ml-10">
            AIRNEIS
          </span>
        </Link>
        <nav>
          <section className="flex flex-row gap-3">
            <button className="cursor-pointer hover:text-gray-500">
              <MagnifyingGlassIcon className="h-8 lg:mr-6 lg:w-10" />
            </button>

            <div className="relative">
              <Link href={routes.cart()}>
                <button className="group relative flex items-center justify-center rounded-md p-2 text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  <ShoppingCartIcon
                    className="h-10 w-10 lg:mr-6"
                    aria-hidden="true"
                  />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-white">
                      {cartCount}
                    </span>
                  )}
                </button>
              </Link>
            </div>
            <div
              className="mt-2 cursor-pointer space-y-2 lg:pr-10"
              onClick={() => setOpen((prev) => !prev)}
            >
              <Bars3Icon className="h-8 w-10 cursor-pointer hover:text-gray-500"></Bars3Icon>
            </div>

            <div className={isOpen ? "showNav" : "hideNav"}>
              <div
                className="absolute right-0 top-0 px-8 py-8"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="mr-6 h-12 w-12  cursor-pointer hover:text-gray-500"></XMarkIcon>
              </div>

              <ul className="flex min-h-[200px] flex-col items-center justify-between font-[Mulish]">
                {session ? (
                  <>
                    <li className="my-8 border-b border-gray-400  uppercase">
                      <Link
                        href={routes.backoffice.backoffice()}
                        onClick={handleClose}
                      >
                        Back Office
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400  uppercase">
                      <a href="#">My Settings</a>
                    </li>
                    <li className="my-8 border-b border-gray-400  uppercase">
                      <a href="#">My Orders</a>
                    </li>

                    <li className="my-8 border-b border-gray-400  uppercase">
                      <Link href={routes.legalNotice()} onClick={handleClose}>
                        Legal Notice
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400   uppercase">
                      <Link href={routes.tos()} onClick={handleClose}>
                        Terms of Use
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400   uppercase">
                      <Link href={routes.contact()} onClick={handleClose}>
                        Contact
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400  uppercase">
                      <a href="#">About AIRNEIS</a>
                    </li>
                    <button
                      className="my-8 border-b border-gray-400 uppercase"
                      onClick={HandleSignOut}
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <li className="my-8 border-b border-gray-400 uppercase">
                      <Link href={routes.signIn()} onClick={handleClose}>
                        Sign In
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400 uppercase">
                      <Link href={routes.signUp()} onClick={handleClose}>
                        Sign Up
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400  uppercase">
                      <Link href={routes.legalNotice()} onClick={handleClose}>
                        Legal Notice
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400   uppercase">
                      <Link href={routes.tos()} onClick={handleClose}>
                        Terms of Use
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400   uppercase">
                      <Link href={routes.contact()} onClick={handleClose}>
                        Contact
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400  uppercase">
                      <a href="#">About AIRNEIS</a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </section>
        </nav>
      </div>
    </>
  )
}

export default NavBar
