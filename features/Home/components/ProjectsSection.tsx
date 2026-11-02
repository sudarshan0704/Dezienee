"use client";

import ProjectCard from "@/components/common/ProjectCard";
import { useState } from "react";
import { projectDetails } from "@/data/projects/test-project-detail";

const filters = ["all", "architecture", "interior", "bedroom", "furniture", "kitchen"];

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
              {projectDetails.slice(0, 4).map((project, index) => (
                <ProjectCard
                  key={project.image}
                  image={`/images/${project.image}`}
                  category={project.category}
                  title={project.title}
                  categories={project.filters}
                  href={`/projects/${project.slug}`}
                  delay={`${index * 0.2}s`}
                  hidden={activeFilter !== "all" && !project.filters.includes(activeFilter)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
