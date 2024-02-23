import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { TechnologiesCarousel } from "@/components/technologies/technologies-carousel";
import Image from "next/image";
import { Projects } from "@/components/projects/projects";

export default function IndexPage() {
  return (
    <section className="container flex flex-col relative items-center justify-center">
      <div className="my-4">
        <h1 className="text-7xl font-extrabold leading-tight tracking-tighter md:text-9xl mb-4">
          Jeffery Yeung
        </h1>
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
      <TechnologiesCarousel />
      <div className="flex gap-4 my-4">
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
      {/* Experience Section */}
    </section>
  );
}
