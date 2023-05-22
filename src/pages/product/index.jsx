import CarouselProduct from "@/web/components/Product/CarousselProduct"
import SimilarProducts from "@/web/components/Product/SimilarProducts"
import Head from "next/head"
import SingleProduct from "@/web/components/Product/SingleProduct"

const Product = () => {
  return (
    <>
      <Head>
        <title>AIRNEIS - Produits</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between lg:flex-row ">
        <CarouselProduct />
        <SingleProduct />
      </div>
      <SimilarProducts />
    </>
  )
}

Product.isPublicPage = true
export default Product