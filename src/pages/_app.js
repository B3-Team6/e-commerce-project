import Layout from "@/components/Layout/Layout"
import "@/styles/style.css"

export default function App({ Component, pageProps }) {
  const renderLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>
    }

  return renderLayout(
    <>
      <Component {...pageProps} />
    </>
  )
}
