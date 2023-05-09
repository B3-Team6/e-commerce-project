import Image from "next/image";
const descriptions = [
  {
    id: 1,
    name: "Canape 1",
    price: "XXX €",
    statut: "EN STOCK",
    description:
      "cbyazyacubacabcuabcuabcuabcaucbucbaucbaucbaucbucaczcjziacjzaicjzai",
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
];

const DescriptionProduct = () => {
  return (
    <>
      <div className="flex p-4 ">
        {descriptions.map((description) => (
          <>
            <div class="flex font-sans">
              <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                  <h1 class="flex-auto text-lg font-semibold text-slate-900">
                    {description.name}
                  </h1>
                  <div class="text-lg font-semibold text-slate-500">
                    {description.price}
                  </div>
                  <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                    In stock
                  </div>
                 
                </div>
                
                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"></div>
                <p class="text-sm text-slate-700">{description.description}</p>

                <div class="flex space-x-4 mb-6 text-sm font-medium">
                  <div class="flex-auto flex space-x-4 justify-end">
                    <button
                      class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 bg-orange-100"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default DescriptionProduct;
