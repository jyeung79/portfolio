import { DrawerDemo } from "@/components/drawer/drawer";
import Particles from "@/components/particles";
import { TechnologiesCarousel } from "@/components/technologies/technologies-carousel";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="hidden h-px animate-glow md:block animate-fade-left" />
      <h1 className="z-10 h-24 md:h-48 text-4xl text-transparent duration-3000 bg-white cursor-default text-edge-outline animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Jeffery Yeung
      </h1>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="font-bold md:text-xl mb-4">
          Software Engineer / Mobile Engineer - React Native
        </h2>
        <div className="flex sm:flex-row w-76 gap-8 flex-col">
          <Image
            src="/profile/profile5.jpg"
            width={300}
            height={300}
            quality={90}
            alt="profile-image"
            className={"rounded-3xl"}
          />
          <div className="max-w-[400px] px-8 py-4">
            <p className="text-lg text-muted-foreground">
              {`Mobile Software Engineer with over 2 years’ experience working with
            Mobile and Full Stack development across multiple Fintech Saas
            Startups.`}
            </p>
            <p className=" text-lg text-muted-foreground pt-8">
              {`Highly dedicated and proactive in leading software
            projects or rising up to solve the organization’s pressing needs or
            problems.`}
            </p>
          </div>
        </div>
      </div>
      {/** All technologies List */}
      <div className="container flex flex-col animate-fade-in justify-center items-center">
        <TechnologiesCarousel />
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
      </div>
    </div>
  );
}
