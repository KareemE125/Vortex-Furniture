import { FaCcApplePay, FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { LOCATIONS, PARTNERS } from "../constants";

export default function ContactPage() {
  return (
    <main className="m-auto max-w-7xl px-4 grid grid-flow-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-4 gap-y-12 text-white">
      <section className="col-span-1 text-center sm:text-left">
        <h3 className="font-medium text-pink-600 uppercase text-2xl mb-4 tracking-widest">Payment Methods</h3>
        <h4 className="font-semibold text-lg mb-2">We Accept</h4>
        <div className="flex justify-center sm:justify-start gap-4">
          <FaCcVisa className="text-2xl"/>
          <FaCcApplePay className="text-2xl" />
          <FaCcMastercard  className="text-2xl"/>
          <FaCcPaypal  className="text-2xl"/>
        </div>
      </section>

      <section className="col-span-1 text-center sm:text-left">
        <h3 className="font-medium text-pink-600 uppercase text-2xl mb-4 tracking-widest">Our Locations</h3>
        <div className="flex flex-col gap-3">
          {LOCATIONS.map((location) => <p key={location}>{location}</p> )}
        </div>
      </section>

      <section className="col-span-1 text-center sm:text-left">
        <h3 className="font-medium text-pink-600 uppercase text-2xl mb-4 tracking-widest">Our Partners</h3>
        <div className="flex flex-col gap-3">
          {PARTNERS.map((partner) => <p key={partner}>{partner}</p> )}
        </div>
      </section>

      <section className="col-span-1 text-center sm:text-left">
        <h3 className="font-medium text-pink-600 uppercase text-2xl mb-4 tracking-widest">Payment Methods</h3>
        <div className="flex flex-col gap-3">
          <p>kareemezzat.125@gmail.com</p>
          <p>+201118008160</p>
        </div>
        <h4 className="font-semibold text-lg mt-3 mb-2">Follow Us On</h4>
        <div className="flex justify-center sm:justify-start gap-4">
          <a href="#" target="_blank"><FaFacebook className="text-2xl hover:text-pink-600"/></a>
          <a href="#" target="_blank"><FaPinterest  className="text-2xl hover:text-pink-600"/></a>
          <a href="#" target="_blank"><FaTwitter  className="text-2xl hover:text-pink-600"/></a>
          <a href="#" target="_blank"><FaInstagram className="text-2xl hover:text-pink-600" /></a>
        </div>
      </section>

    </main>
  )
}
