import ModernHome from "../assets/Rennovations/BlackModernHome.jpg";
import { ABOUT_TEXT_FULL } from "../constants";
import { motion } from "framer-motion";

const About = ({ fullPage }) => {
  return (
    <div
      className={`${
        fullPage ? 'min-h-screen w-full' : ''
      } relative pb-12 pt-12 sm:container sm:mx-auto sm:px-8`}
    >
      {/* Background image as a cover on larger screens */}
      <div
        className="hidden sm:block absolute inset-0 h-full"
        style={{
          backgroundImage: `url(${ModernHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Full-screen background image for mobile, stretched and centered */}
      <div
        className="sm:hidden absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${ModernHome})`,
          backgroundSize: "cover", // Stretches the image to cover entire mobile screen
          backgroundPosition: "center", // Centers the image on mobile
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Heading and Content */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 z-10 sm:mt-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="my-8 text-3xl sm:text-4xl text-white"
        >
          About<span className="text-white"> Vanguard Developments</span>
        </motion.h1>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl p-4 space-y-4"
        >
          {ABOUT_TEXT_FULL.map((paragraph, index) => (
            <p key={index} className="text-lg">{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
