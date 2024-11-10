import ModernHome from "../assets/Rennovations/ModernHome.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = ({ fullPage }) => {
  return (
    <div
      className={`${fullPage ? 'min-h-screen' : ''} relative pb-12 pt-12`}
      style={{
        backgroundImage: `url(${ModernHome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="my-8 text-3xl sm:text-4xl"
        >
          About<span className="text-white"> Vanguard Developments</span>
        </motion.h1>

        {/* Text Section with Smooth Transition */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl bg-black bg-opacity-60 p-4 rounded-lg"
        >
          <p className="text-lg">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
