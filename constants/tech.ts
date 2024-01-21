import { siteConfig } from "@/config/site";

export interface technologyListItem {
  skillName: string;
  link: string;
  avatarImage?: string;
  avatarName?: string;
  description: string;
  experience: string;
}

export const technologyList: technologyListItem[] = [
  {
    skillName: "react",
    link: siteConfig.tech.react,
    avatarImage: "",
    avatarName: "RE",
    description: "Javascript Framework for building webapps",
    experience: "Used since Jan 2021",
  },
  {
    skillName: "react-native",
    link: siteConfig.tech?.react,
    avatarImage: "",
    avatarName: "RN",
    description: "Mobile Framework for building apps using React Framework",
    experience: "Used since Jan 2021",
  },
  {
    skillName: "expo",
    link: siteConfig.tech?.react,
    avatarImage: "",
    avatarName: "EX",
    description: "Managed React Native Workflow to make building apps easier",
    experience: "Used since Jan 2021",
  },
  {
    skillName: "javascript",
    link: siteConfig.tech.react,
    avatarImage: "",
    avatarName: "JS",
    description: "Javascript Framework for building webapps",
    experience: "Used since Jan 2021",
  },
  {
    skillName: "typescript",
    link: siteConfig.tech.react,
    avatarImage: "",
    avatarName: "TS",
    description: "Javascript Framework for building webapps",
    experience: "Used since Jan 2021",
  },
  {
    skillName: "tailwindcss",
    link: siteConfig.tech.react,
    avatarImage: "",
    avatarName: "TW",
    description: "Javascript Framework for building webapps",
    experience: "Used since Jan 2021",
  },
  {
    skillName: "nodejs",
    link: siteConfig.tech.react,
    avatarImage: "",
    avatarName: "NO",
    description: "Javascript Framework for building webapps",
    experience: "Used since Jan 2021",
  },
  {
    skillName: "postgresql",
    link: siteConfig.tech.react,
    avatarImage: "",
    avatarName: "PS",
    description: "Javascript Framework for building webapps",
    experience: "Used since Jan 2021",
  },
  {
    skillName: "rubyonrails",
    link: siteConfig.tech.react,
    avatarImage: "",
    avatarName: "RR",
    description: "Javascript Framework for building webapps",
    experience: "Used since Jan 2021",
  },
  {
    skillName: "aws",
    link: siteConfig.tech.react,
    avatarImage: "",
    avatarName: "AW",
    description: "Javascript Framework for building webapps",
    experience: "Used since Jan 2021",
  },
];
