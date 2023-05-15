import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import classnames from "classnames";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-orange-100 flex justify-between p-3 sticky top-0 z-20">
        <a href="#" className="font-serif font-bold text-2xl pl-2">
          AIRNES
        </a>
        <div className="flex gap-4 ">
          <MagnifyingGlassIcon className="h-8 w-8 hover:text-white duration-300" />
          <ShoppingCartIcon className="h-8 w-8  hover:text-white duration-300" />
          <div className="">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <Bars3Icon
                className={classnames(
                  "h-8 w-8  hover:text-white duration-300	",
                  isOpen ? "rotate-90" : ""
                )}
              />
            </button>
            {isOpen && (
              <ul className="absolute right-0 mt-2 bg-orange-100 p-8 ">
                <li className="mb-3">
                  <a
                    href="#"
                    className="block p-2 hover:text-white hover:bg-black  justify-center duration-300"
                  >
                    Se connecter
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="block p-2  hover:text-white hover:bg-black duration-300"
                  >
                    S'inscrire
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="block p-2 hover:text-white hover:bg-black duration-300"
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
  );
};
export default Navbar;