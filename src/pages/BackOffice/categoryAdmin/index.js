import Head from "next/head"

import LayoutAdmin from "@/components/BackOffice/LayoutAdmin"

const CategoryAdmin = () => {
  return (
    <>
      <Head>
        <title>Back Office</title>
        <meta name="description" content="Terms of Use page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Category</div>
    </>
  )
}
CategoryAdmin.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

CategoryAdmin.isPublicPage = true
export default CategoryAdmin
