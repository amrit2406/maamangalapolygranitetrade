import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Ruler,
  Lightbulb,
  Check,
  Phone,
  ArrowRight,
  X,
} from "lucide-react";


type ProcessStep = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Project = {
  image: string;
  title: string;
  description: string;
  category: string;
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

const services = [
  {
    id: 1,
    image: "https://kuhnoteka.ru/wp-content/uploads/2017/10/0972.jpg",
    title: "Modular Kitchen",
    description:
      "Custom-designed kitchens with premium materials and smart storage solutions",
  },
  {
    id: 2,
    image: "https://avatars.mds.yandex.net/get-altay/13671691/2a000001916a416cfb9a31f05346f441a706/XXXL",
    title: "Wardrobe Design",
    description:
      "Space-efficient wardrobe solutions tailored to your storage needs",
  },
  {
    id: 3,
    image: "https://i.ytimg.com/vi/-2S0Q-iEffo/maxresdefault.jpg",
    title: "Tv Unit",
    description:
      "Elegant living spaces that reflect your personality and lifestyle",
  },
  {
    id: 4,
    image: "https://i.ytimg.com/vi/jawsRWS5_IY/maxresdefault.jpg",
    title: "Bedroom Design",
    description: "Serene bedroom designs for optimal comfort and relaxation",
  },
  {
    id: 5,
    image: "https://artdigest.co/cdn/shop/articles/Header_3_640x.jpg?v=1689939885",
    title: "Wall Panneling",
    description:
      "Luxurious and functional bathroom spaces with premium fittings",
  },
  // {
  //   id: 3,
  //   image: "https://images.wallpaperscraft.com/image/single/furniture_interior_design_86632_1920x1080.jpg",
  //   title: "Living Room Design",
  //   description:
  //     "Elegant living spaces that reflect your personality and lifestyle",
  // },
  // {
  //   id: 6,
  //   image: "https://i.pinimg.com/originals/ca/7d/71/ca7d71ed3958ed6940d8f5cc781b5eeb.jpg",
  //   title: "Office Design",
  //   description: "Productive workspaces designed for efficiency and comfort",
  // },
];

const processSteps: ProcessStep[] = [
  {
    title: "Initial Consultation",
    description: "We discuss your vision, requirements and budget",
    icon: <Ruler size={24} className="text-primary" />,
  },
  {
    title: "Concept Development",
    description:
      "Our designers create initial concepts and material selections",
    icon: <Lightbulb size={24} className="text-primary" />,
  },
  {
    title: "Design Presentation",
    description: "We present 3D renderings and material samples",
    icon: <Palette size={24} className="text-primary" />,
  },
  {
    title: "Implementation",
    description: "We oversee the execution to ensure flawless results",
    icon: <Check size={24} className="text-primary" />,
  },
];

const projects: Project[] = [
  {
    image:
      "https://i.pinimg.com/originals/ec/44/30/ec443079a15f56ab5f3b9e25abc46664.jpg",
    title: "Luxury Penthouse",
    description: "Modern elegance with warm natural elements",
    category: "Residential",
  },
  {
    image:
      "https://design-plaza.ru/images/products/32843/dvo-dv802-gap-07/dv802-03-gap-set-07-cam-01-2-_3.jpg",
    title: "Tech Startup Office",
    description: "Creative workspace fostering collaboration",
    category: "Commercial",
  },
  {
    image:
      "https://i.pinimg.com/originals/8a/ab/27/8aab2727e96cf97b3ec981d597a11e79.jpg",
    title: "Boutique Hotel Lobby",
    description: "Sophisticated first impression for guests",
    category: "Hospitality",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "The team transformed our outdated home into a modern sanctuary. Their attention to detail and material selection was exceptional.",
    author: "Neha Sahu",
    role: "Homeowner, Chelsea Residence",
  },
  {
    quote:
      "Our new office space has completely changed how our team works together. The design perfectly balances form and function.",
    author: "Asutosh Barik",
    role: "CEO, TechStart Inc.",
  },
];

const InteriorDesignPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    service: "",
  });

  const handleEnquiryClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setFormData((prev) => ({ ...prev, service: serviceName }));
    setIsModalOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (API call, etc.)
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
    // Reset form
    setFormData({ name: "", phone: "", message: "", service: "" });
  };
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
        {/* Background Image - replace with your actual image path */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage:
              "url(https://avatars.mds.yandex.net/i?id=b4e587e714fb3b2b98a589fe40f06b28_l-6441755-images-thumbs&ref=rim&n=13&w=2000&h=1500)",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray/40 z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Elevate Your Space With Timeless Design
              </h1>
              {/* <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Elevate Your Space With <span className="text-primary">Timeless Design</span>
              </h1> */}
              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Bespoke interior solutions blending functionality with aesthetic
                excellence
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone size={18} className="mr-2" /> Schedule Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Crafting Spaces That{" "}
                <span className="text-primary">Inspire</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-6">
                At our design studio, we believe interiors should be a
                reflection of those who inhabit them. Our approach combines
                aesthetic vision with practical functionality to create spaces
                that are as livable as they are beautiful.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With over 2 years of experience in the industry, our team brings
                expertise in residential, commercial, and hospitality design,
                delivering tailored solutions for every client.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span className="text-gray-700">Personalized approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span className="text-gray-700">Premium materials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span className="text-gray-700">End-to-end service</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://i.pinimg.com/originals/53/6a/af/536aaf7f3610e5b7b3d44a69ac610292.jpg"
                  alt="Designer working"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg w-2/3">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2+ Years Experience
                </h3>
                <p className="text-gray-600">
                  Transforming spaces across the country
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Premium interior design solutions for every space
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <button
                      onClick={() => handleEnquiryClick(service.title)}
                      className="mt-auto w-full bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-xl max-w-md w-full relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Enquire About {selectedService}
                </h3>
                <p className="text-gray-600 mb-6">
                  Fill out the form and our team will contact you shortly
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="mb-4">
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
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Service
                    </label>
                    <input
                      type="text"
                      id="service"
                      name="service"
                      value={formData.service}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of transformative interior designs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform">
                        <span className="text-sm text-white/80">
                          {project.category}
                        </span>
                        <h3 className="text-xl text-white font-medium">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <span className="text-sm text-primary font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <a
                      href="/contact"
                      className="inline-flex items-center text-sm text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      Contact Us Now{" "}
                      <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Design Process</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure your vision becomes reality
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -ml-0.5"></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 lg:w-1/2 ${
                  index % 2 === 0
                    ? "lg:mr-auto lg:pr-12"
                    : "lg:ml-auto lg:pl-12"
                }`}
              >
                <div className="bg-white p-8 rounded-xl shadow-md relative h-full">
                  <div className="absolute -top-4 left-6 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-gray-300 mr-3">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Client <span className="text-white/90">Testimonials</span>
            </h2>
            <div className="w-20 h-1 bg-white/80 mx-auto mb-6"></div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Hear what our clients say about working with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
              >
                <div className="mb-6 text-2xl leading-relaxed">
                  "{testimonial.quote}"
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-white/80 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesignPage;
