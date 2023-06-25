import useAppContext from "@/web/hooks/useAppContext"
import routes from "@/web/routes.js"
import { useEffect, useState } from "react"
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import { useTranslation } from "react-i18next"

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

  const { t, i18n } = useTranslation()

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
            <select className="bg-[#F6E6D1] mr-6"
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>

            <button className="cursor-pointer hover:text-gray-500">
              <MagnifyingGlassIcon className="h-8 lg:mr-6 lg:w-10" />
            </button>

            <div className="relative">
              <button className="group relative flex items-center justify-center rounded-md p-2 text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <ShoppingCartIcon
                  className="h-8 w-10 lg:mr-6"
                  aria-hidden="true"
                />
              </button>
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
                      <a href="#">{t('mySettings')}</a>
                    </li>
                    <li className="my-8 border-b border-gray-400  uppercase">
                      <a href="#">{t('myOrders')}</a>
                    </li>
                    <li className="my-8 border-b border-gray-400  uppercase">
                      <a href="#">{t('legalNotice')}</a>
                    </li>
                    <li className="my-8 border-b border-gray-400   uppercase">
                      <a href="#">{t('termsOfUse')}</a>
                    </li>
                    <li className="my-8 border-b border-gray-400   uppercase">
                      <a href="#">{t('contactUs')}</a>
                    </li>
                    <li className="my-8 border-b border-gray-400  uppercase">
                      <a href="#">{t('aboutUs')}</a>
                    </li>
                    <button
                      className="my-8 border-b border-gray-400 uppercase"
                      onClick={HandleSignOut}
                    >
                      {t('signOut')}
                    </button>
                  </>
                ) : (
                  <>
                    <li className="my-8 border-b border-gray-400 uppercase">
                      <Link
                        href={routes.signIn()}
                        onClick={() => setOpen(false)}
                      >
                        {t('signIn')}
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400 uppercase">
                      <Link
                        href={routes.signUp()}
                        onClick={() => setOpen(false)}
                      >
                        {t('signUp')}
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400  uppercase">
                      <Link
                        href={routes.legalNotice()}
                        onClick={() => setOpen(false)}
                      >
                        {t('legalNotice')}
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400   uppercase">
                      <Link href={routes.tos()} onClick={() => setOpen(false)}>
                        {t('termsOfUse')}
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400   uppercase">
                      <Link
                        href={routes.contact()}
                        onClick={() => setOpen(false)}
                      >
                        {t('contactUs')}
                      </Link>
                    </li>
                    <li className="my-8 border-b border-gray-400  uppercase">
                      <a href="#">{t('aboutUs')}</a>
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
