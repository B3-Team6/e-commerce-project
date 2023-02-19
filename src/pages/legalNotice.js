import Head from "next/head"
import Footer from "@/components/Footer"
import LegalNotice from "@/components/LegalNotice"

const LegalNoticePage = () => {
  return (
    <>
      <Head>
        <title>Terms of Use</title>
        <meta name="description" content="Legal notice page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LegalNotice></LegalNotice>
      <Footer></Footer>
    </>
  )
}
export default LegalNoticePage
