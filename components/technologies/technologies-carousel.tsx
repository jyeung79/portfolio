import React from "react";
import Image from "next/image";
import { technologyList } from "@/constants/tech";

export const TechnologiesCarousel = () => {
  return (
    <>
      <div className="w-full h-full m-auto overflow-hidden relative">
        <div className="animate-loop-scroll flex w-min">
          {technologyList.map((item, index) => (
            <div key={`tech-item-${item.tech}-${index}`} className="w-36 h-24">
              <Image src={item.image} height="96" width="96" alt={item.tech} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
