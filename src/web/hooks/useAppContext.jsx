import config from "@/web/config.js"
import createAPIClient from "@/web/createAPIClient.js"
import parseSession from "@/web/parseSession.js"
import signInService from "@/web/services/signIn.js"
import signUpService from "@/web/services/signUp.js"
import {
  createContext,
  useCallback,
  useEffect,
  useState,
  useContext,
} from "react"
import updateCategoryService from "@/web/services/backoffice/categories/updateCategory"
import deleteCategorySevrvice from "@/web/services/backoffice/categories/deleteCategory"
import addCategoryService from "@/web/services/backoffice/categories/addCategory"

import updateProductService from "@/web/services/backoffice/products/updateProduct"
import deleteProductService from "@/web/services/backoffice/products/deleteProduct"
import addProductService from "@/web/services/backoffice/products/addProduct"

const AppContext = createContext()

export const AppContextProvider = (props) => {
  const { isPublicPage, ...otherProps } = props
  const [session, setSession] = useState(null)
  const [jwt, setJWT] = useState(null)
  const api = createAPIClient({ jwt })

  const signUp = signUpService({ api })
  const signIn = signInService({ api, setSession, setJWT })
  const signOut = useCallback(() => {
    localStorage.removeItem(config.session.localStorageKey)
    setSession(false)
  }, [])

  useEffect(() => {
    const jwt = localStorage.getItem(config.session.localStorageKey)

    if (!jwt) {
      return
    }

    const session = parseSession(jwt)
    setSession(session)
    setJWT({ jwt })
  }, [])

  const updateProduct = updateProductService({ api })
  const deleteProduct = deleteProductService({ api })
  const addProduct = addProductService({ api })

  const updateCategory = updateCategoryService({ api })
  const deleteCategory = deleteCategorySevrvice({ api })
  const addCategory = addCategoryService({ api })

  if (!isPublicPage && session === null) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white text-4xl font-bold">
        <span className="animate-bounce">Loading...</span>
      </div>
    )
  }

  return (
    <AppContext.Provider
      value={{
        actions: {
          signUp,
          signIn,
          signOut,
          updateCategory,
          deleteCategory,
          addCategory,
          updateProduct,
          deleteProduct,
          addProduct,
        },
        state: {
          session,
        },
      }}
      {...otherProps}
    ></AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)

export default useAppContext
