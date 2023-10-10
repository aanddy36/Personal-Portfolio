import { ILogos } from "../../moduls";

export const SingleTech = ({ logo, clas, name }: ILogos) => {
  
  return (
    <div className=" flex flex-col items-center min-h-[100px] laptop:min-h-[130px] gap-1 laptop:gap-3">
      <img src={logo} className={`max-w-[50px] ${clas}`} />
      <span className="text-xs tablet:text-sm laptop:text-base text-center font-light tracking-wider text-[#ffffff96]">
        {name}
      </span>
    </div>
  );
};
