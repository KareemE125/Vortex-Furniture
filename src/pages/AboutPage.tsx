import Title from "../components/Title";
import roomImage from '../assets/images/room (1).jpg'
import roomImage2 from '../assets/images/room (6).jpg'

export default function AboutPage() {
  return (
    <main className="flex flex-col md:flex-row gap-6">
      <section className="w-full hidden md:block lg:h-[650px] xl:h-[500px] flex-1 mt-8 rounded-lg overflow-hidden border-2 border-gray-500 shadow-lg ">
        <img className="w-full h-full object-bottom object-cover rounded-lg" src={roomImage} alt="Room Image" />
      </section>
      <section className="flex-1">
        <Title title="About Us" />
        <section className="px-4">
          <div className="w-full block md:hidden h-56 flex-1 rounded-lg overflow-hidden shadow-lg mb-3 -mt-3">
            <img className="w-full h-full object-center object-cover rounded-lg" src={roomImage2} alt="Room Image" />
          </div>        
          <p className="text-white text-wrap mb-5">
            At our furniture company, we believe that home is where the heart is, and we are dedicated to helping you create a space that reflects your unique style and comfort. With a rich heritage of craftsmanship and a keen eye for contemporary design, we offer a diverse range of furniture pieces that cater to every room in your home. From elegant living room sets that invite relaxation to functional and stylish office furniture that enhances productivity, our collections are thoughtfully curated to meet the highest standards of quality and aesthetics. We are passionate about transforming houses into homes, ensuring that each piece not only looks good but also feels right.
          </p>
          <p className="text-white text-wrap ">
            Our commitment to excellence extends beyond our products to the services we provide. We pride ourselves on offering a seamless shopping experience, with personalized recommendations, exclusive member benefits, and exceptional customer support. Whether you are looking for a single statement piece or furnishing an entire room, our team is here to guide you every step of the way. We understand that buying furniture is an investment, and we strive to make that investment worthwhile with durable, beautiful, and functional designs that stand the test of time. Join us in creating spaces where memories are made, comfort is king, and style is effortless.
          </p>
        </section>
      </section>
    </main>
  )
}
