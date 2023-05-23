import Head from "next/head"

const OrdersPage = () => {
  return (
    <>
      <Head>
        <title>My orders</title>
        <meta name="description" content="Order history page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="min-h-screen">
          <div className="m-8 flex flex-col items-center justify-center gap-6">
            <h1 className="text-5xl font-bold">My orders</h1>
          </div>
        </div>
      </body>
    </>
  )
}
OrdersPage.isPublicPage = true
export default OrdersPage
