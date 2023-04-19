import Head from "next/head"

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
    </>
  )
}
BackOffice.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}
export default BackOffice
