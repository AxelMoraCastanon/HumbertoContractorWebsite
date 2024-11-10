import React from 'react';
import { motion } from "framer-motion";
import { SERVICES_TEXT } from "../constants";
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

// Mapping of service titles to corresponding images
const serviceImages = {
  "Restroom Renovations": ModernRestroomSink,
  "Kitchen Renovations": ModernKitchen,
  "Front Yard Renovations": ModernFrontYard2,
  "Backyard Renovations": BackyardLounge,
  "BBQ Pits & Grilling Areas": GrillingArea,
  "Pizza Ovens": DeckAndGrillArea,
  "Fire Pits": BackyardFirePit,
  "Decks & Patios": BackyardLounge,
  "Pools": ModernPool,
  "Complete Home Renovations": FrontYardRennovation,
  "Custom Additions & Extensions": ModernBilliardsRoom,
  "Gazebos": ModernGazebo,
};

const Gallery = ({ fullPage }) => {
  return (
    <div className={`${fullPage ? 'min-h-screen' : ''} py-12 px-8`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-4xl font-semibold mb-12 text-white"
      >
        Project Gallery
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES_TEXT.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-lg shadow-lg overflow-hidden cursor-pointer"
          >
            <img
              src={serviceImages[service.title]}
              alt={service.title}
              className="w-full h-64 object-cover"
            />

            {/* Title Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
