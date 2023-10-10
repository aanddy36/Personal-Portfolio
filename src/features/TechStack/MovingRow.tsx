import React, {useEffect, useState} from "react";
import { SingleTech } from "./SingleTech";
import { ILogos } from "../../moduls";

export const MovingRow = ({items,direction}:{items:ILogos[],direction:"left" | "right"}) => {
    const [vars, setVars] = useState({
        movement: "-100%",
        position: "left"
    })
    useEffect(()=>{
        let newVars = {
            movement: direction === "left" ? "-100%" : "100%",
            position: direction
        }
        setVars(newVars)
    },[direction])

  return (
    <div className="flex relative" style={{ [vars.position]: "25%"}}>
      <div
        className="flex items-center gap-14 px-7 move"
        style={{ "--direction": vars.movement } as React.CSSProperties}
      >
        {items.map((logo, index) => (
          <SingleTech key={index} {...logo} />
        ))}
      </div>
      <div
        className="flex items-center gap-14 px-7 move"
        style={{ "--direction": vars.movement } as React.CSSProperties}
      >
        {items.map((logo, index) => (
          <SingleTech key={index} {...logo} />
        ))}
      </div>
    </div>
  );
};
