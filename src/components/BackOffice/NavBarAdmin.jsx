import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { PhotoIcon } from "@heroicons/react/24/solid"
import { UserIcon } from "@heroicons/react/24/solid"
import { TagIcon } from "@heroicons/react/24/solid"

const NavBarAdmin = () => {
  return (
    <>
      <div className="flex justify-between border-b-2 border-black px-4 py-2 shadow-xl">
        <div className="font-black text-3xl flex items-center font-serif">
          AIRNEIS
        </div>
        <div className="flex gap-4">
          <span className="flex flex-col">
            <UserIcon className="h-8" />
            Users
          </span>
          <span className="flex flex-col">
            <ShoppingBagIcon className="h-8" />
            Products
          </span>
          <span className="flex flex-col">
            <TagIcon className="h-8" />
            Category
          </span>
          <span className="flex flex-col">
            <ShoppingCartIcon className="h-8" />
            Orders
          </span>

          <span className="flex flex-col">
            <PhotoIcon className="h-8" />
            Images
          </span>
        </div>
      </div>
    </>
  )
}

export default NavBarAdmin
