import Head from "next/head"
import Footer from "@/components/Footer"
import Tos from "@/components/Tos"

const TosPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Use</title>
        <meta name="description" content="Terms of Use page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tos></Tos>
      <Footer></Footer>
    </>
  )
}
export default TosPage
