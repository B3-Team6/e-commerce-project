import "@/styles/style.css"
import Layout from "@/web/components/Layout/Layout"
import { CartProvider } from "@/web/hooks/CartContext"
import { AppContextProvider } from "@/web/hooks/useAppContext"

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <AppContextProvider isPublicPage={Component.isPublicPage}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContextProvider>
      </CartProvider>
    </>
  )
}
