"use client";

import ProjectCard from "@/components/common/ProjectCard";
import { useState } from "react";

const filters = ["all", "architecture", "interior", "bedroom", "furniture", "kitchen"];
const projects = [
  { image: "project-1.jpg", category: "residential spaces", title: "urban retreat: modern design meets comfort", filters: "architecture bedroom" },
  { image: "project-2.jpg", category: "luxury homes", title: "luxurious loft: industrial chic for living", filters: "interior kitchen" },
  { image: "project-3.jpg", category: "outdoor living spaces", title: "coastal vibes: serenity by the sea", filters: "furniture architecture" },
  { image: "project-4.jpg", category: "modern designs", title: "minimalist haven: simple, clean, inviting spaces", filters: "kitchen bedroom" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className="our-project" id="projects">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-5">
            <div className="section-title">
              <h3 className="wow fadeInUp">latest project</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">Creative projects that define<span> our style</span></h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="section-title-content">
              <p className="wow fadeInUp" data-wow-delay="0.2s">Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces to functional and stylish commercial interiors.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <nav className="our-Project-nav wow fadeInUp" data-wow-delay="0.4s" aria-label="Filter projects">
              <ul>
                {filters.map((filter) => (
                  <li key={filter}>
                    <a
                      href="#project-grid"
                      className={activeFilter === filter ? "active-btn" : undefined}
                      aria-current={activeFilter === filter ? "true" : undefined}
                      onClick={(event) => {
                        event.preventDefault();
                        setActiveFilter(filter);
                      }}
                    >
                      {filter}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-12">
            <div className="row project-item-boxes align-items-center" id="project-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.image}
                  image={`/images/${project.image}`}
                  category={project.category}
                  title={project.title}
                  categories={project.filters.split(" ")}
                  delay={`${index * 0.2}s`}
                  hidden={activeFilter !== "all" && !project.filters.split(" ").includes(activeFilter)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
