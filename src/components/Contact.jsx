import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const hoverEffect = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
};

const underlineEffect = {
  hover: {
    width: "100%",
    transition: { duration: 0.3 },
  },
};

const Contact = ({ fullPage }) => {
  return (
    <div className={`${fullPage ? 'min-h-screen' : ''} border-b border-neutral-900 pb-20 flex flex-col items-start`}>
      {/* Title with Parallax Effect */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="mt-10 mb-10 text-center text-4xl w-full"
      >
        Contact Information
      </motion.h1>

      <motion.div
        className="text-center tracking-tighter space-y-6 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Email Section */}
        {CONTACT.email && (
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <span className="font-semibold text-blue-300">Email: </span>
            <motion.a
              href={`mailto:${CONTACT.email}`}
              className="border-b relative overflow-hidden"
              variants={hoverEffect}
              whileHover="hover"
            >
              {CONTACT.email}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-300"
                initial={{ width: 0 }}
                animate={underlineEffect}
              />
            </motion.a>
          </motion.div>
        )}

        {/* Phone Number Section */}
        {CONTACT.phone && (
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <span className="font-semibold text-blue-300">Phone: </span>
            <motion.a
              href={`tel:${CONTACT.phone}`}
              className="border-b relative overflow-hidden"
              variants={hoverEffect}
              whileHover="hover"
            >
              {CONTACT.phone}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-300"
                initial={{ width: 0 }}
                animate={underlineEffect}
              />
            </motion.a>
          </motion.div>
        )}

        {/* Contracting License Section */}
        {CONTACT.license && (
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <span className="font-semibold text-blue-300">Contracting License: </span>
            <span className="text-neutral-300">{CONTACT.license}</span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
