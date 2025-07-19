import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  project: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Patel",
      role: "Architect, Urban Design Studio",
      content:
        "Maa Mangala's polygranite sheets transformed our commercial project. The material quality exceeded our expectations and the installation support was exceptional.",
      rating: 5,
      project: "Corporate Office, Puri",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Homeowner",
      content:
        "The WPC panels for our balcony have withstood two monsoons without any damage. Beautiful finish that still looks new with minimal maintenance.",
      rating: 4,
      project: "Residential Villa, Cuttack",
    },
    {
      id: 3,
      name: "Vikram Mehta",
      role: "Contractor",
      content:
        "We regularly source PVC laminates from Maa Mangala for our projects. Consistent quality, on-time delivery, and excellent customer service make them our preferred supplier.",
      rating: 5,
      project: "Hotel Renovation, Bhubaneswar",
    },
    {
      id: 4,
      name: "Anjali Desai",
      role: "Interior Designer",
      content:
        "The charcoal louvers we used for our client's exterior have maintained their color and durability even after 18 months in direct sunlight.",
      rating: 5,
      project: "Beachfront Villa, Khorda",
    },
    {
      id: 5,
      name: "Sanjay Gupta",
      role: "Builder",
      content:
        "Their digital sheets gave us the perfect solution for creating feature walls in our apartment project. The customization options were impressive.",
      rating: 4,
      project: "Luxury Apartments, Banki",
    },
  ];

  const handleGoogleReviewsClick = () => {
    window.open(
      "https://www.google.com/search?sca_esv=88e8eed0985531be&rlz=1C1YTUH_enIN977IN981&nfpr=1&sxsrf=AE3TifNaBrYaKyapTWcjL7ljn_zCJCBmMA:1752906486980&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ex9wEhx5BlPC9MO4zsgAfZuJmCVAfwMZykWNZ4lYKIL-hvN-OXD6UPtz79WoNenMHS6xnAO7fgkdrgWIbmm3hvdJ4Kts6nvD3ghuIqP6D_AggC-BcA%3D%3D&q=Maa+Mangala+poly+granite+trede+Reviews&sa=X&ved=2ahUKEwjinezDpciOAxX7zjgGHV-sLuwQ0bkNegQIIRAD&biw=1536&bih=738&dpr=1.25",
      "_blank"
    );
  };

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Hear what our valued clients say about our products and services
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet bg-gray-300",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
            }}
            loop={true}
            className="pb-12 overflow-hidden"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md h-full mx-2">
                  <div className="flex flex-col gap-6 h-full">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={`${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <blockquote className="text-base md:text-lg text-gray-700 mb-6">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="mt-auto">
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-600 text-sm md:text-base mb-2">
                          {testimonial.role}
                        </p>
                        <p className="text-xs md:text-sm text-primary font-medium">
                          {testimonial.project}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* More Google Reviews Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={handleGoogleReviewsClick}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
          >
            More Google Reviews
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;