"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "C# / .NET", "Entity Framework", "WebSockets"],
  },
  {
    label: "Databases",
    skills: ["SQL Server", "MongoDB"],
  },
  {
    label: "Desktop",
    skills: ["Windows Forms", "RDLC Reports"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub"],
  },
];

const EXPERIENCE_DATA = [
  {
    role: "Full-Stack Developer",
    company: "ITDA, Cairo",
    period: "Nov 2025 – Present",
    points: [
      "Built RESTful APIs using C# / .NET and SQL Server for a nationwide digital services platform.",
      "Developed and deployed the platform using Next.js and TypeScript, currently serving multiple government offices across Egypt.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Egyptian Military, Cairo",
    period: "Jul 2024 – Sep 2025",
    points: [
      "Served as sole developer for a secure desktop application used in active operations, built with C#, Entity Framework, and SQL Server.",
      "Designed RDLC reports enabling detailed operational analytics for decision-makers.",
      "Managed full lifecycle: development, testing, deployment, and live production support with zero downtime.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Bo-chat, Cairo",
    period: "May 2024 – Present",
    points: [
      "Built and maintained backend APIs for a live social media app on Google Play using Node.js, Express.js, and MongoDB.",
      "Implemented real-time messaging features using WebSockets.",
      "Developed the company's public portfolio website, boosting online presence.",
    ],
  },
];

const TAB_DATA = [
  {
    title: "Tech Stack",
    id: "skills",
    content: (
      <div className="space-y-5">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.label}>
            <p className="text-[#034078] text-sm font-semibold uppercase tracking-wider mb-2">
              {category.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[#1282a2]/30 bg-white text-[#0a1128] rounded-lg px-4 py-2 text-sm font-medium transition-all hover:border-[#1282a2] hover:bg-[#1282a2]/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="space-y-6">
        {EXPERIENCE_DATA.map((job) => (
          <div
            key={job.company}
            className="border-l-2 border-[#1282a2]/40 pl-4"
          >
            <h4 className="text-[#0a1128] font-semibold">
              {job.role} — {job.company}
            </h4>
            <p className="text-[#034078] text-sm mb-2">{job.period}</p>
            <ul className="list-disc list-inside space-y-1 text-[#0a1128]/70 text-sm">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-2">
        <h4 className="text-[#0a1128] font-semibold">
          B.Sc. in Computer Science
        </h4>
        <p className="text-[#034078] text-sm">
          Benha University, Qalyubiah — Jun 2023
        </p>
        <p className="text-[#0a1128]/70">GPA: 3.03 / 4.0</p>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTabContent = TAB_DATA.find((item) => item.id === tab)?.content;

  return (
    <section className="text-[#0a1128]" id="about">
      <div className="md:grid md:grid-cols-2 gap-10 items-center py-12 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        {/* About Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[500px] overflow-hidden rounded-2xl border border-[#0a1128]/10 bg-white shadow-sm">
            <Image
              src="/images/about-image.png"
              width={500}
              height={500}
              alt="Developer workspace"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="mt-8 md:mt-0 text-left flex flex-col">
          <p className="text-[#034078] font-semibold tracking-wider uppercase mb-2">
            Get To Know Me
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1128] mb-5">
            About Me
          </h2>

          <p className="text-[#0a1128]/70 text-base lg:text-lg leading-relaxed max-w-2xl">
            I&apos;m{" "}
            <span className="text-[#0a1128] font-semibold">
              Sameh Elzamly
            </span>
            , a Full-Stack Developer specializing in React.js, Next.js,
            Node.js, and .NET, with experience delivering production-grade
            systems for government, military, and startup sectors.
          </p>

          <p className="text-[#0a1128]/70 text-base lg:text-lg leading-relaxed mt-4 max-w-2xl">
            I work across the full development lifecycle, from creating
            responsive user interfaces to building robust backend APIs and
            designing efficient database solutions — with a proven track
            record of scaling applications and optimizing performance.
          </p>

          {/* Tabs */}
          <div className="flex flex-row justify-start gap-2 mt-8 border-b border-[#0a1128]/10">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Tech Stack
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>

          {/* Active Tab */}
          <div className="mt-6 min-h-[160px]">
            {activeTabContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;