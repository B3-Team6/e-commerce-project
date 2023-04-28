import { AppContextProvider } from "@/web/hooks/useAppContext"
import "@/styles/style.css"
import Layout from "@/web/components/Layout/Layout"

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
