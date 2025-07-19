// import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sheet, 
  PanelTop, 
  PanelLeft, 
  PanelRight, 
  VenetianMask, 
  LayoutGrid 
} from 'lucide-react';

const ProductsSection = () => {
  const productCategories = [
    {
      id: 1,
      name: "Polygranite Sheets",
      icon: <Sheet size={36} className="text-primary" />,
      description: "Durable and elegant polymer composite sheets",
      link: "/products",
      image: "https://polygranitesheet.com/wp-content/uploads/2024/03/AWAD-215A.webp"
    },
    {
      id: 2,
      name: "WPC Louvers",
      icon: <PanelTop size={36} className="text-primary" />,
      description: "Waterproof wood-plastic composite panels",
      link: "/products",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/10/QD/VL/CQ/47954827/wpc-louver-panels.jpg"
    },
    {
      id: 3,
      name: "Charcoal Louvers",
      icon: <PanelLeft size={36} className="text-primary" />,
      description: "Lightweight and easy-to-install wall solutions",
      link: "/products",
      image: "https://i.pinimg.com/736x/a3/c7/f8/a3c7f8f4a39ec514591c5e63c1118e3e.jpg"
    },
    {
      id: 4,
      name: "PVC Louvers",
      icon: <VenetianMask size={36} className="text-primary" />,
      description: "UV-resistant and weatherproof louvers",
      link: "/products",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/6/314642823/CV/TF/GP/143869956/louvered-panels.png"
    },
    {
      id: 5,
      name: "PU Stone Pannel",
      icon: <LayoutGrid size={36} className="text-primary" />,
      description: "Custom printed decorative surfaces",
      link: "/products",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/3/397350778/FF/RA/DI/14628832/pu-stone-panel.jpeg"
    },
    {
      id: 6,
      name: "WPC Door Frame",
      icon: <PanelRight size={36} className="text-primary" />,
      description: "High-pressure laminates for all surfaces",
      link: "/products",
      image: "https://gw-assets.assaabloy.com/is/image/assaabloy/ec931-local-middleeastassaabloycom-products-doors-lockwood-polodoorcol"
    }
  ];

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-white">
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
            Our Premium Products
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            High-quality materials engineered for durability, aesthetics, and performance in modern construction.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={product.link} className="block h-full">
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Product Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <div className="text-primary font-medium flex items-center transition-all group-hover:translate-x-1">
                      View Products
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;