import { useCallback, useEffect, useMemo, useState } from "react";
import Logo from "/logo-icon.png";
import NavbarLink from "./NavbarLink";
import { NAVBAR_LINKS } from "../../constants";


export default function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selected, setSelected] = useState("home");

  const sections = useMemo(() => NAVBAR_LINKS.map((link) => link.path.slice(1)), []);

  const handleScroll = useCallback(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
  
      for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.clientHeight;
          if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
            setSelected(sectionId);
            break;
          }
        }
      }
  }, [sections])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav className="lg:px-14 xl:px-28 bg-gradient-to-r from-gray-950 via-pink-950 to-pink-800 border-b border-b-gray-600 shadow-md transition-all duration-700 fixed right-0 left-0 z-50 top-0">
      <div className="flex justify-between w-full max-w-screen-3xl mx-auto font-semibold h-16 px-5">
        
        <div className="flex items-center gap-3 md:gap-4 mr-5">
          <img className="w-12 object-contain" src={Logo} alt="Logo" />
        </div>

        <div className="flex items-center sm:gap-3 md:gap-8">
          {NAVBAR_LINKS.map((link) =>
            <li key={link.path} className="hidden md:block">
              <NavbarLink 
                key={link.path} 
                path={link.path} 
                title={link.name} 
                isSelected={link.path.slice(1) === selected}
                clickHandler={setSelected}
              /> 
            </li>
          )}
          
          <button
            className="w-12 h-12 relative focus:outline-none md:hidden"
            onClick={() => setIsNavOpen(!isNavOpen) }
          >
            <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                  isNavOpen ? "rotate-45" : "-translate-y-1.5"
                }  
                `}
              ></span>
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                  isNavOpen && "opacity-0"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                  isNavOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        <div
          className={` md:invisible w-full h-full flex flex-wrap flex-col justify-center fixed left-0 mt-16 bg-black bg-opacity-50 ${
            isNavOpen ? "visible z-20" : "invisible -z-10"
          }`}
        >
          <div
            className={`h-full bg-gray-900 absolute left-0 transition-all duration-300 ease-in-out top-0 ${
              isNavOpen ? "w-2/5 min-w-40 opacity-60" : "sm:w-0 -z-10"
            }`}
          ></div>
          <div
            className="relative z-20 text-center w-2/5 min-w-40 -mt-16"
          >
            <div
              className={`block min-h-[130px] w-fit mx-auto transform transition ${
                isNavOpen
                  ? "opacity-100 -translate-y-1/3 delay-[0.45s]"
                  : "opacity-0 -translate-y-0  delay-[0s]"
              }`}
            >
              <ul
                className={`transition w-fit flex flex-col gap-5 my-5 ${
                  isNavOpen ? "delay-[0.45s]" : "delay-[0s]"
                }`}
              >
                {/* className="font-semibold text-white text-opacity-100 text-center cursor-pointer px-2 md:hidden" */}
                {NAVBAR_LINKS.map((link) =>
                  <li key={link.path} className="md:hidden">
                    <NavbarLink 
                      path={link.path} 
                      title={link.name} 
                      isSelected={link.name === selected}
                      clickHandler={setSelected}
                    />
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}
