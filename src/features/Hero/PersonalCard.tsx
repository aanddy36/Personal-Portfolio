import pp from "../../utils/cv-bg.png";
import { CardSection } from "./CardSection";
import { GithubCard } from "./GithubCard";

interface IAngles {
  rotationX: number;
  rotationY: number;
}

export const PersonalCard = ({ rotationX, rotationY }: IAngles) => {
  const coloredName = {
    background: "linear-gradient(130deg,#be1cfa 20%, #54c8fa)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  };
  return (
    <div
      className="relative grid place-items-center border-2 border-[#5b3ff850] full:h-[380px]
      full:w-[780px] w-[320px] h-[600px] rounded-lg bg-[#5b3ff81e] text-white transition-dimensions 
      duration-200 shadow-sm tablet:w-[400px] tablet:h-[650px] laptop:w-[720px] laptop:h-[360px]"
      style={{
        transform: `perspective(500px) rotateX(${rotationX < -12 ? -12 : rotationX}deg) rotateY(${rotationY}deg)`,
      }}
    >
      <div className="w-[95%] h-[97%] border-4 border-[#5b3ff8] rounded-lg backdrop-blur-sm laptop:h-[90%]">
        <CardSection />
        <GithubCard />
        <img loading="lazy"
          src={pp}
          className="rounded-full top-[160px] left-[50%] w-[180px] -translate-x-[50%] shadow-pp tablet:top-[180px]
           tablet:w-[200px] absolute laptop:top-[100px] laptop:left-[60px] laptop:translate-x-0"
          style={{
            background:
              "radial-gradient(circle, rgba(61,224,230,1) 17%, rgba(41,154,179,1) 60%, rgba(22,109,162,1) 100%)",
          }}
        />
        <h2
          className="absolute text-center w-full text-[38px] leading-tight left-[0%] top-[360px] tablet:top-[390px] font-[600] 
          laptop:top-[135px] laptop:left-[42%] laptop:text-[42px] laptop:w-auto full:text-5xl full:left-[39%]"
          style={coloredName}
        >
          Andrés Del Chiaro
        </h2>
        <h3 className="text-[18px] w-full text-center absolute top-[460px] left-[0%] font-[600] tablet:top[450px] 
        tablet:text-xl laptop:w-auto laptop:top-[195px] laptop:left-[40%] laptop:text-3xl">
          Frontend Developer | React
        </h3>
        <h4 className="absolute bottom-[15px] right-5 text-sm text-[#afafaf] font-[700] tablet:text-lg">
          Making Web Development Fun
        </h4>
      </div>
    </div>
  );
};
