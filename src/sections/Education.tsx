import { Heading } from "../ui/Heading";
import { certificates } from "../utils/certificates";
import { Certificate2 } from "../features/Education/Certificate2";

export const Education = () => {
  return (
    <div className="relative z-10 gap-8 bg-[#100216] flex flex-col items-center mx-auto pb-20 pt-28 text-white">
      <Heading text="Education" />
      {certificates.map((certificate)=><Certificate2 key={certificate.id} {...certificate}/>)}
    </div>
  );
};
