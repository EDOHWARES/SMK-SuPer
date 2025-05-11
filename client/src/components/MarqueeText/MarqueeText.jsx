// import { motion } from "framer-motion";

// const MarqueeText = () => {
//   return (
//     <div className="w-full overflow-hidden bg-gradient-to-r from-[#00247D] to-[#003891] py-4 mb-[4rem]">
//       <motion.div
//         className="whitespace-nowrap text-white text-sm md:text-xl font-bold"
//         animate={{ x: ["100%", "-100%"] }}
//         transition={{
//           repeat: Infinity,
//           duration: 25,
//           ease: "linear",
//         }}
//       >
//         Education trains the mind to think and contribute. Embrace challenges,
//         SMK Super; they build your potential to shape a brighter future 🌟
//       </motion.div>
//     </div>
//   );
// };

// export default MarqueeText;



export const MarqueeText = () => {
  return (
    <div className="bg-yellow-400 text-blue-900 py-2 px-4">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="mr-8 font-semibold">📢 Admissions for 2025-2026 Academic Year Now Open!</span>
          <span className="mr-8 font-semibold">🏆 Congratulations to our Science Team for winning the National Science Competition!</span>
          <span className="mr-8 font-semibold">📚 Parent-Teacher Meeting scheduled for May 15th, 2025.</span>
          <span className="mr-8 font-semibold">🎭 Annual School Festival Coming Up on June 2nd, 2025!</span>
          <span className="mr-8 font-semibold">⚽ Inter-School Sports Tournament begins next Monday.</span>
        </div>
        <div className="inline-block animate-marquee2">
          <span className="mr-8 font-semibold">📢 Admissions for 2025-2026 Academic Year Now Open!</span>
          <span className="mr-8 font-semibold">🏆 Congratulations to our Science Team for winning the National Science Competition!</span>
          <span className="mr-8 font-semibold">📚 Parent-Teacher Meeting scheduled for May 15th, 2025.</span>
          <span className="mr-8 font-semibold">🎭 Annual School Festival Coming Up on June 2nd, 2025!</span>
          <span className="mr-8 font-semibold">⚽ Inter-School Sports Tournament begins next Monday.</span>
        </div>
      </div>
    </div>
  );
};