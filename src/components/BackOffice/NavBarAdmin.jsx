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
        <div className="flex gap-4 font-serif">
          <span className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300">
            <HomeIcon className="h-8 " />
            Home
          </span>
          <span className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300">
            <ChartBarIcon className="h-8 " />
            Dashboard
          </span>
          <span className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300">
            <UserIcon className="h-8 " />
            Users
          </span>
          <span className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300">
            <ShoppingBagIcon className="h-8" />
            Products
          </span>
          <span className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300">
            <TagIcon className="h-8 " />
            Category
          </span>
          <span className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300">
            <ShoppingCartIcon className="h-8 " />
            Orders
          </span>

          <span className="flex flex-col hover:text-slate-300 hover:cursor-pointer duration-300">
            <PhotoIcon className="h-8 " />
            Images
          </span>
        </div>
      </div>
    </>
  )
}

export default NavBarAdmin
