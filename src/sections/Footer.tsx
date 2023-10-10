export const Footer = () => {
  return (
    <div className="relative z-10 bg-[#100216] text-white border-t border-t-white/20 flex flex-col
    items-center gap-20 py-10">
      <div className="flex items-center w-[80%] tablet:w-[70%] justify-between mx-auto">
        <div className="flex flex-col gap-5">
          <span className="text-6xl italic mx-1 mb-1">
            [<span className="font-extrabold text-7xl">a</span>]
          </span>
          <span className="opacity-50">Thanks for stopping by!</span>
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-extrabold tracking-wider text-xl">Social</span>
          <ul className="flex flex-col gap-4">
            <li className="opacity-50 transition duration-200 hover:opacity-100">
              <a href="https://www.linkedin.com/in/delchiaroa/" target="_blank" className="cursor-pointer">Linkedin</a>
            </li>
            <li className="opacity-50 transition duration-200 hover:opacity-100">
              <a href="https://github.com/aanddy36" target="_blank" className="cursor-pointer">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <span className="opacity-50">
        2023 Andrés Del Chiaro. All Rights Reserved.
      </span>
    </div>
  );
};
