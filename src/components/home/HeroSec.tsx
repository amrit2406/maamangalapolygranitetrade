import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import sl1 from "../../assets/sl1.png"

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      imageUrl:
        "https://5.imimg.com/data5/ANDROID/Default/2023/12/369723697/WO/HE/ZL/84982697/product-jpeg.jpg",
      title: "Premium Polygranite Sheets",
      // description: "Durable and elegant surfaces for modern interiors",
      cta: "Explore Collection",
      link: "/products",
    },
    {
      id: 2,
      imageUrl:
        "https://image.made-in-china.com/2f0j00FeShjMAJcvrU/China-Wholesale-Factory-Indoor-Decor-Wood-Plastic-Composite-PVC-Coating-Cladding-Fluted-Wall-Board-Interior-WPC-Wall-Panel.jpg",
      title: "WPC Panel Solutions",
      // description: "Waterproof composite panels with wood-like finishes",
      cta: "View Products",
      link: "/products",
    },
    {
      id: 3,
      imageUrl:
        "https://avatars.mds.yandex.net/get-altay/14599414/2a00000194611c05988051feb873147536d0/XXXL",
      title: "Expert Interior Design",
      // description: "Transform your spaces with our professional services",
      cta: "View Products",
      link: "/products",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[auto] min-h-[680px] w-full overflow-hidden">
      <AnimatePresence custom={direction}>
        <motion.div
          key={slides[currentSlide].id}
          custom={direction}
          initial={{
            opacity: 0,
            x: direction > 0 ? 100 : -100,
            scale: 0.95,
          }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{
            opacity: 0,
            x: direction > 0 ? -100 : 100,
            scale: 0.95,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <img
              src={slides[currentSlide].imageUrl}
              alt={slides[currentSlide].title}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="max-w-2xl text-white mx-auto"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  {/* <p className="text-lg sm:text-xl md:text-2xl mb-8">
                    {slides[currentSlide].description}
                  </p> */}
                  <Link
                    to={slides[currentSlide].link}
                    className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    {slides[currentSlide].cta}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
