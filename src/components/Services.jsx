import React, { useState } from 'react';
import { SERVICES_TEXT } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import BackyardFirePit from "../assets/Rennovations/BackyardFirePit.jpg";
import BackyardLounge from "../assets/Rennovations/BackyardLounge.jpg";
import DeckAndGrillArea from "../assets/Rennovations/DeckAndGrillArea.jpg";
import FrontYardRennovation from "../assets/Rennovations/FrontYardRennovation.jpg";
import GrillingArea from "../assets/Rennovations/GrillingArea.jpg";
import KitchenRennovation from "../assets/Rennovations/KitchenRennovation.jpg";
import ModernFrontYard2 from "../assets/Rennovations/ModernFrontYard2.jpg";
import ModernKitchen from "../assets/Rennovations/ModernKitchen.jpg";
import ModernPool from "../assets/Rennovations/ModernPool.jpg";
import ModernRestroomSink from "../assets/Rennovations/ModernRestroomSink.jpg";
import RestroomSinkRennovation from "../assets/Rennovations/RestroomSinkRennovation.jpg";
import ModernGazebo from "../assets/Rennovations/ModernGazebo2.jpg";
import ModernBilliardsRoom from "../assets/Rennovations/ModernBilliardsRoom.jpg";
import ModernBackyard from "../assets/Rennovations/ModernBackyard.jpg";
import AccessoryDwellingUnit2 from "../assets/Rennovations/AccessoryDwellingUnit2.jpg";


const serviceImages = {
  "Complete Home Renovations": FrontYardRennovation,
  "Custom Additions, Extensions & ADU's": AccessoryDwellingUnit2,
  "Restroom Renovations": ModernRestroomSink,
  "Kitchen Renovations": ModernKitchen,
  "Front Yard Renovations": ModernFrontYard2,
  "Backyard Renovations": ModernBackyard,
  "BBQ Pits & Grilling Areas": GrillingArea,
  "Pizza Ovens": DeckAndGrillArea,
  "Fire Pits": BackyardFirePit,
  "Decks & Patios": BackyardLounge,
  "Pools": ModernPool,
  "Gazebos": ModernGazebo,
};

const Services = ({ fullPage }) => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (title) => {
    setSelectedImage(serviceImages[title]);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`${fullPage ? 'min-h-screen' : ''} pt-12 pb-12 flex flex-col`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-4xl font-semibold mb-12 text-white"
      >
        Our Services
      </motion.h2>

      <div className="grid gap-12 px-4 sm:px-8 lg:px-16 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES_TEXT.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onHoverStart={() => setHoveredService(service.title)}
            onHoverEnd={() => setHoveredService(null)}
            onClick={() => openImageModal(service.title)}
            className="bg-opacity-20 bg-black rounded-lg p-6 shadow-lg relative overflow-hidden cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>

            {hoveredService === service.title && (
              <motion.img
                src={serviceImages[service.title]}
                alt={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.7, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            onClick={closeImageModal}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged service image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-11/12 md:w-3/4 lg:w-1/2 max-h-screen object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
