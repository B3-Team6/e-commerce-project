import {
  HomeIcon,
  ChartBarIcon,
  UserIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  TagIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid"
import Link from "next/link"

const NavBarAdmin = () => {
  return (
    <>
      <div className="flex justify-between border-b-2 border-black px-4 py-2 shadow-xl sticky top-0 w-full ">
        <div className="font-black text-3xl flex items-center font-serif hover:cursor-pointer">
          <Link href={"/"}>AIRNEIS</Link>
        </div>
        <div className="flex gap-4">
          <Link
            href={`/backoffice`}
            className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300"
          >
            <HomeIcon className="h-8 " />
            Home
          </Link>
          <Link
            href={`#`}
            className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300"
          >
            <ChartBarIcon className="h-8 " />
            Dashboard
          </Link>
          <Link
            href={`backoffice/userAdmin`}
            className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300"
          >
            <UserIcon className="h-8 " />
            Users
          </Link>
          <Link
            href={`./backoffice/productAdmin`}
            className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300"
          >
            <ShoppingBagIcon className="h-8" />
            Products
          </Link>
          <Link
            href={`./backoffice/categoryAdmin`}
            className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300"
          >
            <TagIcon className="h-8 " />
            Category
          </Link>
          <Link
            href={`./backoffice/orderAdmin`}
            className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300"
          >
            <ShoppingCartIcon className="h-8 " />
            Orders
          </Link>

          <Link
            href={`#`}
            className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300"
          >
            <PhotoIcon className="h-8 " />
            Images
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBarAdmin
