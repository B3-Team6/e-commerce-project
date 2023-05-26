import Image from "next/image"

const similarProducts = [
  {
    id: 1,
    name: "Canapé 1",
    price: "111 €",
    img: (
      <Image
        alt="canape"
        width={500}
        height={500}
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
        width={500}
        height={500}
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
        width={500}
        height={500}
        src="/images/table.jpg"
        className="rounded-lg hover:opacity-50"
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
        width={500}
        height={500}
        src="/images/bureau.jpg"
        className="rounded-lg hover:opacity-50"
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
        width={500}
        height={500}
        src="/images/canape.jpg"
        className="rounded-lg hover:opacity-50"
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
        width={500}
        height={500}
        src="/images/lit.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
]

const SimilarProducts = () => {
  return (
    <>
      <div className="bg-orange-100 p-2 text-center  font-serif text-sm font-bold text-white md:text-lg lg:text-2xl">
        <p>Produits similaires</p>
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
        {similarProducts.map((similarProduct) => (
          <>
            <div className="flex flex-col items-center ">
              <div className="flex items-center justify-center lg:w-4/5 ">
                {similarProduct.img}
              </div>
              <div>{similarProduct.name}</div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default SimilarProducts
