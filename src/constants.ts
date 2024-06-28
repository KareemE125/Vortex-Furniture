import image1 from "./assets/images/room (5).jpg"
import image2 from "./assets/images/room (6).jpg"
import image3 from "./assets/images/room (8).jpg"
import image4 from "./assets/images/room (2).jpg"
import image5 from "./assets/images/room (4).jpg"
import { CarouselItems } from "./customTypes/CarouselItem"
import { NavbarLink } from "./customTypes/NavbarLink"
import { PriceData } from "./customTypes/PriceData"

export const CAROUSEL_ITEMS: CarouselItems = {
  images: [image1, image2, image3, image4, image5],
  descriptions: [
    {
      title: "Discover Timeless Elegance",
      text: "Explore our exclusive collection of premium furniture designed to elevate your home. From classic to contemporary, find pieces that fit your style."
    },
    {
      title: "Comfort Meets Style",
      text: "Experience the perfect blend of comfort and style with our curated furniture selections. Make your home a sanctuary of relaxation and beauty."
    },
    {
        title: "Crafted with Care",
      text: "Every piece in our collection is crafted with meticulous attention to detail and quality. Transform your spaces with furniture that stands the test of time."
    },
    {
      title: "Innovative Designs for Modern Living",
      text: "Stay ahead of the trends with our innovative furniture designs. Functional, stylish, and perfect for the modern home."
    },
    {
        title: "Your Dream Home Awaits",
      text: "Bring your dream home to life with our wide range of furniture options. Personalized to your taste and needs, creating spaces you'll love."
    },
    {
      title: "Unparalleled Quality",
      text: "Invest in furniture that offers unparalleled quality and durability. Our pieces are designed to provide you with years of comfort and style."
    } 
  ],
  captions: [
    "Elegant designs for every room", 
    "Affordable luxury for your home", 
    "Comfort and style combined", 
    "Quality furniture, lasting comfort", 
    "Transform your space effortlessly"
  ]
}

export const NAVBAR_LINKS: NavbarLink[] = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Contact", path: "#contact" },
]

export const PRICING_DATA: PriceData[] = [
    {
      name: "Free Plan",
      price: "Free Forever",
      benefits: [ "Browse the entire furniture collection.", "Create a wish list.", "Basic customer support.", "Access to weekly newsletters." ]
    },
    {
      name: "Platinum",
      price: "$450",
      benefits: [ "Get personalized furniture recommendations.", "Early access to new collections.", "12/7 customer support.", "Exclusive member discounts." ]
    },
    {
      name: "Golden",
      price: "$600",
      benefits: [ "Free delivery and assembly.", "Exclusive access to limited edition pieces.", "24/7 premium customer support.", "Complimentary interior design consultation." ]
    }  
]

export const LOCATIONS: string[] = ["Dubai", "Sharjah", "Hattah", "Ras-Al-Khaima", "Ajman", "Abu-Dhabi"] 

export const PARTNERS: string[] =["Luxury Living Furniture", "Elegant Interiors", "Comfort Home Supplies", "Urban Decor Solutions", "Premium Furnishings Co.", "Modern Habitat Designs"]