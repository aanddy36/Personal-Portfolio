import { FaGithub } from "react-icons/fa";
export const GithubCard = () => {
  return (
    <div
      className="font-github absolute w-[200px] gap-[1.5rem] pl-8 text-xl top-0 right-0 h-[65px] font-bold flex 
    items-center justify-center bg-[#5b3ff838] tablet:gap-8 tablet:pl-10 tablet:text-[23px] tablet:w-[250px]"
      style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 30% 100%)" }}
    >
      <FaGithub className="scale-[2.5] pl-[0.5rem]" />
      <span>aanddy36</span>
    </div>
  );
};
