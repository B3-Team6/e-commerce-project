import { useState } from "react"

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "Chaise",
      quantity: 10,
      price: 799,
      image: "https://unsplash.com/fr/photos/ljRiZl00n18",
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
    <div className="text-black ">
      <h1 className="text-3xl font-bold text-center p-12 ">Panier</h1>
      <div className=" flex flex-col pl-12 w-full max-w-md">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-400 py-4"
          >
            <div>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500">
                {item.quantity} x {item.price} €
              </p>
            </div>
            <div className="flex items-center">
              <button
                className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 mr-4"
                onClick={() => updateQuantity(index, item.quantity - 1)}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span className="text-lg">{item.quantity}</span>
              <button
                className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 ml-4"
                onClick={() => updateQuantity(index, item.quantity + 1)}
              >
                +
              </button>
              <button
                className="px-3 py-1 rounded-full bg-gray-500 text-white hover:bg-black ml-4"
                onClick={() => removeItem(index)}
              >
                Retirer l'article
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length === 0 && (
        <p className="text-gray-500 mt-8">Le panier est vide</p>
      )}
      {cartItems.length > 0 && (
        <div className="flex items-center justify-between w-full max-w-md mt-8 p-12">
          <p className="font-bold text-lg">Total</p>
          <p className="font-bold text-lg">{totalPrice} €</p>
        </div>
      )}
      <button
        className={`mt-8 px-6 py-2 rounded-full text-white font-semibold ${
          cartItems.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        }`}
        disabled={cartItems.length === 0}
      >
        Passer commande
      </button>
    </div>
  )
}

export default CartPage
