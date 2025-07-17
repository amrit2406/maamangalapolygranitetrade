import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ChevronDown, X } from "lucide-react";
import img1 from "../assets/h.png";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: {
    thickness: string;
    size: string;
    material: string;
  };
}

const ProductsPage: React.FC = () => {
  // All product categories
  const categories = [
    "All",
    "Polygranite Sheets",
    "WPC Panels",
    "PVC Wall Panels",
    "Charcoal Louvers",
    "Digital Sheets",
    "PVC Laminates",
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Polygranite Sheets",
      category: "Polygranite Sheets",
      description: "Premium marble finish sheet for walls and ceilings",
      image:
        "https://polygranitesheet.com/wp-content/uploads/2024/03/AWAD-215A.webp",
      specs: {
        thickness: "3mm",
        size: "8x4 ft",
        material: "Polymer Composite (PVC Resin + Calcium Carbonate)",
      },
    },
    {
      id: 2,
      name: "WPC Louvers",
      category: "WPC Panels",
      description: "Waterproof panel with authentic wood texture",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/10/QD/VL/CQ/47954827/wpc-louver-panels.jpg",
      specs: {
        thickness: "12mm",
        size: "8x4 ft or custom",
        material: "Wood Plastic Composite (60% Wood + 30% HDPE + Additives)",
      },
    },
    {
      id: 3,
      name: "Charcol Louvers",
      category: "PVC Wall Panels",
      description: "Contemporary design for modern interiors",
      image:
        "https://i.pinimg.com/736x/a3/c7/f8/a3c7f8f4a39ec514591c5e63c1118e3e.jpg",
      specs: {
        thickness: "18mm",
        size: "Custom lengths",
        material: "Charcoal Polymer (Carbon + Polymer Resin)",
      },
    },
    {
      id: 4,
      name: "PVC Louvers",
      category: "Charcoal Louvers",
      description: "UV-resistant outdoor louvers",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/6/314642823/CV/TF/GP/143869956/louvered-panels.png",
      specs: {
        thickness: "12mm",
        size: "Custom Sizes",
        material: "High-Density PVC with UV Coating",
      },
    },
    {
      id: 5,
      name: "PU Stone Pannel",
      category: "Digital Sheets",
      description: "Personalized designs for unique spaces",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/3/397350778/FF/RA/DI/14628832/pu-stone-panel.jpeg",
      specs: {
        thickness: "20–25mm",
        size: "600x300mm / 24x12 in",
        material: "Polyurethane Foam + Stone Texture Finish",
      },
    },
    {
      id: 6,
      name: "WPC Door Frame",
      category: "PVC Laminates",
      description: "Durable door frames resistant to termites and moisture",
      image:
        "https://gw-assets.assaabloy.com/is/image/assaabloy/ec931-local-middleeastassaabloycom-products-doors-lockwood-polodoorcol",
      specs: {
        thickness: "70x45mm (section)",
        size: "7 ft or custom",
        material: "Wood Plastic Composite",
      },
    },
    {
      id: 7,
      name: "PVC & Ply Door",
      category: "PVC Laminates",
      description: "Combination of plywood core with PVC laminated surface",
      image:
        "https://classicsdoors.com/assets/website/images/resource/image-4.jpg",
      specs: {
        thickness: "30–35mm",
        size: "7x3 ft or custom",
        material: "Plywood Core + PVC Skin",
      },
    },
    {
      id: 8,
      name: "Flush Door",
      category: "PVC Laminates",
      description: "Minimalist door with smooth flat surface",
      image:
        "https://remodernliving.com/wp-content/uploads/2024/02/Flush-Doors.webp",
      specs: {
        thickness: "25–40mm",
        size: "7x3 ft or custom",
        material: "Block Board Core + Laminate",
      },
    },
    {
      id: 9,
      name: "Modular Kitchen",
      category: "PVC Laminates",
      description: "Custom-built kitchen using PVC and WPC cabinetry",
      image:
        "https://s3.ap-south-1.amazonaws.com/mbprodimages/images/interiorDesignerCMS/decorPartner/150/projectImage/modern-u-shaped-kitchen-designs-10.jpg",
      specs: {
        thickness: "16–18mm panels",
        size: "Custom Layout",
        material: "PVC/WPC Boards + Laminate Finish",
      },
    },
    {
      id: 10,
      name: "Cupboard",
      category: "PVC Laminates",
      description: "Wardrobe with laminate or acrylic surface",
      image:
        "https://i.pinimg.com/736x/56/6c/f5/566cf560800779cd0d33e157b6591b56.jpg",
      specs: {
        thickness: "18mm",
        size: "Custom Size",
        material: "MDF or Plywood + Laminate",
      },
    },
    {
      id: 11,
      name: "ACP & HPL Sheet",
      category: "PVC Laminates",
      description: "Exterior grade sheets for cladding and facade",
      image:
        "https://s.alicdn.com/@sc04/kf/Ha17a448a37384df4ab2f5d868c7d39aa5.jpg_300x300.jpg",
      specs: {
        thickness: "3mm (ACP), 6mm (HPL)",
        size: "8x4 ft or custom",
        material: "Aluminum Composite / High Pressure Laminate",
      },
    },
    {
      id: 12,
      name: "Wallpaper",
      category: "PVC Laminates",
      description: "PVC or fabric-based wall coverings in multiple designs",
      image:
        "https://www.sgrad.ru/upload/iblock/ee2/ee217b56f6c6d298d99eaad4d05d1991.jpg",
      specs: {
        thickness: "0.3–1mm",
        size: "10m Roll",
        material: "PVC or Non-Woven Fabric",
      },
    },
    {
      id: 13,
      name: "All types Adhessives",
      category: "PVC Laminates",
      description:
        "Industrial grade adhesives for wood, PVC, and laminate bonding",
      image: "https://i.ytimg.com/vi/SRSZ3fziPNA/maxresdefault.jpg",
      specs: {
        thickness: "—",
        size: "500ml, 1L, 5L, 20L",
        material: "PU / Synthetic Resin / Contact Adhesive",
      },
    },
    {
      id: 14,
      name: "Flutted pannels",
      category: "PVC Laminates",
      description: "3D wall decor panels with vertical groove designs",
      image: "https://tg-alterra.ru/upload/images/content-img(210).png",
      specs: {
        thickness: "18mm",
        size: "8x4 ft or custom",
        material: "MDF or WPC with Veneer or Laminate",
      },
    },
    {
      id: 15,
      name: "Soffit pannel & Louvers",
      category: "PVC Laminates",
      description:
        "Exterior ceiling/louver panels for ventilation and aesthetics",
      image: "https://www.kaycan.com/wp-content/uploads/2016/06/3FY_4884-1.jpg",
      specs: {
        thickness: "10–15mm",
        size: "Custom Lengths",
        material: "Vinyl or Fiber Cement",
      },
    },
    {
      id: 16,
      name: "UV Sheet",
      category: "PVC Laminates",
      description:
        "Scratch-resistant glossy panels for furniture and interiors",
      image: "https://www.exolongroup.com/images/top_vivak-w1440-ar.jpg",
      specs: {
        thickness: "1–1.5mm",
        size: "8x4 ft",
        material: "PVC with UV Coating",
      },
    },
    {
      id: 17,
      name: "Artificial Grass",
      category: "PVC Laminates",
      description: "Synthetic turf for landscaping and indoor decor",
      image:
        "https://avatars.mds.yandex.net/get-altay/11395962/2a0000018dbca7cd686bc7741cf629060229/XXL_height",
      specs: {
        thickness: "25–40mm (pile height)",
        size: "1x5m / 2x5m Rolls",
        material: "Polypropylene + Latex Backing",
      },
    },
    {
      id: 18,
      name: "Build Bond",
      category: "PVC Laminates",
      description: "Multi-surface adhesive for construction applications",
      image:
        "https://m.media-amazon.com/images/I/51SQWpNeU1L._AC_UL960_QL65_.jpg",
      specs: {
        thickness: "—",
        size: "500ml, 1L, 5L",
        material: "Synthetic Resin or PU Adhesive",
      },
    },
    {
      id: 19,
      name: "Mosaic Tile",
      category: "PVC Laminates",
      description: "Glass or ceramic mosaic for walls and surfaces",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mosaic_-_Mosqu%C3%A9e_de_Paris.jpg/1200px-Mosaic_-_Mosqu%C3%A9e_de_Paris.jpg",
      specs: {
        thickness: "4–8mm",
        size: "300x300mm sheets",
        material: "Glass / Ceramic / Stone",
      },
    },
    {
      id: 20,
      name: "Roof Shingles",
      category: "PVC Laminates",
      description: "Weather-resistant shingles for pitched roofs",
      image:
        "https://rms3.kufar.by/v1/gallery/adim1/2335c42a-7ed6-4906-88cd-fcdc5802afb7.jpg",
      specs: {
        thickness: "3–6mm",
        size: "1000x300mm",
        material: "Bitumen / Asphalt / Composite",
      },
    },
    {
      id: 21,
      name: "Aluminium Accessories",
      category: "PVC Laminates",
      description: "Aluminium channels, trims, and edging solutions",
      image:
        "https://i.pinimg.com/originals/b8/23/d4/b823d4086c846002ea91cf23db3b1d26.jpg",
      specs: {
        thickness: "1–3mm",
        size: "Custom Lengths",
        material: "Anodized / Powder-Coated Aluminium",
      },
    },
    {
      id: 22,
      name: "French Moulding",
      category: "PVC Laminates",
      description: "Decorative mouldings for ceilings, walls, and furniture",
      image:
        "https://ortgraph.ru/upload/medialibrary/88d/88da58bbea608d5922257341f3f2e28d.jpg",
      specs: {
        thickness: "30–60mm profile",
        size: "Custom lengths",
        material: "PU Foam / Wood / MDF",
      },
    },
    {
      id: 23,
      name: "Golden PVC Strip & Stainless steel strip (self adhesive)",
      category: "PVC Laminates",
      description: "Edge beading or detailing strips with adhesive back",
      image:
        "https://image.made-in-china.com/2f0j00GREYSeOHnjbd/China-Supplier-Stainless-Steel-U-Channel-Decorative-Metal-Trim-for-Interior-Design.webp",
      specs: {
        thickness: "0.5–1mm",
        size: "5mm / 8mm / 10mm width x 1000mm",
        material: "PVC / SS 304 (Mirror/Matte)",
      },
    },
  ];

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // State for enquiry form
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle enquiry button click
  const handleEnquireClick = (product: Product) => {
    setSelectedProduct(product);
    setShowEnquiryForm(true);
    setSubmitSuccess(false);
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Enquiry submitted:", {
        product: selectedProduct,
        customer: formData,
      });

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Auto-close after 2 seconds
      setTimeout(() => {
        setShowEnquiryForm(false);
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Our Products
              </h1>
              <p className="text-xl sm:text-xl text-white/80 mb-8">
                Premium materials for modern construction and interior solutions
              </p>
              <div className="w-24 h-1 mx-auto bg-white/70 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="container mx-auto">
          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-1/2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="relative w-full md:w-auto">
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center justify-between w-full md:w-64 px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="flex items-center">
                    <Filter size={18} className="mr-2 text-gray-500" />
                    <span>{selectedCategory}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isCategoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isCategoryOpen && (
                  <div className="absolute z-10 mt-1 w-full md:w-64 bg-white rounded-md shadow-lg border border-gray-200">
                    <ul className="py-1 max-h-60 overflow-auto">
                      {categories.map((category) => (
                        <li
                          key={category}
                          className={`px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer ${
                            selectedCategory === category
                              ? "bg-gray-100 text-primary"
                              : ""
                          }`}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsCategoryOpen(false);
                          }}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
                    {/* Product Image */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Product Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>

                      {/* Specifications */}
                      <div className="border-t border-gray-100 pt-4 mt-4">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">
                          SPECIFICATIONS
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>Thickness: {product.specs.thickness}</li>
                          <li>Size: {product.specs.size}</li>
                          <li>Material: {product.specs.material}</li>
                        </ul>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => handleEnquireClick(product)}
                        className="mt-6 w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition-colors"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Enquiry Form Popup */}
      <AnimatePresence>
        {showEnquiryForm && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Enquire About {selectedProduct.name}
                  </h3>
                  <button
                    onClick={() => setShowEnquiryForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                    disabled={isSubmitting}
                  >
                    <X size={24} />
                  </button>
                </div>

                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-gray-600">
                      Your enquiry has been submitted successfully. We'll
                      contact you soon.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Product Info */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-20 h-20 object-cover rounded mr-4"
                        />
                        <div>
                          <h4 className="font-medium text-gray-800">
                            {selectedProduct.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {selectedProduct.category}
                          </p>
                          <p className="text-sm mt-1">
                            {selectedProduct.specs.size}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Your Name*
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Email Address*
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Phone Number*
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Message (Optional)
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Any specific requirements or questions..."
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-6 w-full bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          "Send Enquiry"
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We specialize in customized polygranite and WPC products tailored
              to your specific requirements.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Contact Our Experts
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
