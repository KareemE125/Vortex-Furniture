import { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { CAROUSEL_ITEMS } from "../constants";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(CAROUSEL_ITEMS.images.length - 1);
    } else setCurrentIndex(currentIndex - 1);
  };

  const next = () => {
    if (currentIndex === CAROUSEL_ITEMS.images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="h-screen min-h-screen pt-16 w-full flex justify-center items-center bg-gray-300">
      <div className="w-full h-full relative">
        <button
          className="absolute z-10 inset-y-0 top-1/2 left-3 flex"
          onClick={prev}
        >
          <IoIosArrowDropleftCircle className="bg-white bg-opacity-50 rounded-full cursor-pointer text-3xl text-gray-900"/>
        </button>
        <div className="h-full relative overflow-hidden">
          {CAROUSEL_ITEMS.images.map((img, index) => (
            <img
              key={index+ '#' + img}
              src={img}
              alt="Carousel Slide"
              className={`object-cover object-center h-full w-full absolute transition-opacity duration-1000 ease-in-out ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <button
          className="absolute inset-y-0 right-2 flex top-1/2"
          onClick={next}
        >
          <IoIosArrowDropleftCircle className="rotate-180 bg-white bg-opacity-50 rounded-full cursor-pointer text-3xl text-gray-900" />
        </button>


                  {/* description portion */}
        {CAROUSEL_ITEMS.descriptions.map((description, index) => (
          <section key={index + '#' + description} 
            className={`absolute top-8 md:top-20 inset-x-0 transition-opacity duration-1000 ease-in-out
            ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
          >
            <div 
              className="flex flex-col gap-3 bg-black p-4 opacity-70 text-white sm:w-3/4 sm:min-h-40"
            >
              <h3 className="text-xl font-bold">{CAROUSEL_ITEMS.descriptions[index].title}</h3>
              <p className="text-lg">{CAROUSEL_ITEMS.descriptions[index].text}</p>
            </div>
          </section>
        ))}

        {/* text portion */}
        {CAROUSEL_ITEMS.captions.map((caption, index) => (
          <section key={index + '#' + caption} className={`absolute bottom-20 inset-x-0 transition-opacity duration-1000 ease-in-out
            ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
          >
            <span
              key={index + '#' + caption}
                className={`text-xl bg-pink-700 opacity-80 py-1 text-white flex justify-center`}
            >
              {caption}
            </span>
          </section>
        ))}

        {/* custom dot portion */}
        <section className="absolute bottom-8 inset-x-0 flex flex-row gap-2 justify-center">
          {CAROUSEL_ITEMS.images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-white" : "bg-pink-700"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </section>
      </div>
    </div>
  );
}
