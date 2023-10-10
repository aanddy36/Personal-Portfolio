import { ICertificates } from "../../moduls";
import { HiAcademicCap, HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";

export const Certificate2 = ({
  title,
  url,
  hours,
  academy,
  date,
}: ICertificates) => {
  return (
    <article className="w-[70%] mt-10 flex flex-col gap-2">
      <div className="flex justify-between items-center flex-col gap-4 laptop:flex-row laptop:gap-0">
        <h2 className="text-lg tracking-wide font-bold text-center laptop:text-left">{title}</h2>
        <a href={url} target="_blank">
          <button
            className="bg-[#54c8fa] text-[#100216] rounded-xl font-semibold tracking-wide px-3 py-1 transition 
            text-sm duration-200 hover:bg-[#f6deff] hover:text-[#100216] min-w-[150px]"
          >
            See Certificate
          </button>
        </a>
      </div>
      <div className="tracking-wide font-extralight text-sm flex justify-between text-[#ffffffce]
      flex-col laptop:flex-row mt-2 laptop:mt-0">
        <div className="flex items-center w-full laptop:w-[50%] full:w-[40%] justify-between">
            <div className="flex  items-center gap-2"><HiAcademicCap/> {academy}</div>
            <div className="flex  items-center gap-2"><HiOutlineClock/> {hours} total hours</div>
        </div>
        <div className="flex items-center gap-2 mx-auto laptop:mx-0 mt-3 laptop:mt-0"><HiOutlineCalendar/> Obtained on {date}</div>
      </div>
      <div className="w-full border-white border-t mt-5"></div>
    </article>
  );
};
