import Head from "next/head"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Canapé 1",
    price: "111 €",
    img: (
      <Image
        alt="canape"
        width={300}
        height={300}
        src="/images/canape.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 2,
    name: "Canapé 2",
    price: "222 €",
    img: (
      <Image
        alt="lit"
        width={300}
        height={300}
        src="/images/lit.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 3,
    name: "Canapé 3",
    price: "333 €",
    img: (
      <Image
        alt="table"
        width={300}
        height={300}
        src="/images/table.jpg"
        className="rounded-lg duration-300 hover:opacity-50"
      />
    ),
  },
  {
    id: 4,
    name: "Canapé 4",
    price: "444 €",
    img: (
      <Image
        alt="bureau"
        width={300}
        height={300}
        src="/images/bureau.jpg"
        className="rounded-lg duration-300 hover:opacity-50"
      />
    ),
  },
  {
    id: 5,
    name: "Canapé 5",
    price: "555 €",
    img: (
      <Image
        alt="canape"
        width={300}
        height={300}
        src="/images/canape.jpg"
        className="rounded-lg duration-300 hover:opacity-50"
      />
    ),
  },
  {
    id: 6,
    name: "Canapé 6",
    price: "666 €",
    img: (
      <Image
        alt="lit"
        width={300}
        height={300}
        src="/images/lit.jpg"
        className="rounded-lg duration-300 hover:opacity-50"
      />
    ),
  },
  {
    id: 7,
    name: "Canapé 7",
    price: "777 €",
    img: (
      <Image
        alt="table"
        width={300}
        height={300}
        src="/images/table.jpg"
        className="rounded-lg duration-300 hover:opacity-50"
      />
    ),
  },
  {
    id: 8,
    name: "Canapé 8",
    price: "888 €",
    img: (
      <Image
        alt="bureau"
        width={300}
        height={300}
        src="/images/bureau.jpg"
        className="rounded-lg duration-300 hover:opacity-50"
      />
    ),
  },
]

const Home = () => {
  return (
    <>
      <Head>
        <title>AIRNEIS - Category</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex  justify-center ">
        <div className="group flex items-center justify-center ">
          <Image
            alt="canape"
            width={550}
            height={550}
            src="/images/canape.jpg"
            className="w-full   rounded-3xl p-4 "
          />
          <div className="absolute text-3xl font-black">Canapé</div>
        </div>
      </div>
      <div className="flex justify-center bg-orange-100 p-2 font-serif text-2xl font-bold text-white">
        <p>
          Voici notre collection de canapés, cliquez sur un produit pour voir sa
          description
        </p>
      </div>

      <div className="gris-rows-3 grid grid-cols-4 items-center gap-3 p-4">
        {products.map((product) => (
          <>
            <div className="flex flex-col items-center ">
              <div className="flex  w-4/5 items-center">{product.img}</div>
              <div className="flex w-72 items-center justify-between">
                <a>{product.name}</a>
                &nbsp;
                <a>{product.price}</a>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
Home.isPublicPage = true
export default Home
