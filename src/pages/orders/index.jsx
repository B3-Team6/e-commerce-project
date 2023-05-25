import Head from "next/head"
import React from "react"

const OrdersPage = () => {
  const orders = [
    {
      id: 1562,
      year: 2021,
      date: "2021-01-01",
      status: "COMPLETED",
      items: 5,
      price: 100,
    },
    {
      id: 1251,
      year: 2021,
      date: "2021-02-15",
      status: "COMPLETED",
      items: 3,
      price: 75,
    },
    {
      id: 1253,
      year: 2021,
      date: "2021-02-15",
      status: "COMPLETED",
      items: 235,
      price: 6815,
    },
    {
      id: 1332,
      year: 2022,
      date: "2022-03-10",
      status: "COMPLETED",
      items: 7,
      price: 150.5,
    },
    {
      id: 1512,
      year: 2022,
      date: "2022-04-20",
      status: "PENDING",
      items: 2,
      price: 50,
    },
  ]

  const years = Array.from(new Set(orders.map((order) => order.year)))

  return (
    <>
      <Head>
        <title>My orders</title>
        <meta name="description" content="Order history page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="min-h-screen p-20">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">My orders</h1>
          </div>
          <div className="flex flex-col py-12 lg:px-80">
            <div className="grid grid-cols-2">
              {years.map((year) => (
                <>
                  <div className="p-4 text-3xl">{year}</div>
                  <div className="col-span-2">
                    <div className="my-4 border-t border-black" />
                    {orders
                      .filter((order) => order.year === year)
                      .map((order) => (
                        <>
                          <div className="grid grid-cols-2">
                            <div className="p-4 font-bold">
                              {order.date} - {order.id}
                            </div>
                            <div className="p-4 font-bold">{order.status}</div>
                            <div className="p-4 text-gray-500">
                              {order.items} ITEMS
                            </div>
                            <div className="p-4">${order.price}</div>
                          </div>
                        </>
                      ))}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

OrdersPage.isPublicPage = true
export default OrdersPage
