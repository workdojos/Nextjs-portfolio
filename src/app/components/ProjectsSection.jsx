"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This is the site right here.  Built with the latest open-source tech including Next.js.",
    image: "https://portfolio.admins.live/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://portfolio.admins.live",
    previewUrl: "/images/1.png",
  },
  {
    id: 2,
    title: "Virtual Tour Website",
    description: "A Viator affiliate site built with Wordpress that includes 1000+ curated virtual tours from all over the world and links to Viator tours in every country.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Travel"],
    gitUrl: "https://traveler.town",
    previewUrl: "https://portfolio.admins.live/images/projects/2.png",
  },
  {
    id: 3,
    title: "Open-source Dashboards",
    description: "100+ individual web app dashboards embedded into a single dashboard.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://og.admins.live",
    previewUrl: "https://portfolio.admins.live/images/projects/3.png",
  },
  {
    id: 4,
    title: "Workmates.Live Hiring Hives",
    description: "100+ hiring hubs or hives facilitating community and collaboration for job seekers.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://workmates.live/marketplace",
    previewUrl: "https://portfolio.admins.live/images/projects/4.png",
  },
  {
    id: 5,
    title: "Microsoft:  Hardware-as-a-Service",
    description: "Counterpart to the Surface Membership program, I worked with a small team agency-side to bring HaaS to life for OEM partners around the world.",
    image: "/images/projects/5.png",
    tag: ["All", "Retail", "SaaS", "HaaS"],
    gitUrl: "https://webjedi.live/microsoft/",
    previewUrl: "https://portfolio.admins.live/images/projects/5.png",
  },
  {
    id: 6,
    title: "FedEx:  Largest Digital Transformation to Date",
    description: "Starting at PI-0 and the launch of the FedEx API Factory.",
    image: "/images/projects/6.png",
    tag: ["All", "Agile"],
    gitUrl: "https://webjedi.live/fedex/",
    previewUrl: "https://portfolio.admins.live/images/projects/6.png",
  },
];

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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="HaaS"
          isSelected={tag === "HaaS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="SaaS"
          isSelected={tag === "SaaS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Retail"
          isSelected={tag === "Retail"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
