import { useState } from "react"

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "Chaise",
      quantity: 10,
      price: 799,
      image: "https://dummyimage.com/100x100/000/fff",
    },
    {
      name: "Chaise",
      quantity: 1,
      price: 99,
      image: "https://dummyimage.com/100x100/000/fff",
    },
    {
      name: "Souris",
      quantity: 3,
      price: 49,
      image: "https://dummyimage.com/100x100/000/fff",
    },
  ])

  const removeItem = (index) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems]
      newItems.splice(index, 1)

      return newItems
    })
  }

  const updateQuantity = (index, quantity) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems]
      newItems[index].quantity = quantity

      return newItems
    })
  }

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price
  }, 0)

  return (
    <div className="text-black bg-white">
      <h1 className="text-5xl font-semibold text-center p-6 sm:p-12">Panier</h1>
      <div className="lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:mx-40 lg:mt-8">
        <div className="flex-col w-full max-w-md mb-10 sm:mb-20">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-400 py-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mx-3 rounded-2xl"
                />
                <div className="flex flex-col">
                  <p className="font-semibold py-1 mb-2 px-4">{item.name}</p>
                  <div className="flex items-center">
                    <button
                      className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 mr-2 sm:mr-4"
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 ml-2 sm:ml-4"
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="px-3 py-1 rounded-full bg-gray-500 text-white hover:bg-gray-600 ml-4 hidden sm:block"
                onClick={() => removeItem(index)}
              >
                Retirer l'article
              </button>
            </div>
          ))}
        </div>
        {cartItems.length === 0 && (
          <p className="text-gray-500 text-5xl font-semibold text-center p-12">
            Le panier est vide
          </p>
        )}
        {cartItems.length > 0 && (
          <div className="flex flex-col items-center w-full max-w-md mt-8">
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-bold text-lg sm:text-2xl">Total</p>
              <p className="font-bold text-lg sm:text-3xl">{totalPrice} €</p>
            </div>
            <button
              className={`w-full px-6 py-2 rounded-full text-white font-semibold ${
                cartItems.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-amber-400 hover:bg-amber-500"
              }`}
              disabled={cartItems.length === 0}
            >
              Passer la commande
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage
