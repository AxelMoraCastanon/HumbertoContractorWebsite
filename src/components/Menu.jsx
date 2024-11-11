import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaInfoCircle, FaTools, FaClipboardList, FaImages, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { MdQrCode } from 'react-icons/md';
// import { QRCodeCanvas } from 'qrcode.react'; // QR Code import commented out
import { CONTACT } from "../constants";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [showQR, setShowQR] = useState(false); // QR Code state commented out

  const toggleMenu = () => setIsOpen(!isOpen);
  // const toggleQRModal = () => setShowQR(!showQR); // QR Code modal toggle commented out

  const handleClickOutside = (event) => {
    if (isOpen && !event.target.closest("#menuContainer") && !event.target.closest("#menuIcon")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Transparent Menu Icon */}
      <button
        onClick={toggleMenu}
        id="menuIcon"
        className="fixed top-5 right-5 z-50 p-3 rounded text-white shadow-lg bg-transparent"
        aria-label="Toggle Menu"
      >
        <FaBars size={24} />
      </button>

      {/* Slide-in Scrollable Menu on the Right */}
      {isOpen && (
        <div
          id="menuContainer"
          className="fixed top-16 right-0 bg-transparent p-4 shadow-lg z-40 w-48 max-h-80 overflow-y-auto"
        >
          <nav className="flex flex-col items-end space-y-3">
            <Link
              to="/"
              onClick={toggleMenu}
              className="flex items-center justify-end space-x-2 py-2 px-3 text-lg text-white bg-gray-800 bg-opacity-90 rounded-full shadow hover:bg-gray-700 transition-all"
            >
              <FaHome size={18} />
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="flex items-center justify-end space-x-2 py-2 px-3 text-lg text-white bg-gray-800 bg-opacity-90 rounded-full shadow hover:bg-gray-700 transition-all"
            >
              <FaInfoCircle size={18} />
              <span>About Us</span>
            </Link>
            <Link
              to="/services"
              onClick={toggleMenu}
              className="flex items-center justify-end space-x-2 py-2 px-3 text-lg text-white bg-gray-800 bg-opacity-90 rounded-full shadow hover:bg-gray-700 transition-all"
            >
              <FaTools size={18} />
              <span>Services</span>
            </Link>
            <Link
              to="/process"
              onClick={toggleMenu}
              className="flex items-center justify-end space-x-2 py-2 px-3 text-lg text-white bg-gray-800 bg-opacity-90 rounded-full shadow hover:bg-gray-700 transition-all"
            >
              <FaClipboardList size={18} />
              <span>Process</span>
            </Link>
            <Link
              to="/gallery"
              onClick={toggleMenu}
              className="flex items-center justify-end space-x-2 py-2 px-3 text-lg text-white bg-gray-800 bg-opacity-90 rounded-full shadow hover:bg-gray-700 transition-all"
            >
              <FaImages size={18} />
              <span>Gallery</span>
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="flex items-center justify-end space-x-2 py-2 px-3 text-lg text-white bg-gray-800 bg-opacity-90 rounded-full shadow hover:bg-gray-700 transition-all"
            >
              <FaEnvelope size={18} />
              <span>Contact Us</span>
            </Link>

            {/* Instagram Icon */}
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-end space-x-2 py-2 px-3 text-lg text-white bg-gray-800 bg-opacity-90 rounded-full shadow hover:bg-gray-700 transition-all"
            >
              <FaInstagram size={18} />
              <span>Instagram</span>
            </a>

            {/* QR Code Button - Commented Out */}
            {/* <button
              onClick={toggleQRModal}
              className="flex items-center justify-end space-x-2 py-2 px-3 text-lg text-white bg-gray-800 bg-opacity-90 rounded-full shadow hover:bg-gray-700 transition-all"
            >
              <MdQrCode size={18} />
              <span>QR Code</span>
            </button> */}
          </nav>
        </div>
      )}

      {/* QR Code Modal - Commented Out */}
      {/* {showQR && (
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
      )} */}
    </>
  );
};

export default Menu;
