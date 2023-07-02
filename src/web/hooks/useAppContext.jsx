import {
  createContext,
  useCallback,
  useEffect,
  useState,
  useContext,
} from "react"
import { useCookies } from "react-cookie"
import config from "@/web/config.js"
import createAPIClient from "@/web/createAPIClient.js"
import parseSession from "@/web/parseSession.js"
import signInService from "@/web/services/user/signIn"
import signUpService from "@/web/services/user/signUp"
import contactUsService from "@/web/services/contactUs.js"
import updateCategoryService from "@/web/services/backoffice/categories/updateCategory"
import deleteCategoryService from "@/web/services/backoffice/categories/deleteCategory"
import addCategoryService from "@/web/services/backoffice/categories/addCategory"
import deleteContactService from "@/web/services/backoffice/contact/deleteContact"
import updateProductService from "@/web/services/backoffice/products/updateProduct"
import deleteProductService from "@/web/services/backoffice/products/deleteProduct"
import addProductService from "@/web/services/backoffice/products/addProduct"

import updateOrderService from "@/web/services/backoffice/orders/updateOrder"
import deleteOrderService from "@/web/services/backoffice/orders/deleteOrder"
import addOrderService from "@/web/services/backoffice/orders/addOrder"

import updateUserService from "@/web/services/backoffice/users/updateUser"
import deleteUserService from "@/web/services/backoffice/users/deleteUser"
import addUserService from "@/web/services/backoffice/users/addUser"
import sendMailPasswordService from "@/web/services/mail/sendMailPassword"
import resetPasswordService from "@/web/services/user/resetPassword"

const AppContext = createContext()

export const AppContextProvider = (props) => {
  const { isPublicPage, ...otherProps } = props
  const [session, setSession] = useState(null)
  const [jwt, setJWT] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies([
    config.session.localStorageKey,
  ])

  const api = createAPIClient({ jwt })

  const signUp = signUpService({ api })
  const signIn = signInService({ api, setSession, setJWT })
  const signOut = useCallback(() => {
    removeCookie(config.session.localStorageKey)
    setSession(false)
    setJWT(null)
    localStorage.removeItem("jwt") // Supprimer le jeton JWT du localStorage
  }, [removeCookie])

  useEffect(() => {
    const storedJWT = localStorage.getItem("jwt") // Récupérer le jeton JWT du localStorage

    if (storedJWT) {
      const session = parseSession(storedJWT)
      setSession(session)
      setJWT(storedJWT)
    }
  }, [])

  useEffect(() => {
    if (jwt) {
      // Sauvegarder le jeton JWT dans les cookies à chaque mise à jour
      setCookie(config.session.localStorageKey, jwt, { path: "/" })
      // Sauvegarder le jeton JWT dans le localStorage
      localStorage.setItem("jwt", jwt)
    }
  }, [cookies, jwt, setCookie])

  const contactUs = contactUsService({ api })
  const sendMailPassword = sendMailPasswordService({ api })
  const resetPassword = resetPasswordService({ api })

  const updateProduct = updateProductService({ api })
  const deleteProduct = deleteProductService({ api })
  const addProduct = addProductService({ api })

  const updateCategory = updateCategoryService({ api })
  const deleteCategory = deleteCategoryService({ api })
  const addCategory = addCategoryService({ api })

  const updateUser = updateUserService({ api })
  const deleteUser = deleteUserService({ api })
  const addUser = addUserService({ api })

  const updateOrder = updateOrderService({ api })
  const deleteOrder = deleteOrderService({ api })
  const addOrder = addOrderService({ api })

  const deleteContact = deleteContactService({ api })

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
          contactUs,
          sendMailPassword,
          resetPassword,
          updateCategory,
          deleteCategory,
          addCategory,
          updateProduct,
          deleteProduct,
          addProduct,
          updateOrder,
          deleteOrder,
          addOrder,
          updateUser,
          deleteUser,
          addUser,
          deleteContact,
        },
        state: {
          session,
        },
        setJWT: (jwt) => {
          setJWT(jwt)
          setCookie(config.session.localStorageKey, jwt, { path: "/" })
          localStorage.setItem("jwt", jwt)
        },
        removeJWT: () => {
          removeCookie(config.session.localStorageKey)
          setJWT(null)
          localStorage.removeItem("jwt") // Supprimer le jeton JWT du localStorage
        },
      }}
      {...otherProps}
    ></AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)

export default useAppContext
