import { Fact } from "../features/About/Fact";
import { Heading } from "../ui/Heading";
import { myFacts } from "../utils/facts";

export const About = () => {
  return (
    <div className="relative z-10 bg-[#100216] flex flex-col items-center w-[90%] mx-auto pb-20 pt-28">
      <Heading text="About me" />
      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 mt-5">
        {myFacts.map((fact, index) => (
          <Fact key={index} {...fact} />
        ))}
      </div>
    </div>
  );
};
