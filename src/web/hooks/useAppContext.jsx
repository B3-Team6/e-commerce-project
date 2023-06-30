import config from "@/web/config.js"
import createAPIClient from "@/web/createAPIClient.js"
import parseSession from "@/web/parseSession.js"
import signInService from "@/web/services/user/signIn"
import signUpService from "@/web/services/user/signUp"
import contactUsService from "@/web/services/contactUs.js"
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
import deleteContactService from "@/web/services/backoffice/contact/deleteContact"

import updateProductService from "@/web/services/backoffice/products/updateProduct"
import deleteProductService from "@/web/services/backoffice/products/deleteProduct"
import addProductService from "@/web/services/backoffice/products/addProduct"

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
  const api = createAPIClient({ jwt })

  const signUp = signUpService({ api })
  const signIn = signInService({ api, setSession, setJWT })
  const signOut = useCallback(() => {
    localStorage.removeItem(config.session.localStorageKey)
    setSession(false)
  }, [])
  const contactUs = contactUsService({ api })
  const sendMailPassword = sendMailPasswordService({ api })
  const resetPassword = resetPasswordService({ api })

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

  const updateUser = updateUserService({ api })
  const deleteUser = deleteUserService({ api })
  const addUser = addUserService({ api })

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
          updateUser,
          deleteUser,
          addUser,
          deleteContact,
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
