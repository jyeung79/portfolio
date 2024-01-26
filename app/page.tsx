import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skills } from "@/components/technologies/skill-section";
import { TechnologiesCarousel } from "@/components/technologies/technologies-carousel";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          Jeffery Yeung
        </h1>
        <h2 className="font-bold md:text-xl">
          Software Engineer / Mobile Engineer - React Native
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      {/** All technologies List */}
      <TechnologiesCarousel />
      {/* <Skills /> */}
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
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
    </section>
  );
}
