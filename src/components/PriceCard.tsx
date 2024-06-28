import { FaCheckCircle } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { PriceData } from "../customTypes/PriceData";

export default function PriceCard({ priceData }: { priceData: PriceData}) {
  return (
    <div className="max-w-sm xl:w-[350px] p-6 bg-gray-100 group h-full rounded-2xl lg:hover:-translate-y-6 ease-in duration-300 hover:bg-pink-800 hover:text-white border border-gray-100 xl:border-none shadow-md">
              <div className="flex flex-row gap-3 items-center">
                <div>
                  <ImPriceTags className="text-2xl" />
                </div>
                <span className="text-3xl font-bold">{priceData.name}</span>
              </div>

              <span className="flex mt-4 text-gray-400 text-2xl">
                What You&apos;ll Get
              </span>
              <section>
                {priceData.benefits.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2.5 items-start mt-3 text-left"
                  >
                    <FaCheckCircle className="mt-1 text-xl text-green-600" />
                    <span>{data}</span>
                  </div>
                ))}
              </section>

              <div className="h-32 mt-4">
                <div className="bottom-6 left-6 right-6 absolute border-t border-dashed border-gray-200 tracking-widest pt-2">
                  <div className="flex justify-start items-baseline">
                    <span className="text-[28px] font-bold ">{priceData.price}</span>
                  </div>
                  <button className="w-full px-4 py-3 bg-gray-200 text-pink-600 group-hover:text-white group-hover:bg-teal-500 rounded-xl mt-3 font-semibold text-xl">
                    Choose
                  </button>
                </div>
              </div>
            </div>
  )
}
