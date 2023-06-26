import axios from "axios"
import Head from "next/head"
import Image from "next/image"

export const getServerSideProps = async ({ params }) => {
  const categoryId = params.id

  const categoryResponse = await axios.get(
    `http://localhost:3000/api/backoffice/category/${categoryId}`
  )

  const { data: categoryData } = categoryResponse

  const productsResponse = await axios.get(
    `http://localhost:3000/api/backoffice/product/?categoryId=${categoryId}`
  )

  const { data: productsData } = productsResponse

  return {
    props: {
      category: categoryData.result,
      products: productsData.result,
    },
  }
}

const Category = (props) => {
  const { category, products } = props

  return (
    <>
      <Head>
        <title>AIRNEIS - Category - {category.name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex  justify-center ">
        <div className="group flex items-center justify-center ">
          <Image
            alt="canape"
            width={550}
            height={550}
            src="/images/canape.jpg"
            className="w-full   rounded-3xl p-4 "
          />
          <div className="absolute text-3xl font-black">{category.name}</div>
        </div>
      </div>
      <div className="mb-4 flex justify-center font-bold ">
        {category.description}
      </div>
      <div className="bg-orange-100 p-2 text-center  font-serif text-sm font-bold text-white md:text-lg lg:text-2xl">
        <p>
          Voici notre collection de {category.name}, cliquez sur un produit pour
          voir sa description
        </p>
      </div>

      <div className=" grid grid-cols-1 gap-3 p-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <>
            <div className="flex flex-col items-center  ">
              <div className="flex  w-5/6 items-center">
                <Image
                  alt={product.name}
                  width={400}
                  height={400}
                  src="/images/canape.jpg"
                  className="rounded-lg duration-500 hover:rotate-1 hover:opacity-50"
                />
              </div>
              <div className="flex w-5/6 items-center justify-between ">
                <a>{product.name}</a>
                &nbsp;
                <a>{product.price}</a>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
Category.isPublicPage = true
export default Category
