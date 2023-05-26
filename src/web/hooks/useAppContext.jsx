import config from "@/web/config.js"
import createAPIClient from "@/web/createAPIClient.js"
import parseSession from "@/web/parseSession.js"
import signInService from "@/web/services/signIn.js"
import signUpService from "@/web/services/signUp.js"
import contactUsService from "@/web/services/contactUs.js"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import updateCategoryService from "@/web/services/backoffice/categories/updateCategory"
import deleteCategorySevrvice from "@/web/services/backoffice/categories/deleteCategory"
import addCategoryService from "@/web/services/backoffice/categories/addCategory"

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
  const contactUs= contactUsService({ api })

  useEffect(() => {
    const jwt = localStorage.getItem(config.session.localStorageKey)

    if (!jwt) {
      return
    }

    const session = parseSession(jwt)
    setSession(session)
    setJWT({ jwt })
  }, [])

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
      {...otherProps}
      value={{
        actions: {
          signUp,
          signIn,
          signOut,
          contactUs,
          updateCategory,
          deleteCategory,
          addCategory,
        },
        state: {
          session,
        },
      }}
    />
  )
}

const useAppContext = () => useContext(AppContext)

export default useAppContext
