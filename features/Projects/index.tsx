"use client";

import { useState } from "react";
import PageHero from "@/components/common/PageHero";
import ProjectCard from "@/components/common/ProjectCard";

const filters = ["all", "architecture", "interior", "bedroom", "furniture", "kitchen"];

const projects = [
  {
    image: "project-1.jpg",
    category: "residential spaces",
    title: "urban retreat: modern design meets comfort",
    filters: ["architecture", "bedroom"],
  },
  {
    image: "project-2.jpg",
    category: "luxury homes",
    title: "luxurious loft: industrial chic for living",
    filters: ["interior", "kitchen"],
  },
  {
    image: "project-3.jpg",
    category: "outdoor living spaces",
    title: "coastal vibes: serenity by the sea",
    filters: ["furniture", "architecture"],
  },
  {
    image: "project-4.jpg",
    category: "modern designs",
    title: "minimalist haven: simple, clean, inviting spaces",
    filters: ["kitchen", "bedroom"],
  },
  {
    image: "project-5.jpg",
    category: "rustic charm revived",
    title: "nature's embrace: timeless tranquility",
    filters: ["interior"],
  },
  {
    image: "project-6.jpg",
    category: "nature-inspired harmony",
    title: "bold accents: statement living design",
    filters: ["furniture"],
  },
];

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
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.image}
                    image={`/images/${project.image}`}
                    category={project.category}
                    title={project.title}
                    categories={project.filters}
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
