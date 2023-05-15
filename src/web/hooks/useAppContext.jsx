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
  useReducer,
  useContext,
} from "react"

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

  if (!isPublicPage && session === null) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white text-4xl font-bold">
        <span className="animate-bounce">Loading...</span>
      </div>
    )
  }

  const initialState = {
    cart: {},
  }

  // Si l'utilisateur est connecté, on ajoute le contenu du panier dans l'état initial du contexte

  const CartContext = createContext({})
  const SET_CART = "SET_CART"
  const ADD_TO_CART = "ADD_TO_CART"
  const REMOVE_FROM_CART = "REMOVE_FROM_CART"

  function cartReducer(state, action) {
    switch (action.type) {
      case SET_CART:
        return {
          ...state,
          cart: action.payload,
        }

      case ADD_TO_CART:
        // eslint-disable-next-line no-case-declarations
        const item = state.cart[action.payload.id]

        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.id]: item
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : {
                  ...action.payload,
                  qty: 1,
                },
          },
        }

      case REMOVE_FROM_CART:
        // eslint-disable-next-line no-case-declarations
        const newCart = { ...state.cart }
        delete newCart[action.payload]

        return {
          ...state,
          cart: newCart,
        }

      default:
        return state
    }
  }

  const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const setCart = useCallback((cart) => {
      dispatch({ type: SET_CART, payload: cart })
    }, [])

    const addToCart = useCallback((item) => {
      dispatch({ type: ADD_TO_CART, payload: item })
    }, [])

    const removeFromCart = useCallback((itemId) => {
      dispatch({ type: REMOVE_FROM_CART, payload: itemId })
    }, [])

    return (
      <CartContext.Provider
        value={{
          cart: state.cart,
          setCart,
          addToCart,
          removeFromCart,
        }}
      >
        {children}
      </CartContext.Provider>
    )
  }

  return (
    <AppContext.Provider
      value={{
        session,
        signUp,
        signIn,
        signOut,
        api,
      }}
      {...otherProps}
    >
      <CartProvider>{props.children}</CartProvider>
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)

export default useAppContext
