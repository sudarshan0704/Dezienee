import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import type { ProjectDetail as ProjectDetailData } from "@/data/projects/test-project-detail";
import { companyContact } from "@/data/company/contact";

type ProjectDetailProps = {
  project: ProjectDetailData;
};

const projectMetadata = [
  { icon: "fa-regular fa-calendar", label: "project date:" },
  { icon: "fa-regular fa-clock", label: "project duration:" },
  { icon: "fa-regular fa-circle-check", label: "category:" },
  { icon: "fa-regular fa-user", label: "client / company:" },
  { icon: "fa-solid fa-location-dot", label: "project location:" },
];

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const metadataValues = [
    project.date,
    project.duration,
    project.projectCategory,
    project.client,
    project.location,
  ];

  return (
    <>
      <PageHero
        title={project.category}
        backgroundImage="/images/page-header-bg.jpg"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "projects", href: "/projects" },
          { label: project.category },
        ]}
      />

      <section className="page-project-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <aside className="project-single-sidebar">
                <div className="project-detail-list" data-aos="fade-up">
                  {projectMetadata.map((item, index) => (
                    <div className="project-detail-item" key={item.label}>
                      <div className="icon-box" aria-hidden="true">
                        <i className={item.icon} />
                      </div>
                      <div className="project-detail-content">
                        <h3>{item.label}</h3>
                        <p>{metadataValues[index]}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="sidebar-cta-box" data-aos="fade-up" data-aos-delay="200">
                  <div className="sidebar-cta-image">
                    <div className="image-anime">
                      <Image
                        src="/images/sidebar-cta-img.jpg"
                        alt="Interior design details"
                        width={600}
                        height={342}
                      />
                    </div>
                  </div>
                  <div className="sidebar-cta-Body">
                    <div className="sidebar-cta-content">
                      <h3>how can we help</h3>
                      <p>If you need any help, please feel free to contact us.</p>
                    </div>
                    <div className="sidebar-cta-contact">
                      <div className="sidebar-cta-contact-item">
                        <div className="icon-box">
                          <Image src="/images/icon-phone.svg" alt="" width={24} height={24} />
                        </div>
                        <div className="cta-contact-item-content">
                          <p><a href={`tel:${companyContact.phoneHref}`}>{companyContact.phone}</a></p>
                        </div>
                      </div>
                      <div className="sidebar-cta-contact-item">
                        <div className="icon-box">
                          <Image src="/images/icon-mail.svg" alt="" width={24} height={24} />
                        </div>
                        <div className="cta-contact-item-content">
                          <p><a href={`mailto:${companyContact.email}`}>{companyContact.email}</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div className="col-lg-8">
              <article className="project-single-content">
                <div className="project-single-image">
                  <figure className="image-anime reveal">
                    <Image
                      src={`/images/${project.image}`}
                      alt={project.title}
                      width={900}
                      height={700}
                      priority
                    />
                  </figure>
                </div>

                <div className="project-entry">
                  <section className="project-info">
                    <h2 className="text-anime-style-2">Project information</h2>
                    {project.information.map((paragraph, index) => (
                      <p data-aos="fade-up" data-aos-delay={index * 200} key={paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </section>

                  <section className="project-design-info">
                    <h2 className="text-anime-style-2">Design highlights</h2>
                    <p data-aos="fade-up">{project.designDescription}</p>
                    <ul data-aos="fade-up" data-aos-delay="200">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="project-gallery gallery-items">
                    <h2 className="text-anime-style-2">Project gallery</h2>
                    <div className="project-gallery-images">
                      {project.gallery.map((image, index) => (
                        <div
                          className="project-gallery-img"
                          data-aos="fade-up"
                          data-aos-delay={index * 100}
                          data-cursor-text="View"
                          key={image}
                        >
                          <Link href={`/images/${image}`} target="_blank" rel="noreferrer">
                            <figure className="image-anime reveal">
                              <Image
                                src={`/images/${image}`}
                                alt={`${project.category} project detail ${index + 1}`}
                                width={600}
                                height={600}
                              />
                            </figure>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
