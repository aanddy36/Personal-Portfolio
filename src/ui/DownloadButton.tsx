import { FaCloudDownloadAlt } from "react-icons/fa";

function DownloadButton() {
  const fileUrl = "/src/utils/andres-del-chiaro.pdf";

  const handleDownloadClick = () => {
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "andres-del-chiaro.pdf";
    anchor.click();
    anchor.remove();
  };

  return (
    <div>
      <button
        className="h-10 mt-8 text-sm tablet:text-base font-bold rounded-xl cursor-pointer py-0 px-4 
        relative flex items-center gap-4 border-2 transition-all duration-200 border-[#100415] text-[#100415] 
        bg-[#39a9eb] hover:scale-[1.1] hover:bg-[#c0e0f3] tablet:h-11 tablet:mt-0 laptop:text-lg 
        laptop:px-8 laptop:h-[50px] z-[100]"
        onClick={handleDownloadClick}
      >
        <FaCloudDownloadAlt /> Download CV
      </button>
    </div>
  );
}

export default DownloadButton;
