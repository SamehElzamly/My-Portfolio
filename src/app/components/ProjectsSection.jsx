"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ITDA Digital Services Platform",
    description:
      "Full-stack e-government platform delivering digital services across multiple national offices in Egypt. Built with Next.js, TypeScript, C#/.NET, and SQL Server.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
        previewUrl:
      "https://sp.itda.gov.eg:8082",
  },
  {
    id: 2,
    title: "Cairo Chamber of Commerce — POS APIs",
    description:
      "Secure, scalable REST APIs handling 10,000+ monthly requests at 99% reliability. Optimized SQL Server queries, improving data retrieval performance by 40%.",
    image: "/images/projects/2.png",
    tag: ["All", "Backend"],
    isPrivate: true,
  },
  {
    id: 3,
    title: "Bo-chat Mobile App Backend",
    description:
      "REST APIs and real-time messaging (WebSockets) powering a live social media app on Android/iOS, built with Node.js, Express.js, and MongoDB.",
    image: "/images/projects/3.png",
    tag: ["All", "Backend", "Mobile"],
    previewUrl:
      "https://play.google.com/store/apps/details?id=com.pandaoracle.bochat",
  },
  {
    id: 4,
    title: "Bo-chat Portfolio Website",
    description:
      "Public front-end website built for Bo-chat with HTML5, CSS3, and JavaScript, boosting the company's online presence.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    previewUrl: "https://bo-eg.online/",
  },
  {
    id: 5,
    title: "Egyptian Military Desktop App",
    description:
      "Secure desktop application used in active operations, built solo with C#, Entity Framework, SQL Server, and RDLC reports for operational analytics.",
    image: "/images/projects/5.png",
    tag: ["All", "Desktop"],
    isPrivate: true,
  },
];

const tags = ["All", "Web", "Backend", "Mobile", "Desktop"];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-[#0a1128] mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        {tags.map((t) => (
          <ProjectTag
            key={t}
            onClick={handleTagChange}
            name={t}
            isSelected={tag === t}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              isPrivate={project.isPrivate}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;