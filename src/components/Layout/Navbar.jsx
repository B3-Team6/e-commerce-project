import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <>
      <div className="bg-orange-100 flex justify-between p-2 sticky top-0 z-20">
        <a href="#" className="font-serif font-bold text-2xl pl-2">
          AIRNES
        </a>
        <div className="flex gap-4 ">
          <MagnifyingGlassIcon className="h-8 w-8 hover:text-white" />
          <ShoppingCartIcon className="h-8 w-8  hover:text-white" />
          <Bars3Icon className="h-8 w-8  hover:text-white" />
        </div>
      </div>
    </>
  );
};
export default Navbar;