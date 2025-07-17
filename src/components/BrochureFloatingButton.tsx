import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, ChevronDown } from "lucide-react";

interface Brochure {
  name: string;
  file: string;
}

interface BrochureFloatingButtonProps {
  brochures: Brochure[];
}

const BrochureFloatingButton: React.FC<BrochureFloatingButtonProps> = ({
  brochures,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Button - Always Visible */}
      <motion.div
        className={`fixed ${isMobile ? 'bottom-4 right-4' : 'left-0 bottom-16 -translate-y-1/2'} z-50`}
      >
        <motion.button
          onClick={toggleMenu}
          className={`flex items-center gap-2 ${
            isMobile
              ? 'bg-indigo-600 text-white rounded-full p-3 shadow-xl'
              : 'bg-gradient-to-l from-indigo-600 to-purple-600 text-white rounded-r-lg px-4 py-3'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={20} />
          {!isMobile && <span className="font-medium"> Catalogues</span>}
          {isMobile && isOpen && <X size={20} />}
          {isMobile && !isOpen && <ChevronDown size={20} />}
        </motion.button>
      </motion.div>

      {/* Desktop Dropdown */}
      {!isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="fixed left-24 top-1/4 -translate-y-1/2 z-50 bg-white shadow-2xl rounded-lg w-64 max-h-[70vh] overflow-y-auto"
            >
              <div className="p-2">
                <h4 className="px-3 py-2 font-semibold text-gray-800 border-b">
                  Available Catalogues
                </h4>
                <ul className="divide-y divide-gray-100">
                  {brochures.map((brochure, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={brochure.file}
                        download
                        className="block px-3 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition-colors"
                      >
                        {brochure.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Mobile Fullscreen Menu */}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={toggleMenu}
              />

              <motion.div
                ref={menuRef}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 max-h-[85vh] flex flex-col"
              >
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Download Brochures
                  </h3>
                  <button onClick={toggleMenu} className="text-gray-500">
                    <X size={24} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-2">
                  <ul className="space-y-2">
                    {brochures.map((brochure, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <a
                          href={brochure.file}
                          download
                          className="block px-3 py-3 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors"
                        >
                          <span className="font-medium text-gray-800">
                            {brochure.name}
                          </span>
                          <Download className="inline-block ml-2 text-indigo-600" size={16} />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-gray-50 border-t border-gray-200">
                  <button
                    onClick={toggleMenu}
                    className="w-full py-3 text-indigo-600 font-medium"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default BrochureFloatingButton;