import { DrawerDemo } from "@/components/drawer/drawer";
import React from "react";

export default function ExperiencePage() {
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="md:text-6xl font-bold">About Me</h1>
        <div className="mb-4">
          <h2 className="text-3xl md:text-5xl font-semibold my-4">
            Languages & Technologies
          </h2>
          <ul className="list-disc list-inside">
            <li>
              Languages: JavaScript, Typescript, HTML5, CSS3, Python, Ruby,
              NoSQL, SQL
            </li>
            <li>
              Framework: React, React Native, Node, Express, Redux, Firebase,
              Ruby on Rails
            </li>
            <li>
              Cert./Others: npm, styled-components, Tailwind, REST, GraphQL,
              AWS, AWS Cloud Practitioner
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-3xl md:text-5xl font-semibold my-4">Employment</h2>
          <p>
            <strong>
              Software Engineer - Mobile, Borrowell - Toronto (Remote)
            </strong>
            Aug 2022 - Apr 2023
          </p>
          <p>
            Oversaw all credit builder Mobile UI and Typescript code changes as
            the primary Mobile UI Developer
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-3xl md:text-5xl font-semibold my-4">Education</h2>
          <p>
            <strong>
              Bachelor of Applied Science - Systems Engineering, Simon Fraser
              University
            </strong>
            {`2013 – 2020`}
          </p>
          <p>
            Capstone Project: Emergency Indoor UWB Tracking Systems using Rust,
            HTML, and CSS
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Technical Projects</h3>
          <p>
            <strong>IJN Bible App (2023-Current)</strong>Spaced Repetition
            Flashcard Memorization App for Bible Verses (Expo, React Native,
            NextJS, Supabase Storage/Auth, Solito, tRPC, Postgresql, Turborepo)
          </p>
        </div>
      </div>
    </>
  );
}
