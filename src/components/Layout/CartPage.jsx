import React, { useState } from "react"
import Wrapper from "./Wrapper"

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Lit",
      price: 199.99,
      image:
        "https://www.cdiscount.com/pdt2/6/8/8/1/700x700/vid3181049686688/rw/meuble-cadre-de-lit-double-structure-de-lit-adul.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      quantity: 2,
    },
    {
      id: 2,
      name: "Chaise blanc",
      price: 29.99,
      image:
        "https://www.ikea.com/fr/fr/images/products/fanbyn-chaise-blanc-interieur-exterieur__1052803_pe846425_s5.jpg?f=s",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac turpis eget enim aliquam commodo.",
      quantity: 1,
      shipping: 9.99,
      tax: 1.99,
    },
    {
      id: 3,
      name: "Table Basse",
      price: 99.99,
      image:
        "https://pierimport.imgix.net/produits/table-basse-moderne-bois-pied-en-croix-volga-62cd87aa19b4f.jpg?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quantity: 1,
    },
  ])

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const calculateTax = (subTotal) => {
    const taxRate = 0.2 // 20% tax
    const tax = subTotal * taxRate

    return tax
  }

  const calculateShipping = (subTotal) => {
    const shippingRate = 0.1 // 10% shipping fee
    const shipping = subTotal * shippingRate

    return shipping
  }

  const subTotal = cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.quantity,
    0
  )

  const tax = calculateTax(subTotal)
  const shipping = calculateShipping(subTotal)
  const total = subTotal + tax + shipping

  return (
    <>
      <Wrapper>
        <div className="flex items-center justify-center h-screen">
          {cartItems.length === 0 ? (
            <p className="text-center text-4xl font-bold mt-10">
              Votre panier est vide
              <img
                src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
                alt=""
              />
            </p>
          ) : (
            <div className="flex flex-row">
              <div className="w-3/4 p-4">
                <div className="border-b mb-4 pb-2 mr-40">
                  <h1 className="text-2xl font-bold">Votre Panier</h1>
                </div>
                <div className="flex flex-col space-y-4 mr-40">
                  {/* List of Cart Items */}
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <div className="flex items-center space-x-2">
                        <img
                          className="w-16 h-16 object-cover rounded-md"
                          src={item.image}
                          alt={item.name}
                        />
                        <div>
                          <h2 className="font-medium text-lg">{item.name}</h2>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                          <p className="font-medium">{item.price}€</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="px-2 py-1 bg-black text-white rounded-md"
                          onClick={() => removeItem(item.id)}
                        >
                          Supprimer
                        </button>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                          className="w-12 px-2 py-1 text-center border rounded-md"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/4 p-4 bg-gray-100 rounded-md">
                <div className="border-b mb-4 pb-2">
                  <h2 className="text-xl font-medium">Total</h2>
                </div>
                <div>
                  <p className="flex justify-between">
                    <span className="font-medium">Sous-total:</span>
                    <span>{subTotal.toFixed(2)}€</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Livraison:</span>
                    <span>{shipping.toFixed(2)}€</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Taxe:</span>
                    <span>{tax.toFixed(2)}€</span>
                  </p>
                  <p className="flex justify-between mt-2">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">{total.toFixed(2)}€</span>
                  </p>
                  <button className="w-full mt-4 px-4 py-2 bg-black text-white rounded-md">
                    Commander
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    </>
  )
}

export default CartPage
