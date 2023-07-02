import React, { useContext } from "react"

import { CartContext } from "@/web/hooks/CartContext"
import Image from "next/image"
import Head from "next/head"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import routes from "@/web/routes"
import Wrapper from "@/web/components/Layout/Wrapper"

const CartPage = () => {
  const { t } = useTranslation()
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext)

  const subTotal = Object.values(cart).reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.quantity,
    0
  )

  return (
    <>
      <Head>
        <title>{t("cartTitle")}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <div className="flex h-screen flex-col items-center justify-center">
            {Object.keys(cart).length === 0 ? (
              <p className="mt-10 text-center text-4xl font-bold">
                {t("emptyCart")}
                <Image
                  alt="Photo d'un panier vide"
                  src="/images/empty-cart.jpg"
                  className="mb-8 max-w-xl"
                  width={500}
                  height={500}
                />
              </p>
            ) : (
              <div className="flex flex-col md:flex-row">
                <div className="w-full p-4 md:mr-4 md:w-3/4">
                  <div className="mb-4 border-b pb-2">
                    <h1 className="mt-16 text-2xl font-bold sm:mt-0">
                      {t("shoppingCart")}
                    </h1>
                  </div>
                  <div className="flex flex-col space-y-4">
                    {Object.values(cart).map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col items-center justify-between border-b pb-2 md:flex-row"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="h-32 w-32">
                            <Image
                              alt={item.name}
                              width={400}
                              height={400}
                              src={item.image}
                              className="rounded-lg object-contain"
                            />
                          </div>
                          <div>
                            <h2 className="text-lg font-medium">{item.name}</h2>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                            <p className="font-medium">{item.price}€</p>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center space-x-2 md:mt-0">
                          <button
                            className="rounded-md bg-black px-2 py-1 text-white"
                            onClick={() => removeFromCart(item.id)}
                          >
                            {t("removeButton")}
                          </button>
                          <input
                            type="number"
                            min="1"
                            max="99"
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
                <div className="mt-4 w-full rounded-md bg-gray-100 p-4 md:ml-4 md:mt-0 md:w-1/4">
                  <div className="mb-4 border-b pb-2">
                    <h2 className="text-xl font-medium">{t("total")}</h2>
                  </div>
                  <div>
                    <p className="flex justify-between">
                      <span className="font-medium">{t("subTotal")}</span>
                      <span>{subTotal.toFixed(2)}€</span>
                    </p>
                    <Link href={routes.checkout.checkout()}>
                      <button className="mt-4 w-full rounded-md bg-black px-4 py-2 text-white">
                        {t("checkout")}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  )
}
CartPage.isPublicPage = true
export default CartPage
