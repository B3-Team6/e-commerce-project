import Carousel from "@/web/components/Carousel"
import routes from "@/web/routes"
import axios from "axios"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export const getServerSideProps = async () => {
  const productAllResponse = await axios.get(
    `http://localhost:3000/api/backoffice/product/`
  )

  const categoryAllResponse = await axios.get(
    `http://localhost:3000/api/backoffice/category/`
  )

  const { data: productData } = productAllResponse
  const { data: categoryData } = categoryAllResponse

  return {
    props: {
      products: productData.result,
      categories: categoryData.result,
    },
  }
}
const Home = (props) => {
  const { products, categories } = props
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>{t("homepageHeadTitle")}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel />

      <div className="bg-orange-100 p-2 text-center  font-serif text-sm font-bold text-black md:text-lg lg:text-2xl">
        <p>{t("discoverCategory")}</p>
      </div>

      <div className="grid  flex-col  items-center gap-3  p-2  md:grid-cols-2 lg:grid-cols-3 ">
        {categories.map((categorie) => (
          <div key={categorie.id}>
            <div className="flex justify-center">
              <div className="group flex w-5/6 items-center  justify-center ">
                <div className=" absolute z-10 hidden text-2xl font-black text-black group-hover:flex">
                  {categorie.name}
                </div>
                <Link href={`/category/${categorie.id}`}>
                  <Image
                    alt={categorie.name}
                    width={400}
                    height={400}
                    src={categorie.image}
                    className="rounded-lg duration-500 hover:rotate-1 hover:opacity-50"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-orange-100 p-2 text-center  font-serif text-sm font-bold text-black md:text-lg lg:text-2xl">
        <p>{t("discoverProduct")}</p>
      </div>

      <div className="grid grid-cols-1 items-center gap-3 p-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id}>
            <Link href={routes.products(product.id)}>
              <div className="flex justify-center">
                <div className="group flex w-3/5 items-center justify-center">
                  <div className="absolute z-10 hidden text-xl font-black text-black group-hover:flex">
                    {product.name}
                  </div>
                  <div className="h-60 w-auto">
                    <Image
                      alt={product.name}
                      width={400}
                      height={400}
                      src={product.image}
                      className="h-full w-full rounded-lg object-cover duration-500 hover:rotate-1 hover:opacity-50"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

Home.isPublicPage = true
export default Home
