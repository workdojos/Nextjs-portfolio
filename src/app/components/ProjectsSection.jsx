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
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://jay.workmates.live",
    previewUrl: "/images/1.png",
  },
  {
    id: 2,
    title: "Virtual Tour Website",
    description: "A Viator affiliate site built with Wordpress that includes 1000+ curated virtual tours from all over the world and links to Viator tours in every country.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Travel"],
    gitUrl: "https://travelagent.live",
    previewUrl: "/images/projects/2.png",
  },
  {
    id: 3,
    title: "Dashboards",
    description: "100+ individual web apps embedded into a single dashboard.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://dashboards.workdojos.com",
    previewUrl: "/images/projects/3.png",
  },
  {
    id: 4,
    title: "Workmates.Live Hives",
    description: "Community and collaboration for job seekers.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://workmates.live/marketplace",
    previewUrl: "/images/projects/4.png",
  },
  {
    id: 5,
    title: "Microsoft:  Hardware-as-a-Service",
    description: "Counterpart to the Surface Membership program, I worked with a small team agency-side to bring HaaS to life for OEM partners around the world.",
    image: "/images/projects/5.png",
    tag: ["All", "Retail", "Agile"],
    gitUrl: "",
    previewUrl: "/images/projects/5.png",
  },
  {
    id: 6,
    title: "FedEx:  Largest Digital Transformation to Date",
    description: "Starting at PI-0 and the launch of the FedEx API Factory.",
    image: "/images/projects/6.png",
    tag: ["All", "Agile"],
    gitUrl: "",
    previewUrl: "/images/projects/6.png",
  },
  {
    id: 7,
    title: "Vanta.js",
    description: "Fully-contained website and leaderboard demo built with Vanta.js (takes 10-20 seconds to load).",
    image: "/images/projects/7a.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://players.workmates.live",
    previewUrl: "/images/projects/7a.png",
  },
  {
    id: 8,
    title: "Dojos",
    description: "A free service to help others get started self-hosting.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://workdojos.com",
    previewUrl: "/images/projects/8.png",
  },
  {
    id: 9,
    title: "Dojofans",
    description: "End-to-end process through 6 levels of AI for image generation, text-to-speech, and animation.",
    image: "/images/projects/9.png",
    tag: ["All", "Video", "AI"],
    gitUrl: "https://dojofans.com",
    previewUrl: "/images/projects/9.png",
  },
  {
    id: 10,
    title: "Fantasy Congress game concept",
    description: "Concept for a revised version of Fantasy Congress from 2006.",
    image: "/images/projects/10.png",
    tag: ["All", "AI"],
    gitUrl: "https://legislators.live",
    previewUrl: "/images/projects/10.png",
  },
  {
    id: 11,
    title: "Moodle Learning Management System",
    description: "AI-powered education, entirely open-source.",
    image: "/images/projects/11.png",
    tag: ["All", "Education", "AI"],
    gitUrl: "https://learning.workdojos.com",
    previewUrl: "/images/projects/11.png",
  },
  {
    id: 12,
    title: "Ghost blog",
    description: "Modern framework for blogging with subs and payments built in.",
    image: "/images/projects/12.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://blog.workdojos.com",
    previewUrl: "/images/projects/12.png",
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
      <div className="text-white flex flex-flow justify-center items-center gap-2 py-6">
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
          name="Education"
          isSelected={tag === "Gaming"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Video"
          isSelected={tag === "Video"}
        />

      </div>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-16">
        <ProjectTag
          onClick={handleTagChange}
          name="Retail"
          isSelected={tag === "Retail"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Travel"
          isSelected={tag === "Travel"}
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
