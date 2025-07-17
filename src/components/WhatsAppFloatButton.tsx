import React from 'react';
import { WhatsappIcon } from 'react-share';
import { motion } from 'framer-motion';

interface WhatsAppFloatButtonProps {
  phoneNumber: string;
  message?: string;
  bottom?: string | number;
  right?: string | number;
  size?: number;
  bgColor?: string;
  iconColor?: string;
}

const WhatsAppFloatButton: React.FC<WhatsAppFloatButtonProps> = ({
  phoneNumber,
  message = '',
  bottom = '6',
  right = '6',
  size = 48,
  bgColor = 'bg-green-500',
  iconColor = 'text-white',
}) => {
  // Format phone number (remove all non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Create WhatsApp URL with optional message
  const isMobile = /iPhone|Android/i.test(navigator.userAgent);

const whatsappUrl = isMobile
  ? `https://wa.me/${formattedPhone}${message ? `?text=${encodeURIComponent(message)}` : ''}`
  : `https://web.whatsapp.com/send?phone=${formattedPhone}${message ? `&text=${encodeURIComponent(message)}` : ''}`;


  return (
    <motion.div
      className={`fixed z-50`}
      style={{
        bottom: typeof bottom === 'number' ? `${bottom}px` : `${bottom}rem`,
        right: typeof right === 'number' ? `${right}px` : `${right}rem`,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${bgColor} hover:${bgColor.replace('500', '600')} ${iconColor} rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl`}
        aria-label="Chat on WhatsApp"
      >
        <WhatsappIcon size={size} round />
      </a>
    </motion.div>
  );
};

export default WhatsAppFloatButton;