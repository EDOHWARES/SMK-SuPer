import { motion } from "framer-motion";

const MarqueeText = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-[#00247D] to-[#003891] py-4 mb-[4rem]">
      <motion.div
        className="whitespace-nowrap text-white text-sm md:text-xl font-bold"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        Education trains the mind to think and contribute. Embrace challenges,
        SMK Super; they build your potential to shape a brighter future 🌟
      </motion.div>
    </div>
  );
};

export default MarqueeText;
