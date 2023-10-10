import { ICertificates } from "../../moduls";

export const Certificate = ({
  title,
  url,
  hours,
  academy,
  date,
}: ICertificates) => {
  return (
    <article className="w-[80%] flex gap-5 mt-14">
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-full bg-white p-1"></div>
        <div className="h-full w-0 border border-white"></div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl tablet:text-3xl font-bold text-[#54c8fa] mb-4">
          {title}
        </h2>
        <h3 className="italic text-lg">
          Certificate obtained on
          <span className="text-[#be1cfa] ml-1 not-italic text-xl font-semibold">
            {" "}
            {date}
          </span>
        </h3>
        <h3 className="text-lg">
          Done in <span className="text-xl font-extrabold"> {academy}</span>
        </h3>
        <h3>{hours} total hours</h3>
        <a href={url} target="_blank">
          <button
            className="bg-[#be1cfa] rounded-md font-semibold tracking-wide px-3 py-1 mt-3 text-lg 
          transition duration-200 hover:bg-[#f6deff] hover:text-[#100216]"
          >
            See Certificate
          </button>
        </a>
      </div>
    </article>
  );
};
