import { FaGithub } from "react-icons/fa";
import { listOfLogos } from "../../utils/logos";

export const ImageCont = ({
  githubRepo,
  portrait,
  technologies,
  openModal,
}: {
  githubRepo: string;
  portrait: string;
  technologies: string[];
  openModal: () => void;
}) => {
  const logosList = listOfLogos.filter((logoObject) =>
    technologies.includes(logoObject.name)
  );

  return (
    <div className="relative cursor-pointer overflow-hidden rounded-md">
      <div
        className="absolute z-10 inset-0 transition duration-200 bg-black/60 opacity-0 rounded-md
          grid place-content-center gap-6 hover:opacity-100 hover:backdrop-blur-sm"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-1 tablet:gap-6 h-full">
          <div className="flex gap-3 tablet:gap-10 bg-transparent">
            <button
              className="w-[100px] px-5 py-1 bg-white text-black text-extralight font-medium laptop:text-base 
              tablet:text-base text-[14px] rounded-3xl tablet:py-2 transition duration-200 hover:scale-[1.2]"
              onClick={openModal}
            >
              Preview
            </button>
            <a href={githubRepo} target="_blank">
              <button
                className="w-[100px] px-5 py-1 text-extralight bg-[#100216] laptop:text-base tablet:text-base
                 text-white flex items-center gap-3 tablet:py-2 text-[14px] rounded-3xl transition 
                  duration-200 hover:scale-[1.2]"
              >
                Code
                <FaGithub className="scale-[2]" />
              </button>
            </a>
          </div>
          <div
            className="pt-2 laptop:pt-4 px-2 flex justify-center items-center gap-y-[2px] gap-x-2 tablet:gap-x-4 laptop:gap-6 full:gap-x-8
             text-white flex-wrap"
          >
            {logosList.map((logo, index) => (
              <img
                key={index}
                src={logo.logo}
                className={`max-w-[40px] ${logo.clas}`}
              />
            ))}
          </div>
        </div>
      </div>
      <img src={portrait} className="relative rounded-md object-contain" />
    </div>
  );
};
