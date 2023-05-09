import { AppContextProvider } from "@/web/hooks/useAppContext"
import Layout from "@/web/components/Layout/Layout"
import "@/styles/style.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider isPublicPage={Component.isPublicPage}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </>
  )
}