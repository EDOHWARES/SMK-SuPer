import { motion } from "framer-motion";

const MarqueeText = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-[#00247D] to-[#003891] py-4">
      <motion.div
        className="whitespace-nowrap text-white text-2xl font-bold"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        🚀 Welcome to our platform! Enjoy seamless experiences. 🌟 Welcome to our platform! Enjoy seamless experiences.
      </motion.div>
    </div>
  );
};

export default MarqueeText;
