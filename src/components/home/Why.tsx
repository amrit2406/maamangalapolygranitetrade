// import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  Factory, 
  Leaf, 
  Clock, 
  HeartHandshake 
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award size={40} className="text-primary" />,
      title: "Industry Recognition",
      description: "Multiple awards for product innovation and quality standards in polymer composites"
    },
    {
      icon: <ShieldCheck size={40} className="text-primary" />,
      title: "Quality Assurance",
      description: "Rigorous 7-step quality control process for every product batch"
    },
    {
      icon: <Factory size={40} className="text-primary" />,
      title: "Modern Manufacturing",
      description: "State-of-the-art production facility with 25,000 sq ft operational area"
    },
    {
      icon: <Leaf size={40} className="text-primary" />,
      title: "Eco-Friendly",
      description: "Sustainable materials and processes with 85% recycled content"
    },
    {
      icon: <Clock size={40} className="text-primary" />,
      title: "On-Time Delivery",
      description: "98% on-time delivery rate with our streamlined logistics network"
    },
    {
      icon: <HeartHandshake size={40} className="text-primary" />,
      title: "Customer First",
      description: "24/7 support with dedicated relationship managers"
    }
  ];

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Maa Mangala Polygranite
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We go beyond supplying materials - we deliver complete solutions with unmatched value
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary rounded-xl p-8 sm:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="border-r border-white/20 last:border-r-0 pr-0 md:pr-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-sm sm:text-base">Years Experience</div>
            </div>
            <div className="border-r border-white/20 last:border-r-0 pr-0 md:pr-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-sm sm:text-base">Projects Completed</div>
            </div>
            <div className="border-r border-white/20 last:border-r-0 pr-0 md:pr-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm sm:text-base">Industry Partners</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-sm sm:text-base">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;