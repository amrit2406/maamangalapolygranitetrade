import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import HeroSlider from '../components/home/HeroSec'
import AboutSection from '../components/home/About'
import ProductsSection from '../components/home/ProductSec'
import WhyChooseUs from '../components/home/Why'
import GallerySection from '../components/home/GallerySec'
import TestimonialSection from '../components/home/Testi'
import BlogsSection from '../components/home/BlogSec'
import BrochureFloatingButton from '../components/BrochureFloatingButton'
import pdf1 from "../assets/1.pdf";
import pdf2 from "../assets/1.pdf";
import pdf3 from "../assets/1.pdf";
import pdf4 from "../assets/1.pdf";
import pdf5 from "../assets/1.pdf";
import pdf6 from "../assets/1.pdf";
import pdf7 from "../assets/1.pdf";
import pdf8 from "../assets/1.pdf";
import pdf9 from "../assets/1.pdf";
import pdf10 from "../assets/1.pdf";
import pdf11 from "../assets/1.pdf";
import pdf12 from "../assets/1.pdf";
import pdf13 from "../assets/1.pdf";
import pdf14 from "../assets/1.pdf";
import pdf15 from "../assets/1.pdf";
import pdf16 from "../assets/1.pdf";
import pdf17 from "../assets/1.pdf";
import pdf18 from "../assets/1.pdf";
import pdf19 from "../assets/1.pdf";
import pdf20 from "../assets/1.pdf";
import pdf21 from "../assets/1.pdf";
import pdf22 from "../assets/1.pdf";
import pdf23 from "../assets/1.pdf";
import WhatsAppFloatButton from '../components/WhatsAppFloatButton'


const brochures = [
  { name: "M & LD series", file: pdf1 },
  { name: "GL Flutted", file: pdf2 },
  { name: "PU Stone", file: pdf3 },
  { name: "Soffit Louvers", file: pdf4 },
  { name: "Ryan Soffit", file: pdf5 },
  { name: "Charcoal Louvers", file: pdf6 },
  { name: "Self Adhesive", file: pdf7 },
  { name: "HD", file: pdf8 },
  { name: "Alluminium Accessories", file: pdf9 },
  { name: "Flutted UV", file: pdf10 },
  { name: "Ryan All Files", file: pdf11 },
  { name: "Mosaic Tile", file: pdf12 },
  { name: "All Charcoal Louvers", file: pdf13 },
  { name: "UV sticker", file: pdf14 },
  { name: "M & LD series2", file: pdf15 },
  { name: "GLS series", file: pdf16 },
  { name: "Ryan Catalogues", file: pdf17 },
  { name: "12 inch Charcoal Louvers", file: pdf18 },
  { name: "Ryan PVC", file: pdf19 },
  { name: "Digital Marble", file: pdf20 },
  { name: "All Moulding", file: pdf21 },
  { name: "3D Pannel", file: pdf22 },
  { name: "Digital Marble", file: pdf23 },
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <HeroSlider />

      <AboutSection />

      <ProductsSection />

      <GallerySection />

      <WhatsAppFloatButton phoneNumber="+916370685017" // Replace with your actual number in international format
        message="Hello, I'm interested in your products"
        bottom={70} // Can use numbers (pixels) or strings (Tailwind units)
        right={20}
        size={52}
        bgColor="bg-green-600"
        iconColor="text-white" />

      <WhyChooseUs />

      <BrochureFloatingButton brochures={brochures} />

      <TestimonialSection />

      <BlogsSection />
      
    </div>
  )
}

export default Home