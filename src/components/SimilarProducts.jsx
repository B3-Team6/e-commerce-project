
import Image from "next/image";

const similarProducts = [
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
        width={300}
        height={300}
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
        width={300}
        height={300}
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
        width={300}
        height={300}
        src="/images/lit.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
];

const SimilarProducts = () => {
  return (
    <>
      
      <div className="p-2 flex justify-center font-bold text-2xl font-serif bg-slate-200">
        <p>Produits similaires</p>
      </div>

      <div className="grid grid-cols-3 gris-rows-2 gap-3 p-4 items-center">
        {similarProducts.map((similarProduct) => (
          <>
            <div className="flex items-center flex-col ">
              <div className="flex  items-center w-4/5 justify-center ">
                {similarProduct.img}
              </div>
              <div>
                {similarProduct.name}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default SimilarProducts;