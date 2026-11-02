"use client";

import { useState } from "react";
import PageHero from "@/components/common/PageHero";
import ProjectCard from "@/components/common/ProjectCard";
import { projectDetails } from "@/data/projects/test-project-detail";

const filters = ["all", "architecture", "interior", "bedroom", "furniture", "kitchen"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <>
      <PageHero
        title="Our projects"
        backgroundImage="/images/page-header-bg.jpg"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "our projects" },
        ]}
      />
      <section className="page-project">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="our-Project-nav" aria-label="Filter projects">
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
                {projectDetails.map((project, index) => (
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
    </>
  );
}
