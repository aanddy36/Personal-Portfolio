import reactLogo from '../../assets/react.svg'
import { FaMapMarkerAlt } from "react-icons/fa";

export const CardSection = () => {
  return (
    <div className="absolute w-full gap-[1.4em] justify-center text-sm left-[50%] top-[90px] flex 
    -translate-x-[50%] items-center font-bold tablet:top-[100px] tablet:text-[16px] tablet:gap-8 
    laptop:top-[30px] laptop:left-10 laptop:translate-x-0 laptop:w-fit ">
      <img src={reactLogo} className='scale-[1.3] tablet:scale-[1.7]'/>
      <div className='flex items-center gap-[0.3rem] tablet:gap-[0.8rem]'>
        <FaMapMarkerAlt className="scale-[1.3] text-[#4e62d8]"/>
        <span className='text-[#d4d4d4]'>Barranquilla, Colombia</span>
      </div>
    </div>
  );
};
