import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Minimize2, X } from 'lucide-react';
import cer from "../../assets/cer.jpeg"; 

const CertificateDisplay: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-12 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Certification</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recognized as an authorized distributor of premium interior solutions
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10"></div>
            <img
              src={cer} // Using the imported image directly
              alt="RUAT Certificate - Authorized Distributor"
              className="w-full h-auto object-contain max-h-[500px]"
              onError={(e) => {
                console.error('Image failed to load');
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute bottom-4 right-4 bg-white/90 rounded-full p-2 shadow-md group-hover:bg-white transition-colors">
              <Maximize2 size={20} className="text-gray-700" />
            </div>
          </motion.div>
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={24} className="text-gray-700" />
                </button>
                <div className="p-8">
                  <img
                    src= {cer} // Replace with your actual image path
                    alt="RUAT Certificate - Authorized Distributor"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="sticky bottom-0 bg-gradient-to-t from-white to-transparent h-20 flex items-end justify-center pb-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Minimize2 size={18} />
                    Close Certificate
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CertificateDisplay;