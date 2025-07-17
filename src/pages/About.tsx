import React from "react";
import { motion } from "framer-motion";
import { Building2, Award, Check } from "lucide-react";
import img1 from "../assets/h.png";
import ProductsSection from "../components/home/ProductSec";
import WhyChooseUs from "../components/home/Why";
import GallerySection from "../components/home/GallerySec";

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[auto] min-h-[300px] w-full overflow-hidden bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img1})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container text-center mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-xl md:text-xl text-white/90 mb-8">
                Pioneering excellence in polymer composite solutions since 2023
              </p>
              <div className="w-24 h-1 mx-auto bg-white/70 rounded-full" />
            </motion.div>
          </div>
        </div>

        {/* Optional Abstract Blur Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-36 h-36 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-16 left-10 w-28 h-28 bg-white/5 rounded-full blur-2xl animate-pulse" />
        </div>

        {/* Decorative Gradient at Bottom */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-30" /> */}
      </section>

      {/* About Content */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="container mx-auto">
          {/* Company Story */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2023, Maa Mangala Polygranite began as a small
                  dealer unit in Bhubaneswar with a vision to revolutionize
                  interior and exterior surfaces with innovative polymer
                  composite solutions.
                </p>
                <p>
                  Today, we've grown into a leading manufacturer and supplier
                  production facility, serving clients across Odisha and 
                  neighboring states.
                </p>
                <p>
                  Our journey has been guided by three core principles: Quality,
                  Innovation, and Customer Satisfaction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2 bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Check
                    className="flex-shrink-0 text-primary mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">
                    10+ years of industry experience
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check
                    className="flex-shrink-0 text-primary mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">
                    ISO-certified manufacturing processes
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check
                    className="flex-shrink-0 text-primary mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">500+ satisfied clients</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check
                    className="flex-shrink-0 text-primary mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Eco-friendly production methods
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check
                    className="flex-shrink-0 text-primary mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Custom solutions for every project
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary/10 rounded-xl p-8 sm:p-12 mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  2+
                </div>
                <div className="text-sm sm:text-base text-gray-700">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  200+
                </div>
                <div className="text-sm sm:text-base text-gray-700">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  50+
                </div>
                <div className="text-sm sm:text-base text-gray-700">
                  Industry Partners
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  100%
                </div>
                <div className="text-sm sm:text-base text-gray-700">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Building2 className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To provide innovative, sustainable surface solutions that
                combine durability with aesthetic appeal, while maintaining the
                highest standards of quality and environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To become the most trusted name in polymer composite solutions
                across India, recognized for our product excellence, customer
                service, and sustainable manufacturing practices.
              </p>
            </motion.div>
          </div>

          <ProductsSection />
          <WhyChooseUs />
          <GallerySection />
        </div>
      </section>
    </div>
  );
};

export default About;
