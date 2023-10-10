import { HiArrowUpRight } from "react-icons/hi2";
import { IProjects } from "../../moduls";

export const InfoProject = ({
  title,
  description,
  url,
}: IProjects) => {
  return (
    <div className="relative h-full flex flex-col flex-1 gap-5 laptop:gap-3">
      <div className="relative flex justify-between items-start ">
        <h1 className="text-[#fff] text-lg font-bold tracking-wide">{title}</h1>
        <a href={url} target="_blank">
          <button
            className="flex items-center px-4 py-1 font-medium text-md rounded-full 
                gap-3 bg-transparent border transition duration-300 border-white/20 hover:scale-[1.05]
                hover:bg-white hover:text-[#100316]"
          >
            <HiArrowUpRight className="ml-[2px]"/>
            <span className="text-sm tablet:text-base">Visit Web</span>
          </button>
        </a>
      </div>
      <span className="text-sm text-white/50 text-left grow h-[100%]">
        {description}
      </span>
    </div>
  );
};
