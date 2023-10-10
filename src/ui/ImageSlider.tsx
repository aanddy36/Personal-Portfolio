import {
    HiOutlineChevronDoubleLeft,
    HiOutlineChevronDoubleRight,
  } from "react-icons/hi2";
import { ImagesOrder } from '../moduls';

export const ImageSlider = ({
    projectImages,
    nextImage,
    previousImage,
  }: {
    projectImages: ImagesOrder[];
    nextImage: ()=>void,
    previousImage: ()=>void,
  }) => {
  return (
    <div className="relative rounded-lg overflow-hidden ">
          <div className="peer absolute inset-0 z-[13]"></div>
          {projectImages.map((image) => (
            <img
              src={image.image}
              key={image.position}
              loading="eager"
              className={`w-full rounded-lg transition duration-[200ms] ${image.status}`}
            />
          ))}
          <button
            className="absolute z-[14] text-white bg-[#100316] top-[50%] translate-y-[-50%]
             scale-[1.2] tablet:scale-[1.4] laptop:scale-[1.7] full:scale-[2] p-2 rounded-full right-5 opacity-0 transition duration-300  peer-hover:opacity-50
            hover:opacity-100 active:scale-[2.2]"
            onClick={nextImage}
          >
            <HiOutlineChevronDoubleRight />
          </button>
          <button
            className="absolute z-[14] text-white bg-[#100316] top-[50%] translate-y-[-50%]
             scale-[1.2] tablet:scale-[1.4] laptop:scale-[1.7] full:scale-[2] p-2 rounded-full left-5 opacity-0 transition duration-300  peer-hover:opacity-50
            hover:opacity-100 active:scale-[2.2]"
            onClick={previousImage}
          >
            <HiOutlineChevronDoubleLeft />
          </button>
        </div>
  )
}
