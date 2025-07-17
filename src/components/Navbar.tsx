import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Menu,
  X,
  Phone,
  MapPin,
} from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import log from "../assets/logo.png"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/interior-design", label: "Interior Design" },
    { path: "/blogs", label: "Blogs" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
  ];

  const socialMedia = [
    { icon: Facebook, url: "#" },
    { icon: Twitter, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Linkedin, url: "#" },
    // { icon: Youtube, url: "#" },
  ];

  return (
    <>
      {/* Spacer div with adjusted height */}
      <div className="h-19 md:h-20"></div>

      <motion.nav
        className={clsx(
          "fixed w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-md"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Section - Hidden on mobile */}
        <div className="hidden md:block bg-gray-900 text-white text-sm">
          <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-2">
            <div className="flex justify-between items-center">
              {/* Contact Info */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  <span>+91 6370685017</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  <span>maamangalapolygranite@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  <span>
                    BBSR-Puri Bypass Road, infront of KEC Engg. College.
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div
          className={clsx(
            "mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20",
            scrolled ? "py-2" : "py-3"
          )}
        >
          <div className="flex justify-between items-center h-12 md:h-14">
            <Link to="/" className="inline-block">
              <img
                src= {log}
                alt="Maa Mangala Logo"
                className="w-60 h-20 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8 lg:space-x-10">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={clsx(
                      "flex items-center hover:text-primary transition-colors text-sm md:text-base group",
                      location.pathname === item.path
                        ? "text-primary font-medium"
                        : "text-gray-700"
                    )}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        className={clsx(
                          "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                          location.pathname === item.path
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        )}
                      ></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-primary focus:outline-none transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="transition-transform rotate-180" />
              ) : (
                <Menu size={24} className="transition-transform" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <ul className="pt-4 pb-6 space-y-4 px-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={clsx(
                          "flex items-center px-4 py-3 rounded-lg transition-all text-base",
                          location.pathname === item.path
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-gray-700 hover:bg-gray-50 hover:pl-5"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
