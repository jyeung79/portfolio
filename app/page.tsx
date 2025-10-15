import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { TechnologiesCarousel } from "@/components/technologies/technologies-carousel";
import Image from "next/image";
import { Projects } from "@/components/projects/projects";
import ProfileImage from "/public/profile/profileAi.png";

export default function IndexPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
      <div className="animate-glow animate-fade-left hidden h-px md:block" />
      <h1 className="duration-3000 text-edge-outline animate-title z-10 h-24 cursor-default whitespace-nowrap bg-black dark:bg-white text-black dark:text-white bg-clip-text text-4xl text-transparent sm:text-6xl md:h-48 md:text-9xl">
        Jeffery Yeung
      </h1>
      <div className="animate-fade-in my-16 text-center">
        <h2 className="mb-4 font-bold md:text-2xl">
          Software Engineer / Mobile Engineer - React Native
        </h2>
        <div className="w-76 flex flex-col gap-8 sm:flex-row">
          <Image
            src={ProfileImage}
            width={300}
            height={300}
            quality={90}
            alt="profile-image"
            className={"rounded-3xl"}
          />
          <div className="max-w-[400px] px-8 py-4">
            <p className="text-muted-foreground dark:text-slate-200 text-lg">
              {`Mobile Software Engineer with over 3+ years’ experience working with
            Mobile and Full Stack development across Fitness & Fintech SaaS
            Startups.`}
            </p>
            <p className=" text-muted-foreground dark:text-slate-200 pt-8 text-lg">
              {`Highly dedicated and proactive in leading software
            projects or rising up to solve the organization’s pressing needs or
            problems.`}
            </p>
          </div>
        </div>
      </div>
      {/** All technologies List */}
      <div className="animate-fade-in container flex flex-col items-center justify-center">
        <TechnologiesCarousel />
        <div className="mt-4 space-x-4">
          <Link
            href={siteConfig.links.resume}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Resume
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
            className={buttonVariants({ variant: "tertiary" })}
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
