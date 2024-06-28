import Title from "../components/Title";
import PriceCard from "../components/PriceCard";
import { PRICING_DATA } from "../constants";


export default function ServicesPage() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
        <Title title="What We Offer !" />
        <section className="flex flex-col lg:flex-row justify-center px-5 xl:px-0 lg:py-0 !py-6 w-full gap-6 items-center lg:items-stretch">
        {PRICING_DATA.map((data, index) => (
          <div key={index} className="relative">
            <PriceCard priceData={data} />
          </div>
        ))}
      </section>
    </main>
  )
}
