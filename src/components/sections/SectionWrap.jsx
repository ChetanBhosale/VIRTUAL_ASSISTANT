import { motion } from "framer-motion";

const SectionWrap = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.8"
      className="w-full py-10 bg-green-900 rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap ">
        <motion.h2
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[15vw] mt-8 leading-none font-['Bebas_Neue'] font-semibold pr-10"
        >
          SOLUTIONS FOR EVERY DAY DAILY TASKS
        </motion.h2>
        <motion.h2
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[15vw] mt-8 leading-none font-['Bebas_Neue'] font-semibold "
        >
          SOLUTIONS FOR EVERY DAY DAILY TASKS
        </motion.h2>
      </div>
    </div>
  );
};

export default SectionWrap;
