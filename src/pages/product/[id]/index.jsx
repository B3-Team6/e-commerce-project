import { CartContext } from "@/web/hooks/CartContext"
import routes from "@/web/routes"
import axios from "axios"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useContext } from "react"
import { useTranslation } from "react-i18next"

export const getServerSideProps = async ({ params }) => {
  const productId = params.id
  const categoryId = params.id

  const productIdResponse = await axios.get(
    `http://localhost:3000/api/backoffice/product/${productId}`
  )

  const categoryIdResponse = await axios.get(
    `http://localhost:3000/api/backoffice/category/product?categoryId=${categoryId}`
  )

  const { data: productData } = productIdResponse
  const { data: categoryData } = categoryIdResponse

  return {
    props: {
      products: productData.result,
      categories: categoryData.result,
    },
  }
}

const Product = (props) => {
  const { t } = useTranslation()
  const { products, categories } = props
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = useCallback(
    (product) => {
      addToCart(product)
    },
    [addToCart]
  )

  const getStockStatus = (quantity) => {
    if (quantity > 20) {
      return t('inStock')
    } else if (quantity > 0) {
      return t('lowStock')
    } else {
      return t('outOfStock')
    }
  }

  return (
    <>
      <Head>
        <title>{t('productTitle2')}{products.name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between lg:flex-row">
        <Image
          alt="canape"
          width={550}
          height={550}
          src={products.image}
          className="w-full rounded-3xl p-4"
        />
        <div className="flex p-4">
          <div key={products.id} className="flex font-sans">
            <div className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  {products.name}
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                  {products.price} €
                </div>
                <div className="ml-3 text-sm font-medium text-slate-500">
                  {getStockStatus(products.quantity)}
                </div>
              </div>

              <div className="mb-6 mt-4 flex items-baseline border-b border-slate-200 pb-6"></div>
              <p className="flex text-sm text-slate-700">
                {products.description}
              </p>

              <div className="mb-6 flex space-x-4 text-sm font-medium">
                <div className="flex flex-auto justify-end space-x-4">
                  <button
                    className={`mt-7 h-10 rounded-md border border-slate-200 px-6 font-semibold text-slate-900 ${
                      products.quantity === 0 ? "bg-gray-300" : "bg-orange-100"
                    }`}
                    onClick={() => handleAddToCart(products)}
                    disabled={products.quantity === 0}
                  >
                    {products.quantity === 0 ? "Out of stock" : "Add to cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-100 p-2 text-center  font-serif text-sm font-bold md:text-lg lg:text-2xl">
        <p>{t('similarProduct')}</p>
      </div>

      <div className=" grid grid-cols-1 gap-3 p-4 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((product) => (
          <>
            <Link href={routes.products(product.id)}>
              <div className="flex flex-col items-center  ">
                <div className="flex  w-5/6 items-center">
                  <Image
                    alt={product.name}
                    width={400}
                    height={400}
                    src={product.image}
                    className="rounded-lg duration-500 hover:rotate-1 hover:opacity-50"
                  />
                </div>
                <div className="flex w-5/6 items-center justify-between ">
                  <a>{product.name}</a>
                  &nbsp;
                  <a>{product.price} €</a>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  )
}

Product.isPublicPage = true
export default Product