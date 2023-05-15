import { AppContextProvider, CartProvider } from "@/web/hooks/useAppContext"
import Layout from "@/web/components/Layout/Layout"
import "@/styles/style.css"

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
