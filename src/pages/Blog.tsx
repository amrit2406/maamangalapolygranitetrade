import React from "react";
import { motion } from "framer-motion";
import BlogsSection from "../components/home/BlogSec";
import img1 from "../assets/h.png";

const BlogPage: React.FC = () => {
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
                Our Blog
              </h1>
              <p className="text-xl sm:text-xl text-white/80 mb-8">
                Expert insights on Polygranite, WPC Panels & Interior Design
                Ideas
              </p>
              <div className="w-24 h-1 mx-auto bg-white/70 rounded-full" />
            </motion.div>
          </div>
        </div>

        {/* Optional Light Blur Shapes */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-36 h-36 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-16 left-10 w-28 h-28 bg-white/5 rounded-full blur-2xl animate-pulse" />
        </div>

        {/* Bottom fade */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-30" /> */}
      </section>

      {/* Blog Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Blog Posts Grid */}
          <BlogsSection hideHeading={true} />
        </div>
      </section>

      {/* CTA Section (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Want More Expert Insights?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Subscribe to our newsletter for monthly updates on the latest
              trends in polygranite and interior solutions.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-r-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
