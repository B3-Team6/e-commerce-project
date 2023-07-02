import "@/styles/style.css"
import Layout from "@/web/components/Layout/Layout"
import { CartProvider } from "@/web/hooks/CartContext"

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
      <CartProvider>
        <AppContextProvider isPublicPage={Component.isPublicPage}>
          {renderLayout(<Component {...pageProps} />)}
        </AppContextProvider>
      </CartProvider>
    </>
  )
}
