import { useState } from "react";
import mainLogo from "../../assets/logo_nobg.png";
import { RiOpenaiFill } from "react-icons/ri";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className=" z-[999] w-full py-10 px-12 font-semibold leading-20 text-xl fixed ">
      <div className="flex justify-between items-center">
        <img src={mainLogo} className="w-16" alt="" />
        <div className="md:hidden">
          <RiOpenaiFill
            className="text-5xl cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>
        <div className="md:flex font-light gap-10 text-['Varela_Round'] hidden">
          {["Home", "About", "Services", "Contact"].map((ele, index) => (
            <div
              key={index}
              className={`cursor-pointer ${index === 3 ? "ml-20" : ""}`}
            >
              {ele}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 md:hidden font-light gap-10 text-['Varela_Round'] capitalize">
        {["home", "About", "Services", "Contact"].map((ele, index) => (
          <div className={`${!show && "hidden"}`} key={index}>
            {ele}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
