import React from "react";
import { HiMinusCircle } from "react-icons/hi2";
import { ImagesOrder } from "../../moduls";
import { ImageSlider } from "../../ui/ImageSlider";

export const Modal = ({
  isModalOpen,
  setIsModalOpen,
  projectImages,
  setProjectImages,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (data: boolean) => void;
  projectImages: ImagesOrder[];
  setProjectImages: (data: any) => void;
}) => {
  const styles: React.CSSProperties = {
    opacity: isModalOpen ? "1" : "0",
    visibility: isModalOpen ? "visible" : "hidden",
  };

  function nextImage() {
    setProjectImages((prev: ImagesOrder[]) => {
      let newArray = prev.map((image) => {
        switch (image.status) {
          case "active":
            return { ...image, status: "after" };
          case "before":
            return { ...image, status: "active" };
          case "after":
            return { ...image, status: "before" };
          default:
            return image;
        }
      });
      return newArray;
    });
  }
  function previousImage() {
    setProjectImages((prev: ImagesOrder[]) => {
      let newArray = prev.map((image: ImagesOrder) => {
        switch (image.status) {
          case "active":
            return { ...image, status: "before" };
          case "before":
            return { ...image, status: "after" };
          case "after":
            return { ...image, status: "active" };
          default:
            return image;
        }
      });
      return newArray;
    });
  }
  
  return (
    <div
      className="fixed inset-0 bg-black/60 z-[1000] backdrop-blur-sm transition duration-200"
      style={styles}
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className=" w-[95%] tablet:w-[80%] laptop:w-[70%] full:w-[60%] min-[1200px]:w-[50%] fixed top-[50%] 
          left-[50%] translate-x-[-50%] p-2 translate-y-[-50%] z-[102] bg-[#100316] overflow-hidden 
          transition duration-200 rounded-lg shadow-2xl"
        style={{ boxShadow: "0 0 10px 6px #0000006e" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute right-8 top-6 text-[#100316]/50 hover:text-[#100316]/100 scale-[1.7] 
          laptop:scale-[2] transition duration-200 hover:scale-[2] laptop:hover:scale-[2.4] 
          hover:text-[#100316] z-[14]"
        >
          <HiMinusCircle style={{ textShadow: "0 0 10px 6px #0000006e" }} />
        </button>
        <ImageSlider
          projectImages={projectImages}
          previousImage={previousImage}
          nextImage={nextImage}
        />
      </div>
    </div>
  );
};
