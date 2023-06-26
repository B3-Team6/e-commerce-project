import Head from "next/head"
import Carousel from "@/web/components/Carousel"
import Image from "next/image"
import Link from "next/link"
import routes from "@/web/routes"


const categories = [
  {
    id: 1,
    name: "Canape",
    img: (
      <Image
        alt="canape"
        width={400}
        height={400}
        src="/images/canape.jpg"
        className="rounded-lg duration-500 hover:rotate-1 hover:opacity-50"
      />
    ),
  },
  {
    id: 2,
    name: "Lit",
    img: (
      <Image
        alt="lit"
        width={400}
        height={400}
        src="/images/lit.jpg"
        className="rounded-lg duration-500 hover:rotate-1 hover:opacity-50"
      />
    ),
  },
  {
    id: 3,
    name: "Table",
    img: (
      <Image
        alt="table"
        width={400}
        height={400}
        src="/images/table.jpg"
        className="rounded-lg duration-500 hover:rotate-1 hover:opacity-50"
      />
    ),
  },
  {
    id: 4,
    name: "Bureau",
    img: (
      <Image
        alt="bureau"
        width={400}
        height={400}
        src="/images/bureau.jpg"
        className="rounded-lg duration-500 hover:rotate-1 hover:opacity-50"
      />
    ),
  },
  {
    id: 5,
    name: "Chaise",
    img: (
      <Image
        alt="chaise"
        width={400}
        height={400}
        src="/images/chaise.jpg"
        className="rounded-lg duration-500 hover:rotate-1 hover:opacity-50"
      />
    ),
  },
  {
    id: 6,
    name: "Armoire",
    img: (
      <Image
        alt="armoire"
        width={400}
        height={400}
        src="/images/armoire.jpg"
        className="rounded-lg duration-500 hover:rotate-1 hover:opacity-50"
      />
    ),
  },
]

const products = [
  {
    id: 1,
    name: "Canape",
    img: (
      <Image
        alt="canape"
        width={300}
        height={300}
        src="/images/canape.jpg"
        className="rounded-lg duration-500 hover:opacity-50"
      />
    ),
  },
  {
    id: 2,
    name: "Lit",
    img: (
      <Image
        alt="lit"
        width={300}
        height={300}
        src="/images/lit.jpg"
        className="rounded-lg duration-500 hover:opacity-50"
      />
    ),
  },
  {
    id: 3,
    name: "Table",
    img: (
      <Image
        alt="table"
        width={300}
        height={300}
        src="/images/table.jpg"
        className="rounded-lg duration-500 hover:opacity-50"
      />
    ),
  },
  {
    id: 4,
    name: "Bureau",
    img: (
      <Image
        alt="bureau"
        width={300}
        height={300}
        src="/images/bureau.jpg"
        className="rounded-lg duration-500 hover:opacity-50"
      />
    ),
  },
  {
    id: 5,
    name: "Chaise",
    img: (
      <Image
        alt="chaise"
        width={300}
        height={300}
        src="/images/chaise.jpg"
        className="rounded-lg duration-500 hover:opacity-50"
      />
    ),
  },
  {
    id: 6,
    name: "Armoire",
    img: (
      <Image
        alt="armoire"
        width={300}
        height={300}
        src="/images/armoire.jpg"
        className="rounded-lg duration-500 hover:opacity-50"
      />
    ),
  },
  {
    id: 1,
    name: "Canape",
    img: (
      <Image
        alt="canape"
        width={300}
        height={300}
        src="/images/canape.jpg"
        className="rounded-lg duration-500 hover:opacity-50"
      />
    ),
  },
  {
    id: 2,
    name: "Lit",
    img: (
      <Image
        alt="lit"
        width={300}
        height={300}
        src="/images/lit.jpg"
        className="rounded-lg duration-500 hover:opacity-50"
      />
    ),
  },
  {
    id: 3,
    name: "Table",
    img: (
      <Image
        alt="table"
        width={300}
        height={300}
        src="/images/table.jpg"
        className="rounded-lg duration-500 hover:opacity-50"
      />
    ),
  },
  {
    id: 4,
    name: "Bureau",
    img: (
      <Image
        alt="bureau"
        width={300}
        height={300}
        src="/images/bureau.jpg"
        className="rounded-lg duration-500 hover:opacity-50"
      />
    ),
  },
  {
    id: 5,
    name: "Chaise",
    img: (
      <Image
        alt="chaise"
        width={300}
        height={300}
        src="/images/chaise.jpg"
        className="rounded-lg duration-500 hover:opacity-50"
      />
    ),
  },
  {
    id: 6,
    name: "Armoire",
    img: (
      <Image
        alt="armoire"
        width={300}
        height={300}
        src="/images/armoire.jpg"
        className="rounded-lg duration-500 hover:opacity-50"
      />
    ),
  },
]

const Home = () => {
  return (
    <div>
      <Head>
        <title>AIRNEIS - Accueil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel />

      <div className="bg-orange-100 p-2 text-center  font-serif text-sm font-bold text-white md:text-lg lg:text-2xl">
        <p>
          Découvrez nos catégories de meubles ainsi que nos meilleures ventes
        </p>
      </div>

      <div className="grid  flex-col  items-center gap-3  p-2  md:grid-cols-2 lg:grid-cols-3 ">
        {categories.map((categorie) => (
          <>
            <div className="flex justify-center">
              <div className="group flex w-5/6 items-center  justify-center ">
                <div className=" absolute z-10 hidden text-2xl font-black text-black group-hover:flex">
                  {categorie.name}
                </div>
                <Link href={`/category/${categorie.id}`}>{categorie.img}</Link>
              </div>
            </div>
          </>
        ))}
      </div>

      <Link
        href={routes.backoffice.backoffice()}
        className="hover:text-gray-500"
      >
        <p>Back Office</p>
      </Link>

      <div className="bg-orange-100 p-2 text-center  font-serif text-sm font-bold text-white md:text-lg lg:text-2xl">
        <p>Les Highlanders du moment</p>
      </div>

      <div className="grid grid-cols-1 items-center gap-3 p-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((product) => (
          <>
            <div className="flex justify-center">
              <div className="group flex w-3/5 items-center  justify-center ">
                <div className=" absolute z-10 hidden text-xl font-black text-black group-hover:flex">
                  {product.name}
                </div>
                {product.img}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
Home.isPublicPage = true
export default Home
