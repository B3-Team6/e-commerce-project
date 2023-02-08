import Head from 'next/head'
import Image from 'next/image'


const products = [
  {
    id: 1,
    name: "Name 1",
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
    name: "Name 2",
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
    name: "Name 3",
    price: "333 €",
    img: (
      <Image
        alt="table"
        width={300}
        height={300}
        src="/images/table.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 4,
    name: "Name 4",
    price: "444 €",
    img: (
      <Image
        alt="bureau"
        width={300}
        height={300}
        src="/images/bureau.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 5,
    name: "Name 5",
    price: "555 €",
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
    id: 6,
    name: "Name 6",
    price: "666 €",
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
    id: 7,
    name: "Name 7",
    price: "777 €",
    img: (
      <Image
        alt="table"
        width={300}
        height={300}
        src="/images/table.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 8,
    name: "Name 8",
    price: "888 €",
    img: (
      <Image
        alt="bureau"
        width={300}
        height={300}
        src="/images/bureau.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },

];

const Home = () => {


  return (
    <>
      <Head>
        <title>AIRNEIS - Categorie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex  justify-center '>
        <div className='flex group items-center justify-center '>
          <Image
            alt="canape"
            width={400}
            height={400}
            src="/images/canape.jpg"
            className="rounded-3xl hover:opacity-50  w-full p-4 "
          />
          <div className='hidden group-hover:flex absolute text-3xl font-black'>Canapé</div>
        </div>

      </div>
      <div className='p-2 flex justify-center font-bold text-2xl font-serif bg-slate-200'>
        <p>Voici notre collection de canapés, cliquez sur un produit pour voir sa description</p>
      </div>




      <div className="grid grid-cols-4 gris-rows-3 gap-3 p-4 items-center ">
        {products.map((product) => (
          <>
            <div className="flex items-center flex-col">
              <div className="flex  items-center w-4/5">
                {product.img}
              </div>
              <div className='flex items-center justify-between  w-72'>
                <a >
                  {product.name}
                </a>
                &nbsp;
                <a >
                  {product.price}
                </a>

              </div>
            </div>

          </>
        ))}
      </div>





    </>
  )
}
export default Home