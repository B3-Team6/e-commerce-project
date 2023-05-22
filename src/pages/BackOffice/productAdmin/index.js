import Head from "next/head"

import LayoutAdmin from "@/components/BackOffice/LayoutAdmin"

const ProductAdmin = () => {
  return (
    <>
      <Head>
        <title>Back Office</title>
        <meta name="description" content="Terms of Use page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Product</div>
    </>
  )
}
ProductAdmin.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

ProductAdmin.isPublicPage = true
export default ProductAdmin
