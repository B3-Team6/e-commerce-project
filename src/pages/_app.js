import "@/styles/style.css"

import { AppContextProvider } from "@/web/hooks/useAppContext"

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider isPublicPage={Component.isPublicPage}>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  )
}
