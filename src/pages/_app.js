import { AppContextProvider } from "@/web/hooks/useAppContext"
import "@/styles/style.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider isPublicPage={Component.isPublicPage}>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  )
}
