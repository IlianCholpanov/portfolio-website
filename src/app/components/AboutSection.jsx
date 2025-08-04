/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const tabContent = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2">
        <li>React</li>
        <li>Next.js</li>
        <li>Supabase</li>
        <li>Redux</li>
        <li>Tailwind</li>
        <li>React Query</li>
        <li>JavaScript</li>
        <li>Git & GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Paisii Hilendarski University of Plovdiv | 2024 - 2028</li>
        <li>Js Web Development - SoftUni Academy | 2022 - 2024</li>
        <li>The Ultimate React Course 2025: React, Redux & More - Udemy</li>
        <li>Build Responsive Real-World Websites with HTML and CSS - Udemy</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>The Ultimate React Course 2025: React, Redux- Udemy</li>
        <li>Build Responsive Real-World Websites with HTML and CSS - Udemy</li>
        <li>JS Applications - SoftUni</li>
        <li>JS Advanced - SoftUni</li>
        <li>Programming Fundamentals with JavaScript- SoftUni</li>
        <li>Programming Basics - SoftUni</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(id) {
    startTransition(() => setTab(id));
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="/images/about-image.gif"
          alt="about image"
          className="rounded-lg"
          width={500}
          height={500}
          loading="lazy"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a web developer dedicated to creating functional and visually
            appealing user experiences. I have a strong foundation in front-end
            development. As a quick learner and team player, I am eager to learn
            and grow in a collaborative environment.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {""}Certifications{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {tabContent.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
