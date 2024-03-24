import { data } from "../../data/service";

const Services = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="py-16 z-10 bg-zinc-800"
    >
      <div>
        <h1 className="py-8 md:py-16 ml-6 md:ml-12 text-[10vw] md:text-[5vw] font-thin tracking-tight text-white">
          Services
        </h1>
        <div className="w-full border-t-[1px] border-zinc-600">
          <div className="py-12 px-16">
            {data.map((ele, index) => (
              <div key={index} className="w-full mb-32">
                <div className="">
                  <h1
                    className={`text-[2vw] tracking-wide flex items-center gap-5 ${
                      index % 2 === 0 ? "text-left" : "text-right"
                    } text-white`}
                  >
                    <div className="w-[1.2vw] h-[1.2vw] bg-[#b5cf58] rounded-full "></div>
                    {ele.Title}
                  </h1>
                </div>
                <div className="flex w-full gap-14 h-[30vw] my-12 mb-20">
                  <div className="w-1/2 pl-12 text-[1.2vw] my-2 text-white">
                    {ele.Responsibilities.map((text, ind) => (
                      <h2
                        className="leading-7 font-light my-3 flex items-center gap-3"
                        key={ind}
                      >
                        <div className="w-3 h-3 rounded-full bg-white "></div>
                        {text}
                      </h2>
                    ))}
                  </div>
                  <div className="w-1/2 h-full">
                    <img
                      className="w-full h-full object-cover rounded-3xl"
                      src={ele.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-b-2 border-zinc-600 py-12 flex justify-center items-center">
        <button className="py-6 px-8 hover:bg-zinc-600 hover:text-white transition-all duration-500 bg-zinc-300 text-black text-[1.5vw] uppercase text-[Varela_Round] tracking-tighter rounded-3xl">
          Get service today
        </button>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default Services;
