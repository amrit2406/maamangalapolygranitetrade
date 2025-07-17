// import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Building2 size={48} className="text-primary" />,
      title: "10+ Years Experience",
      description: "Trusted expertise in polygranite and interior solutions"
    },
    {
      icon: <Users size={48} className="text-primary" />,
      title: "500+ Satisfied Clients",
      description: "Building lasting relationships across industries"
    },
    {
      icon: <Award size={48} className="text-primary" />,
      title: "Quality Certified",
      description: "ISO certified materials and processes"
    },
    {
      icon: <Award size={48} className="text-primary" />,
      title: "Reliable Partnerships",
      description: "Collaborating with top manufacturers"
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
            About Maa Mangala Polygranite
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We are a leading manufacturer and supplier of premium polygranite sheets, WPC panels, and interior solutions with a commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://img.freepik.com/free-photo/3d-rendering-luxury-business-meeting-working-room-executive-office_105762-1993.jpg?semt=ais_items_boosted&w=740" 
                alt="Our manufacturing facility" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            {/* <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Pioneers in Polymer Composite Solutions
            </h3> */}
            <p className="text-gray-600 mb-6">
              Since 2023, we've been revolutionizing interior and exterior surfaces with our innovative polygranite technology. Our products combine durability with aesthetic appeal, offering perfect solutions for residential and commercial spaces.
            </p>
            <p className="text-gray-600 mb-8">
              What sets us apart is our commitment to sustainable manufacturing processes and customer-centric approach. We don't just sell products - we provide complete surface solutions tailored to your needs.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;