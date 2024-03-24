import { aboutData } from "../../data/about";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.6"
      className="section-about w-full p-6 md:p-20 text-black bg-[#b5cf58]  rounded-tl-3xl rounded-tr-3xl z-10"
    >
      <h1 className="text-[5vw] md:text-[4vw] mt-12 leading-[6vw] md:leading-[3.5vw]">
        Unlock the potential of your business with a virtual real estate agent -
        guiding you through the digital landscape, expanding your reach, and
        cultivating growth beyond boundaries.
      </h1>
      <div className="w-full flex flex-col md:flex-row border-t-[1px] pt-20 mt-20 border-[#59662a] text-zinc-700">
        <div className="md:w-1/2">
          <h2 className="md:text-[1.5vw] text-[6vw]">What you can expect:</h2>
        </div>
        <div className="md:w-1/2 flex flex-col items-start gap-8 mt-12 md:mt-0 md:text-[1.2vw] font-normal">
          <motion.h2>
            As your virtual assistant, I specialize in streamlining tasks,
            freeing up your time for more important matters. From managing
            schedules to handling emails, I ensure efficiency in your daily
            operations. Expect a smoother workflow and less administrative
            burden with my support.
          </motion.h2>
          <motion.h2>
            With a wealth of knowledge at my fingertips, I provide quick access
            to accurate information on diverse topics. Whether {"it's"} research
            assistance or fact-checking, I deliver reliable insights tailored to
            your needs. Count on me for timely and precise responses, enhancing
            your decision-making process.
          </motion.h2>
          <button className="flex gap-10 justify-center border-2 items-center border-zinc-700 px-10 py-3 text-md rounded-full hover:bg-zinc-700 hover:text-white transition-all duration-500">
            Get Service Today
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5 border-t-[1px] pt-20 mt-20 border-[#59662a]">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-[5vw]">Our approach:</h1>

          <div className="my-4 mt-24 md:w-[80%]">
            {aboutData.map((ele, index) => (
              <motion.div
                className="aboutListItem ml-2 my-5 text-zinc-700"
                key={index}
              >
                <h1 className="capitalize font-['Varela Round'] flex gap-4 justify-start items-center text-[5vw] md:text-[1.5vw]">
                  <div className="w-5 h-5 opacity-40 bg-[#59662a] rounded-full "></div>
                  {ele.title}
                </h1>
                <p className="ml-8 mt-2 mb-12 md:text-[1vw]">
                  {ele.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 h-[40vh] md:h-[90vh] rounded-3xl overflow-hidden">
          <img
            className="w-full h-full rounded-3xl hover:scale-105 object-cover transition-all duration-500"
            src="https://images.unsplash.com/photo-1579762593175-20226054cad0?q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
