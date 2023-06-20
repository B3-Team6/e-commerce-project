import routes from "@/web/routes";
import {
  HomeIcon,
  ChartBarIcon,
  UserIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  TagIcon,
  PhotoIcon,
  EnvelopeIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBarAdmin = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.position = "fixed")
      : (document.body.style.position = "initial");
  });

  return (
    <>
      <div className="sticky top-0 flex w-screen justify-between border-b-2 border-black bg-white px-4 py-2 shadow-xl items-center ">
        <div
  className={`mt-2 cursor-pointer space-y-2 duration-300 transform ${
    isOpen ? "rotate-90 " : ""
  }`}          onClick={() => setOpen((prev) => !prev) }
        >
          <Bars3Icon className="h-8 w-8 cursor-pointer hover:text-gray-500" />
        </div>
        <div className={isOpen ? "showNavAdmin" : "hideNavAdmin"}>
          <div className="absolute left-4 top-4" onClick={() => setOpen(false)}>
            <Bars3Icon className="h-8 w-8 mt-2 cursor-pointer text-transparent" />
          </div>

          <div className="flex flex-col gap-8 bg-white  pb-44 border-2 border-black pl-4">

            <Link
              href={routes.backoffice.backoffice()}
              onClick={() => setOpen(false)}
              className="gap-2 items-center flex duration-300 hover:cursor-pointer text-slate-600 hover:text-black pt-2"
            >
              <HomeIcon className="h-8" />
              Home
            </Link>
            <Link
              href={`#`}
              onClick={() => setOpen(false)}
              className="gap-2 items-center flex duration-300 hover:cursor-pointer text-slate-600 hover:text-black"
            >
              <ChartBarIcon className="h-8" />
              Dashboard
            </Link>
            <Link
              href={routes.backoffice.user()}
              onClick={() => setOpen(false)}
              className="gap-2 items-center flex duration-300 hover:cursor-pointer text-slate-600 hover:text-black"
            >
              <UserIcon className="h-8" />
              Users
            </Link>
            <Link
              href={routes.backoffice.product()}
              onClick={() => setOpen(false)}
              className="gap-2 items-center flex duration-300 hover:cursor-pointer text-slate-600 hover:text-black"
            >
              <ShoppingBagIcon className="h-8" />
              Products
            </Link>
            <Link
              href={routes.backoffice.category()}
              onClick={() => setOpen(false)}
              className="gap-2 items-center flex duration-300 hover:cursor-pointer text-slate-600 hover:text-black"
            >
              <TagIcon className="h-8" />
              Category
            </Link>
            <Link
              href={routes.backoffice.order()}
              onClick={() => setOpen(false)}
              className="gap-2 items-center flex duration-300 hover:cursor-pointer text-slate-600 hover:text-black"
            >
              <ShoppingCartIcon className="h-8" />
              Orders
            </Link>
            <Link
              href={"#"}
              onClick={() => setOpen(false)}
              className="gap-2 items-center flex duration-300 hover:cursor-pointer text-slate-600 hover:text-black"
            >
              <PhotoIcon className="h-8" />
              Images
            </Link>
            <Link
              href={routes.backoffice.contact()}
              onClick={() => setOpen(false)}
              className="gap-2 items-center flex duration-300 hover:cursor-pointer text-slate-600 hover:text-black"
            >
              <EnvelopeIcon className="h-8" />
              Contact
            </Link>
          </div>
        </div>
        <Link href={"/"} className="flex items-center font-serif  font-black hover:cursor-pointer flex-col hover:bg-blue-800">
          <a className="text-3xl" href={"/"}>AIRNEIS</a>
          <a className="text-sm" href={"/"}>BACKOFFICE</a>
        </Link>
      </div>
    </>
  );
};

export default NavBarAdmin;
