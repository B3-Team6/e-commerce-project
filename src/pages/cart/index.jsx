import React, { useState } from "react"
import Wrapper from "../../web/components/Layout/Wrapper"

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
        <div className="flex h-screen items-center justify-center">
          {cartItems.length === 0 ? (
            <p className="mt-10 text-center text-4xl font-bold">
              Votre panier est vide
              <img
                src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
                alt=""
              />
            </p>
          ) : (
            <div className="flex flex-row">
              <div className="w-3/4 p-4">
                <div className="mb-4 mr-40 border-b pb-2">
                  <h1 className="text-2xl font-bold">Votre Panier</h1>
                </div>
                <div className="mr-40 flex flex-col space-y-4">
                  {/* List of Cart Items */}
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <div className="flex items-center space-x-2">
                        <img
                          className="h-16 w-16 rounded-md object-cover"
                          src={item.image}
                          alt={item.name}
                        />
                        <div>
                          <h2 className="text-lg font-medium">{item.name}</h2>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                          <p className="font-medium">{item.price}€</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="rounded-md bg-black px-2 py-1 text-white"
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
                          className="w-12 rounded-md border px-2 py-1 text-center"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/4 rounded-md bg-gray-100 p-4">
                <div className="mb-4 border-b pb-2">
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
                  <p className="mt-2 flex justify-between">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">{total.toFixed(2)}€</span>
                  </p>
                  <button className="mt-4 w-full rounded-md bg-black px-4 py-2 text-white">
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
CartPage.isPublicPage = true
export default CartPage
