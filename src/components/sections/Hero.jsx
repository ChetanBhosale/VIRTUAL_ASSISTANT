import tower from "../../assets/tower_logo_nobg.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.8"
      className="w-full h-screen relative"
    >
      <div className="absolute uppercase top-1/2 leading-none font-['Bebas_Neue'] left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-5">
        <div className="text-right text-[15vw] md:text-[12vw] leading-none">
          <motion.h1
            initial={{ y: "-30%", opacity: "0" }}
            animate={{ y: "0%", opacity: "100%" }}
            transition={{ ease: "linear", duration: 1, delay: 1 }}
            className="flex leading-none items-baseline overflow-hidden"
          >
            <div className="w-[12vw] h-[25vw] ">
              <motion.img
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ ease: "linear", duration: 1.5, delay: 1.5 }}
                src={tower}
                className=" md:relative md:top-6 h-full object-cover"
                alt=""
              />
            </div>
            virtual
          </motion.h1>
          <motion.h1
            initial={{ y: "-30%", opacity: "0" }}
            animate={{ y: "0%", opacity: "100%" }}
            transition={{ ease: "linear", duration: 1, delay: 1 }}
          >
            assistant
          </motion.h1>
        </div>
        <div className="flex h-[41vw] overflow-hidden items-end text-[30vw] leading-[26vw]  ">
          <motion.h1
            initial={{ fontSize: "10px", opacity: "0", color: "#cccc" }}
            animate={{ fontSize: "30vw", opacity: "100%", color: "#b5cf58" }}
            transition={{ ease: "linear", duration: 1, delay: 1 }}
            className="md:relative "
          >
            R
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
