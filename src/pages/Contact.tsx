import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import img1 from "../assets/h.png";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      valid = false;
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 1500);
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
                Contact Us
              </h1>
              <p className="text-xl sm:text-xl text-white/80 mb-8">
                Get in touch with our team for inquiries, quotes, or support
              </p>
              <div className="w-24 h-1 mx-auto bg-white/70 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Thank you for your message!</h3>
                  <p>We've received your inquiry and our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="9876543210"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select a subject</option>
                      <option value="Polygranite Sheet">Polygranite Sheet</option>
                      <option value="WPC Louvers">WPC Louvers</option>
                      <option value="Charcoal Louvers">Charcoal Louvers</option>
                      <option value="PVC Louvers">PVC Louvers</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2 bg-gray-50 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Office</h3>
                    <p className="text-gray-600">
                      BBSR-Puri Bypass Road, <br /> infront of KEC Engg. College.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      <a href="tel:+916370685017" className="hover:text-primary transition-colors">+91 6370685017</a><br />
                      <a href="tel:+919178926613" className="hover:text-primary transition-colors">+91 9178926613</a><br />
                      <a href="tel:+919938166834" className="hover:text-primary transition-colors">+91 9938166834</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@maamangalapolygranite.com" className="hover:text-primary transition-colors">maamangalapolygranite@gmail.com</a><br />
                      {/* <a href="mailto:sales@maamangalapolygranite.com" className="hover:text-primary transition-colors">sales@maamangalapolygranite.com</a> */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4453.475028705402!2d85.85602585458203!3d20.17942304833723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1752670763759!5m2!1sen!2sin" width="100%" height="250" loading="lazy" ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;