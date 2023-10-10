import { MovingRow } from "../features/TechStack/MovingRow";
import { Heading } from "../ui/Heading";
import { listOfLogos } from "../utils/logos";

export const TechStack = () => {
  return (
    <div className=" pt-28 relative z-10 bg-[#100216]">
      <div className="relative z-10 bg-[#100216] text-white pb-20">
        <div
          className=" border-[#ffffff1c] flex flex-col items-center w-[80%] mx-auto rounded-2xl 
      gap-4 py-10 overflow-hidden bg-gradient-to-b from-[#ffffff10] to-[#ffffff00]"
        >
          <Heading text="Tech Stack" />
          <h3 className="text-[#ffffff96]">The dev tools and apps I use</h3>
          <div className="relative pt-10">
            <MovingRow items={listOfLogos.slice(0, 9)} direction="left" />
            <MovingRow items={listOfLogos.slice(9, 18)} direction="right" />
          </div>
        </div>
      </div>
    </div>
  );
};
