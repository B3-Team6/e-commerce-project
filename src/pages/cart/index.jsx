import React, { useContext } from "react"
import Wrapper from "../../web/components/Layout/Wrapper"
import { CartContext } from "@/web/hooks/CartContext"

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext)

  const subTotal = Object.values(cart).reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.quantity,
    0
  )

  return (
    <Wrapper>
      <div className="flex h-screen flex-col items-center justify-center py-8">
        {Object.keys(cart).length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <p className="mb-4 text-2xl font-bold">Votre panier est vide</p>
            <img
              src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
              alt=""
              className="mb-8 max-w-xs"
            />
          </div>
        ) : (
          <>
            <h1 className="mb-8 text-3xl font-bold">Votre Panier</h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                {Object.values(cart).map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center rounded-lg border p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mr-4 h-32 w-32 object-contain"
                    />
                    <div>
                      <h2 className="text-xl font-medium">{item.name}</h2>
                      <p className="text-gray-600">{item.description}</p>
                      <p className="font-medium">{item.price}€</p>
                    </div>
                    <div className=" ml-4 flex items-center">
                      <button
                        className="mr-2 text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Supprimer
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-16 rounded-md border px-2 py-1 text-center"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-gray-100 p-8">
                <h2 className="mb-4 text-2xl font-medium">Total</h2>
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Sous-total:</span>
                    <span>{subTotal.toFixed(2)}€</span>
                  </div>
                  <button className="w-full rounded-lg bg-black py-2 text-white">
                    Commander
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  )
}

CartPage.isPublicPage = true
export default CartPage
