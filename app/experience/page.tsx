import { DrawerDemo } from "@/components/drawer/drawer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function ExperiencePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold tracking-wider md:text-6xl">
        Experience
      </h1>
      <div>
        <h2 className="my-4 text-xl font-semibold tracking-wide md:text-4xl">
          Professional Experience
        </h2>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="grid grid-cols-4 gap-4">
              <Image
                src="/companies/Borrowell.png"
                width={32}
                height={32}
                layout="responsive"
                alt="Borrowell Logo"
                className="col-span-1 place-self-center"
              />
              <div className="col-span-3">
                <CardTitle className="text-2xl font-light md:text-3xl">
                  Software Engineer - Mobile
                </CardTitle>
                <h3 className="text-lg text-slate-200">
                  Borrowell - Toronto (Remote)
                </h3>
                <p className="text-slate-400">Aug 2022 - Apr 2023</p>
              </div>
            </CardHeader>
            <CardContent className="gap-2">
              <p className="tracking-wide">
                Oversaw all credit builder Mobile UI and Typescript code changes
                as the primary Mobile UI Developer
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="grid grid-cols-4 gap-4">
              <Image
                src="/companies/Borrowell.png"
                width={32}
                height={32}
                layout="responsive"
                alt="Borrowell Logo"
                className="col-span-1 place-self-center"
              />
              <div className="col-span-3">
                <CardTitle className="text-xl font-light md:text-3xl">
                  Software Engineer I / II
                </CardTitle>
                <h3 className="text-lg text-slate-200">
                  Kora - Toronto (Remote)
                </h3>
                <p className="text-slate-400">May 2021 - Mar 2022</p>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <p className="tracking-wide">
                Led as Lead Software Developer for releasing KoraCard Debit Card
                on both Frontend and Backend
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="grid grid-cols-4 gap-4">
              <Image
                src="/companies/Borrowell.png"
                width={32}
                height={32}
                layout="responsive"
                alt="Borrowell Logo"
                className="col-span-1 place-self-center"
              />
              <div className="col-span-3">
                <CardTitle className="text-xl font-light md:text-3xl">
                  Software Engineer Intern
                </CardTitle>
                <h3 className="text-lg text-slate-200">
                  Kora - Toronto (Remote)
                </h3>
                <p className="text-slate-400">Jan 2021 – Apr 2021</p>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <p className="tracking-wide">
                Implemented mobile notifications through Google Firebase using
                Node Microservices
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <h2 className="my-4 text-xl font-semibold tracking-wide md:text-4xl">
          Skills
        </h2>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-2">
            <CardHeader>
              <CardTitle className="text-2xl font-light md:text-4xl">
                Languages & Technologies
              </CardTitle>
              <CardDescription>
                Most Commonly Used Programming Languages
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <p className="tracking-wide">
                JavaScript, Typescript, HTML5, CSS3, Python, Ruby, NoSQL, SQL
              </p>
            </CardContent>
          </Card>
          <Card className="p-2">
            <CardHeader>
              <CardTitle className="text-2xl font-light md:text-4xl">
                Frameworks & Technologies
              </CardTitle>
              <CardDescription>Most Commonly Used Technologies</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <p className="tracking-wide">
                React, React Native, Node, Express, Redux, Firebase, Ruby on
                Rails
              </p>
            </CardContent>
          </Card>
          <Card className="p-2">
            <CardHeader>
              <CardTitle className="text-2xl font-light md:text-4xl">
                Certifications & Others
              </CardTitle>
              <CardDescription>
                Most Commonly Used Programming Languages
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <p className="tracking-wide">
                npm, styled-components, Tailwind, REST, GraphQL, AWS, AWS Cloud
                Practitioner
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <h2 className="my-4 text-xl font-semibold tracking-wide md:text-4xl">
          Education
        </h2>
        <div className="grid grid-cols-1 items-start">
          <Card className="p-2">
            <CardHeader>
              <CardTitle className="text-xl font-light md:text-3xl">
                Bachelor of Applied Science - Systems Engineering
              </CardTitle>
              <h3 className="text-lg font-semibold md:text-2xl">
                Simon Fraser University
              </h3>
            </CardHeader>
            <CardContent className="grid gap-2">
              <p className="tracking-wide">
                Capstone Project: Emergency Indoor UWB Tracking Systems using
                Rust, HTML, and CSS
              </p>
              <p className="tracking-wide">
                Coursework: Computer Architecture C++ Programming; Data
                Structures & Algorithms; Programming Languages
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
