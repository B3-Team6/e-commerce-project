import { CartContext } from "@/web/hooks/CartContext"
import Image from "next/image"
import { useContext, useCallback } from "react"

const products = [
  {
    id: 1,
    name: "Canapé",
    price: "100",
    description: "C'est un canapé C'est tout",
    img: (
      <Image
        alt="canape"
        width={400}
        height={400}
        src="/images/canape.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
]

const SingleProduct = () => {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = useCallback(
    (product) => {
      addToCart(product)
    },
    [addToCart]
  )

  return (
    <>
      <div className="flex p-4">
        {products.map((product) => (
          <div key={product.id} className="flex font-sans">
            <div className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  {product.name}
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                  {product.price}
                </div>
              </div>

              <div className="mb-6 mt-4 flex items-baseline border-b border-slate-200 pb-6"></div>
              <p className="flex text-sm text-slate-700">
                {product.description}
              </p>

              <div className="mb-6 flex space-x-4 text-sm font-medium">
                <div className="flex flex-auto justify-end space-x-4">
                  <button
                    className="h-10 rounded-md border border-slate-200 bg-orange-100 px-6 font-semibold text-slate-900"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SingleProduct
