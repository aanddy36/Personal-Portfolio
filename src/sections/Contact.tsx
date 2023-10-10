import { Heading } from "../ui/Heading";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

export const Contact = () => {
  return (
    <div className="relative z-10 bg-[#100216] flex flex-col items-center py-28 pb-20 gap-6 w-[80%] mx-auto">
      <Heading text="Contact" />
      <h3 className="text-[#ffffff96] text-center">
        Don't doubt about contacting me to discuss how can I help your team!
      </h3>
      <div className="text-[#ffffff96] flex w-full justify-center gap-[120px] tablet:gap-[200px] mt-20">
        <a href="https://www.linkedin.com/in/delchiaroa/" target="_blank" className="hover:scale-[1.2] cursor-pointer transition duration-200"><FaLinkedin className="scale-[5] tablet:scale-[6] laptop:scale-[7]"/></a>
        <a href="mailto:anchibro@hotmail.com?subject=Let's work together!" target="_blank" className="hover:scale-[1.2] cursor-pointer transition duration-200"><FaEnvelope className="scale-[5] tablet:scale-[6] laptop:scale-[7]"/></a>
      </div>
    </div>
  );
};
