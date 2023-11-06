import { useEffect, useState } from "react";
import { FaBars, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion"

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
        className={` transition-all duration-200 ${
          isSticky
            ? "fixed top-0 rounded-t-0 shadow-md"
            : "absolute top-8 rounded-t-lg shadow-none "
        } ${isNavOpen ? "h-[310px]" : "h-[64px]"} bg-[#25162c]/50 backdrop-blur-md z-[101]  w-[95%] left-[50%] -translate-x-[50%] rounded-b-lg
          overflow-hidden min-[600px]:h-16 `}>
        <nav
          className={` flex items-center pl-4
    justify-between h-16 pr-8`}
        >
          <a  onClick={()=>setIsNavOpen(false)} 
            href="#hero"
            className="text-3xl italic text-white mx-1 mb-1 transition duration-200 cursor-pointer"
          >
            [<span className="font-extrabold text-4xl line">a</span>]
          </a>
          <ul className="hidden min-[600px]:flex text-[#fff]/70 gap-5 laptop:gap-8 transition duration-200 text-base laptop:text-lg"
           onClick={()=>setIsNavOpen(prev=>!prev)}>
            <li className=" cursor-pointer hover:text-white">
              <a href="#projects">Projects</a>
            </li>
            <li className=" cursor-pointer hover:text-white">
              <a href="#education">Education</a>
            </li>
            <li className=" cursor-pointer hover:text-white">
              <a href="#techs">Tech Stack</a>
            </li>
            <li className=" cursor-pointer hover:text-white">
              <a href="#about">About</a>
            </li>
            <li className=" cursor-pointer hover:text-white">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="gap-7 hidden min-[800px]:flex ">
            <a href="https://www.linkedin.com/in/delchiaroa/" target="_blank">
              <FaLinkedin className="scale-[1.7] text-[#fff]/70 transition duration-200 cursor-pointer hover:text-white" />
            </a>
            <a href="https://github.com/aanddy36" target="_blank">
              <FaGithub className="scale-[1.7] text-[#fff]/70 transition duration-200 cursor-pointer hover:text-white" />
            </a>
            <a
              href="mailto:anchibro@hotmail.com?subject=Let's work together!"
              target="_blank"
            >
              <FaEnvelope className="scale-[1.7] text-[#fff]/70 transition duration-200 cursor-pointer hover:text-white" />
            </a>
          </div>
          <button onClick={()=>setIsNavOpen(prev=>!prev)} className="min-[600px]:hidden">
            <FaBars className="scale-[1.7] text-[#fff]/70 transition duration-200 cursor-pointer hover:text-white" />
          </button>
        </nav>
        <ul className="text-[#fff]/70 text-lg" onClick={()=>setIsNavOpen(false)}>
          <li className="border-t border-[#fff]/30 h-12 w-full">
            <a
              href="#projects"
              className="flex items-center justify-end hover:text-[#fff] h-full cursor-pointer w-[100%] px-6"
            >
              Projects
            </a>
          </li>
          <li className="border-t border-[#fff]/30 h-12 w-full">
            <a
              href="#education"
              className="flex items-center justify-end align-middle hover:text-[#fff] h-full cursor-pointer w-[100%] px-6"
            >
              Education
            </a>
          </li>
          <li className="border-t border-[#fff]/30 h-12 w-full">
            <a
              href="#techs"
              className="flex items-center justify-end align-middle hover:text-[#fff] h-full cursor-pointer w-[100%] px-6"
            >
              Tech Stack
            </a>
          </li>
          <li className="border-t border-[#fff]/30 h-12 w-full">
            <a
              href="#about"
              className="flex items-center justify-end align-middle hover:text-[#fff] h-full cursor-pointer w-[100%] px-6"
            >
              About
            </a>
          </li>
          <li className="border-t border-[#fff]/30 h-12 w-full">
            <a
              href="#contact"
              className="flex items-center justify-end align-middle hover:text-[#fff] h-full cursor-pointer w-[100%] px-6"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
  );
};
