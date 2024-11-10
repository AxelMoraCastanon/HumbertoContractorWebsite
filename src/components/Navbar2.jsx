import React, { useState } from 'react';
import logo from '../assets/VanguardDevelopmentsLogo.jpg';
import { CONTACT } from '../constants';
import { MdQrCode } from 'react-icons/md'; // QR Code icon
import { QRCodeCanvas } from 'qrcode.react'; // QR Code Library
import { motion } from "framer-motion";

const Navbar = () => {
  const [showQR, setShowQR] = useState(false); // QR modal visibility

  const toggleQRModal = () => setShowQR(!showQR);

  // Navbar animation for entrance
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-between py-4 px-4 md:py-6 md:px-10 text-white bg-neutral-900 shadow-md"
        style={{ fontFamily: "Archivo, sans-serif" }}
      >
        {/* Left section with navigation links */}
        <div className="flex gap-4 md:gap-8 text-sm md:text-lg mb-4 md:mb-0">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </div>

        {/* Center section with logo */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img src={logo} alt="Vanguard Developments Logo" className="h-20 md:h-32 mx-auto" />
        </div>

        {/* Right section with phone number and QR button */}
        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-lg">
          <span>{CONTACT.phone}</span>
          <motion.button
            onClick={toggleQRModal}
            className="hover:text-green-500"
            whileHover={{ scale: 1.2 }}
          >
            <MdQrCode size={24} />
          </motion.button>
        </div>
      </motion.nav>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs md:max-w-sm">
            <h3 className="text-lg font-bold mb-4">Scan to Share My Website</h3>
            <QRCodeCanvas value={window.location.href} size={150} className="mx-auto" />
            <button
              onClick={toggleQRModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
