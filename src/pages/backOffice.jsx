import Head from "next/head"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { PhotoIcon } from "@heroicons/react/24/solid"
import { UserIcon } from "@heroicons/react/24/solid"
import { TagIcon } from "@heroicons/react/24/solid"
import LayoutAdmin from "@/components/BackOffice/LayoutAdmin"

const BackOffice = () => {
  return (
    <>
      <Head>
        <title>Back Office</title>
        <meta name="description" content="Terms of Use page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-black flex justify-center text-2xl">Back Office</div>
      <div>
        <span className="flex items-center">
          <ShoppingCartIcon className="h-10" />
          Orders
        </span>
        <span>
          <ShoppingBagIcon className="h-10" />
          Products
        </span>
        <span>
          <PhotoIcon className="h-10" />
          Images
        </span>
        <span>
          <UserIcon className="h-10" />
          Users
        </span>
        <span>
          <TagIcon className="h-10" />
          Category
        </span>
      </div>
    </>
  )
}
BackOffice.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}
export default BackOffice
