import routes from "@/web/routes"
import axios from "axios"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export const getServerSideProps = async ({ params }) => {
  const categoryId = params.id

  const categoryIdResponse = await axios.get(
    `http://localhost:3000/api/backoffice/category/${categoryId}`
  )

  const { data: categoryData } = categoryIdResponse

  const productsIdResponse = await axios.get(
    `http://localhost:3000/api/backoffice/category/product?categoryId=${categoryId}`
  )

  const { data: productsData } = productsIdResponse

  return {
    props: {
      category: categoryData.result,
      products: productsData.result,
    },
  }
}

const Category = (props) => {
  const { t } = useTranslation()
  const { category, products } = props

  return (
    <>
      <Head>
        <title>
          {t("categoryTitle2")}
          {category.name}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Airneis.jpg" />
      </Head>

      <div className="min-h-screen">
        <div className="flex justify-center">
          <div className="group flex items-center justify-center">
            <div className="h-auto w-auto">
              <Image
                alt="canape"
                width={550}
                height={550}
                src={category.image}
                className="w-full rounded-3xl object-cover p-4"
              />
            </div>
            <div className="absolute text-3xl font-black">{category.name}</div>
          </div>
        </div>
        <div className="mb-4 flex justify-center font-bold">
          {category.description}
        </div>
        <div className="bg-orange-100 p-2 text-center font-serif text-sm font-bold md:text-lg lg:text-2xl">
          <p>
            {t("seeDescription")}
            {category.name}
            {t("seeDescription2")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link key={product.id} href={routes.products(product.id)}>
              <div className="flex flex-col items-center">
                <div className="flex h-72 w-5/6 items-center">
                  <Image
                    alt={product.name}
                    width={400}
                    height={400}
                    src={product.image}
                    className="h-full w-full rounded-lg object-cover duration-500 hover:rotate-1 hover:opacity-50"
                  />
                </div>
                <div className="flex w-5/6 items-center justify-between">
                  <span>{product.name}</span>
                  &nbsp;
                  <span>{product.price}€</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
Category.isPublicPage = true
export default Category
