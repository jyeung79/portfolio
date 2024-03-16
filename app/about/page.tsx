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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold tracking-wider md:text-6xl">
        About Me
      </h1>
      <h2>Work in Progress ...</h2>
      <div>
        <h3>{`Here's a pic of a cat`}</h3>
        <Image
          src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={256}
          height={128}
          layout="responsive"
          alt="cute cat"
        />
        <p>
          Photo by{" "}
          <Link
            href="https://unsplash.com/@alvannee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="text-blue-500"
          >
            Alvan Nee
          </Link>
          {" on "}
          <Link
            href="https://unsplash.com/photos/white-and-brown-long-fur-cat-ZCHj_2lJP00?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="text-blue-500"
          >
            Unsplash
          </Link>
        </p>
      </div>
    </div>
  );
}
