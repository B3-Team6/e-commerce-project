import Layout from "@/web/components/Layout/Layout"
import "@/styles/style.css"
import { AppContextProvider } from "@/web/hooks/useAppContext"

export default function App({ Component, pageProps }) {
  const renderLayout =
    Component.getLayout ||
    ((page) => {
      return (
        <>
          <Layout>{page}</Layout>
        </>
      )
    })

  return (
    <>
      <AppContextProvider isPublicPage={Component.isPublicPage}>
        {renderLayout(<Component {...pageProps} />)}
      </AppContextProvider>
    </>
  )
}
