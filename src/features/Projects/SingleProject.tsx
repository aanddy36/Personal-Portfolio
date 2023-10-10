import { useEffect, useRef, useState } from "react";
import { Coordinates, IProjects, ImagesOrder } from "../../moduls";
import { ImageCont } from "./ImageCont";
import { BlurBall } from "../../ui/BlurBall";
import { InfoProject } from "./InfoProject";
import { Modal } from "./Modal";

export const SingleProject = ({ project }: { project: IProjects }) => {

  const ref = useRef<HTMLDivElement | null>(null);
  const [{ offsetX, offsetY }, setOffset] = useState<Coordinates>({
    offsetX: 0,
    offsetY: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [projectImages, setProjectImages] =
    useState<ImagesOrder[]>(project.imagesModal);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      ref.current.style.minHeight = `${width * 0.8}px`;
    }
    const adjustHeight = () => {
      if (ref.current) {
        const width = ref.current.clientWidth;
        ref.current.style.minHeight = `${width * 0.8}px`;
      }
    };
    window.addEventListener("resize", adjustHeight);

    return () => window.removeEventListener("resize", adjustHeight);
  }, []);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;
    setOffset({ offsetX, offsetY });
  }

  return (
    <>
      <div
        className="group relative rounded-lg overflow-hidden p-px mb-8 text-white bg-gradient-to-b 
        from-white/20 to-white/0"
        onMouseMove={handleMove}
        ref={ref}
      >
        <div
          className="flex flex-col rounded-lg h-fit gap-8 laptop:gap-4 p-4 bg-gradient-to-b 
          from-[#1b1021] to-[#100316]"
        >
          <BlurBall offsetX={offsetX} offsetY={offsetY} />
          <ImageCont openModal={() => setIsModalOpen(true)} {...project}/>
          <InfoProject {...project}/>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        projectImages={projectImages}
        setProjectImages={setProjectImages}
        
      />
    </>
  );
};
