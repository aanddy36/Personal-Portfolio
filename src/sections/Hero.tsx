import { useRef, useState, useEffect } from "react";
import { PersonalCard } from "../features/Hero/PersonalCard";
import { FaEnvelope } from "react-icons/fa";
import DownloadButton from "../ui/DownloadButton";

export const Hero = () => {
  const [{ rotationX, rotationY }, setRotation] = useState({
    rotationX: 0,
    rotationY: 0,
  });
  const cardCont = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const rotationEffect = (e: MouseEvent): void => {
      const { width } = document.body.getBoundingClientRect();
      const { height } = cardCont.current!.getBoundingClientRect();
      const { pageX, pageY } = e;
      const rotationX = ((pageY - height / 2) / height) * -12;
      const rotationY = ((pageX - width / 2) / width) * 12;
      setRotation({ rotationX, rotationY });
    };
    window.addEventListener("mousemove", rotationEffect);

    return () => window.removeEventListener("mousemove", rotationEffect);
  }, []);
  return (
    <div
      className="grid relative h-[820px] place-items-center tablet:h-[880px] laptop:h-[650px]"
      ref={cardCont}
    >
      <div
        className="mx-0 mb-8 mt-28 flex flex-col items-center h-full justify-center gap-8 laptop:gap-[60px]
      laptop:m-0 laptop:mt-24"
      >
        <PersonalCard rotationX={rotationX} rotationY={rotationY} />
        <div className="w-full flex justify-center gap-2 tablet:gap-[10%]">
          <a href="#contact">
            <button
              className="h-10 mt-8 text-sm tablet:text-base font-bold rounded-xl cursor-pointer py-0 px-4 relative 
              flex items-center gap-4 border-2 transition-all duration-200 border-[#afafaf15] bg-[#0e0213]
               text-[#c5c5c5] hover:text-[#0e0213] hover:scale-[1.1] hover:bg-[#c0e0f3] 
              tablet:h-11 tablet:mt-0 laptop:text-lg laptop:px-8 laptop:h-[50px]"
            >
              <FaEnvelope /> Contact Me
            </button>
          </a>
          <DownloadButton />
        </div>
      </div>
    </div>
  );
};
