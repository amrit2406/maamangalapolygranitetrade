import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import log from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="header-container bg-white rounded-sm">
              <img
                src={log}
                alt="Maa Mangala Polygranite Logo"
                className="logo-image"
              />
            </div>
            <p className="text-gray-400">
              Premium quality polygranite sheets, WPC panels, and interior
              solutions for residential and commercial spaces.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/interior-design"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Polygranite Sheets
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WPC Panels
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  PVC Wall Panels
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Charcoal Louvers
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Digital Sheets
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  PVC Laminates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-primary" />
                <p className="text-gray-400">
                  BBSR-Puri Bypass Road, infront of KEC Engg. College.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:+916370685017"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 6370685017
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:maamangalapolygranite@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  maamangalapolygranite@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-primary" />
                <p className="text-gray-400">Mon-Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Maa Mangala Polygranite. All
            rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Sitemap</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
