import React from "react";
import { SkillHoverCard } from "@/components/skill-hover-card";
import { siteConfig } from "@/config/site";
import { technologyList } from "@/constants/tech";

export const Skills: React.FC = () => {
  return (
    <div className="flex">
      {technologyList.map((value, index) => (
        <SkillHoverCard
          key={`skills-tech-${index}`}
          skillName={value?.skillName}
          link={value?.link}
          avatarImage={value?.avatarImage}
          avatarName={value?.avatarName}
          description={value?.description}
          experience={value?.experience}
        />
      ))}
    </div>
  );
};
