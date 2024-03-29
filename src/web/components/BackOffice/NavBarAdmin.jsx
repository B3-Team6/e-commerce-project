import routes from "@/web/routes"
import {
  HomeIcon,
  UserIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  TagIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid"
import Link from "next/link"

const NavBarAdmin = () => {
  return (
    <>
      <div className="sticky top-0 flex w-full justify-between border-b-2 border-black bg-white px-4 py-2 shadow-xl">
        <div className="flex items-center font-serif text-3xl font-black hover:cursor-pointer">
          <Link href={"/"}>AIRNEIS</Link>
        </div>
        <div className="flex gap-4">
          <Link
            href={routes.backoffice.backoffice()}
            className="flex flex-col duration-300 hover:cursor-pointer hover:text-slate-300"
          >
            <HomeIcon className="h-8 " />
            Home
          </Link>

          <Link
            href={routes.backoffice.user()}
            className="flex flex-col duration-300 hover:cursor-pointer hover:text-slate-300"
          >
            <UserIcon className="h-8 " />
            Users
          </Link>
          <Link
            href={routes.backoffice.product()}
            className="flex flex-col duration-300 hover:cursor-pointer hover:text-slate-300"
          >
            <ShoppingBagIcon className="h-8" />
            Products
          </Link>
          <Link
            href={routes.backoffice.category()}
            className="flex flex-col duration-300 hover:cursor-pointer hover:text-slate-300"
          >
            <TagIcon className="h-8 " />
            Category
          </Link>
          <Link
            href={routes.backoffice.order()}
            className="flex flex-col duration-300 hover:cursor-pointer hover:text-slate-300"
          >
            <ShoppingCartIcon className="h-8 " />
            Orders
          </Link>

          <Link
            href={routes.backoffice.contact()}
            className="flex flex-col duration-300 hover:cursor-pointer hover:text-slate-300"
          >
            <EnvelopeIcon className="h-8 " />
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBarAdmin
