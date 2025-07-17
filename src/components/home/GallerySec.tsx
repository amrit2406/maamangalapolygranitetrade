import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const GallerySection = () => {
  const galleryImages = [
    'https://polygraniteindia.com/wp-content/uploads/2022/11/polygranite-1024x683.png',
    'https://image.made-in-china.com/2f0j00FeShjMAJcvrU/China-Wholesale-Factory-Indoor-Decor-Wood-Plastic-Composite-PVC-Coating-Cladding-Fluted-Wall-Board-Interior-WPC-Wall-Panel.jpg',
    'https://avatars.mds.yandex.net/get-altay/14599414/2a00000194611c05988051feb873147536d0/XXXL',
    'https://5.imimg.com/data5/SELLER/Default/2023/6/314642823/CV/TF/GP/143869956/louvered-panels.png',
    'https://5.imimg.com/data5/SELLER/Default/2024/3/397350778/FF/RA/DI/14628832/pu-stone-panel.jpeg',
    'https://gw-assets.assaabloy.com/is/image/assaabloy/ec931-local-middleeastassaabloycom-products-doors-lockwood-polodoorcol',
    'https://classicsdoors.com/assets/website/images/resource/image-4.jpg',
    'https://remodernliving.com/wp-content/uploads/2024/02/Flush-Doors.webp',
    'https://s3.ap-south-1.amazonaws.com/mbprodimages/images/interiorDesignerCMS/decorPartner/150/projectImage/modern-u-shaped-kitchen-designs-10.jpg',
    'https://i.pinimg.com/736x/56/6c/f5/566cf560800779cd0d33e157b6591b56.jpg',
    'https://s.alicdn.com/@sc04/kf/Ha17a448a37384df4ab2f5d868c7d39aa5.jpg_300x300.jpg',
    'https://www.sgrad.ru/upload/iblock/ee2/ee217b56f6c6d298d99eaad4d05d1991.jpg',
    'https://i.ytimg.com/vi/SRSZ3fziPNA/maxresdefault.jpg',
    'https://tg-alterra.ru/upload/images/content-img(210).png',
    'https://www.kaycan.com/wp-content/uploads/2016/06/3FY_4884-1.jpg',
    'https://www.exolongroup.com/images/top_vivak-w1440-ar.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product Gallery
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            See our premium materials in real-world applications
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((imgSrc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "50px" }}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openImage(imgSrc)}
            >
              <img
                src={imgSrc}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Image Viewer */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={closeImage}
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;