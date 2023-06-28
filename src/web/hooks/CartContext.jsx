/* eslint-disable no-case-declarations */
import { createContext, useCallback, useReducer, useEffect } from "react"

const initialState = {
  cart: {},
}

export const CartContext = createContext({})

const SET_CART = "SET_CART"
const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const UPDATE_QUANTITY = "UPDATE_QUANTITY"

function cartReducer(state, action) {
  const removeCircularReferences = (obj) => {
    const seen = new WeakSet()

    return JSON.parse(
      JSON.stringify(obj, (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return
          }

          seen.add(value)
        }

        return value
      })
    )
  }

  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: removeCircularReferences(action.payload),
      }

    case ADD_TO_CART:
      const item = state.cart[action.payload.id]

      const updatedCart = {
        ...state.cart,
        [action.payload.id]: item
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : {
              ...action.payload,
              quantity: 1,
            },
      }

      return {
        ...state,
        cart: removeCircularReferences(updatedCart),
      }

    case REMOVE_FROM_CART:
      const newCart = { ...state.cart }
      delete newCart[action.payload]

      return {
        ...state,
        cart: removeCircularReferences(newCart),
      }

    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: {
            ...state.cart[action.payload.id],
            quantity: action.payload.quantity,
          },
        },
      }

    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")

    if (storedCart) {
      dispatch({ type: SET_CART, payload: JSON.parse(storedCart) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }, [state.cart])

  const setCart = useCallback((cart) => {
    dispatch({ type: SET_CART, payload: cart })
  }, [])

  const addToCart = useCallback((item) => {
    dispatch({ type: ADD_TO_CART, payload: item })
  }, [])

  const removeFromCart = useCallback((itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId })
  }, [])

  const updateQuantity = useCallback((itemId, quantity) => {
    dispatch({ type: UPDATE_QUANTITY, payload: { id: itemId, quantity } })
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        setCart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
