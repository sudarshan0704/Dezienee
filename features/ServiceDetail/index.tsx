import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import type { ServiceDetail as ServiceDetailData } from "@/data/services/test-service-detail";
import { serviceDetails } from "@/data/services/test-service-detail";
import { companyContact } from "@/data/company/contact";

type ServiceDetailProps = {
  service: ServiceDetailData;
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <>
      <PageHero
        title={service.title}
        backgroundImage="/images/page-header-bg.jpg"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <aside className="service-sidebar">
                <div className="service-catagery-list" data-aos="fade-up">
                  <h3>services category</h3>
                  <ul>
                    {serviceDetails.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/services/${item.slug}`}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
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
              <article className="service-single-content">
                <div className="service-feature-image">
                  <figure className="image-anime reveal">
                    <Image
                      src={`/images/${service.image}`}
                      alt={service.title}
                      width={900}
                      height={700}
                      priority
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  {service.introduction.map((paragraph, index) => (
                    <p data-aos="fade-up" data-aos-delay={index * 200} key={paragraph}>
                      {paragraph}
                    </p>
                  ))}

                  <div className="service-entry-list-image">
                    <div className="service-entry-image">
                      <figure className="image-anime reveal">
                        <Image
                          src="/images/service-entry-img.jpg"
                          alt="Materials and finishes selected for an interior project"
                          width={600}
                          height={370}
                        />
                      </figure>
                    </div>
                    <div className="service-entry-list" data-aos="fade-up" data-aos-delay="200">
                      <ul>
                        {service.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <section className="why-choose-content service-single-why-choose">
                  <div className="section-title">
                    <h3 data-aos="fade-up">why choose us</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      A behind the scenes look at <span>our agency</span>
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="200">
                      From concept to completion, discover how we bring your vision to
                      life with innovation, collaboration, and expert craftsmanship.
                    </p>
                  </div>
                  <div className="why-choose-item-list">
                    {service.benefits.map((benefit, index) => (
                      <div
                        className="why-choose-item"
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                        key={benefit.title}
                      >
                        <div className="icon-box">
                          <Image src={`/images/${benefit.icon}`} alt="" width={60} height={60} />
                        </div>
                        <div className="why-choose-item-content">
                          <h3>{benefit.title}</h3>
                          <p>{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="service-single-faq">
                  <div className="section-title">
                    <h3 data-aos="fade-up">asked questions</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      Have you any question? <span>Look here</span>
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="200">
                      Our team is here to help you understand the design process and
                      answer your questions.
                    </p>
                  </div>
                  <div className="faq-accordion" id="service-faq">
                    {service.faqs.map((faq, index) => {
                      const panelId = `service-faq-panel-${index}`;
                      const headingId = `service-faq-heading-${index}`;

                      return (
                        <div
                          className="accordion-item"
                          data-aos="fade-up"
                          data-aos-delay={index * 100}
                          key={`${faq.question}-${index}`}
                        >
                          <h2 className="accordion-header" id={headingId}>
                            <button
                              className={`accordion-button${index ? " collapsed" : ""}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${panelId}`}
                              aria-expanded={index === 0}
                              aria-controls={panelId}
                            >
                              <span>{index + 1}.</span> {faq.question}
                            </button>
                          </h2>
                          <div
                            id={panelId}
                            className={`accordion-collapse collapse${index === 0 ? " show" : ""}`}
                            aria-labelledby={headingId}
                            data-bs-parent="#service-faq"
                          >
                            <div className="accordion-body"><p>{faq.answer}</p></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
