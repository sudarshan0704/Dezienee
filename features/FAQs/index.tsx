"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PageHero from "@/components/common/PageHero";
import { companyContact } from "@/data/company/contact";
import { faqCategories } from "@/data/faqs/questions";

export default function FAQs() {
  const [openQuestion, setOpenQuestion] = useState("general_information-0");

  return (
    <>
      <PageHero
        title="Frequently asked questions"
        backgroundImage="/images/page-header-bg.jpg"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "FAQs" },
        ]}
      />

      <section className="page-faqs">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <aside className="faq-sidebar">
                <nav className="faq-catagery-list" aria-label="FAQ categories" data-aos="fade-up">
                  <ul>
                    {faqCategories.map((category) => (
                      <li key={category.id}>
                        <a href={`#${category.id}`}>{category.title}</a>
                      </li>
                    ))}
                  </ul>
                </nav>

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
                      <Link href="/contact" className="btn-default">contact us</Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div className="col-lg-8">
              <div className="page-faqs-catagery">
                {faqCategories.map((category) => (
                  <section
                    className="our-faq-section page-faq-accordion"
                    id={category.id}
                    key={category.id}
                  >
                    <div className="section-title">
                      <h2 className="text-anime-style-2" data-cursor="-opaque">
                        {category.title}
                      </h2>
                    </div>
                    <div className="faq-accordion">
                      {category.questions.map((item, index) => {
                        const questionId = `${category.id}-${index}`;
                        const isOpen = openQuestion === questionId;
                        const headingId = `${questionId}-heading`;
                        const panelId = `${questionId}-panel`;

                        return (
                          <div
                            className="accordion-item"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            key={item.question}
                          >
                            <h3 className="accordion-header" id={headingId}>
                              <button
                                className={`accordion-button${isOpen ? "" : " collapsed"}`}
                                type="button"
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => setOpenQuestion(isOpen ? "" : questionId)}
                              >
                                <span>{index + 1}.</span> {item.question}
                              </button>
                            </h3>
                            <div
                              className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
                              id={panelId}
                              aria-labelledby={headingId}
                            >
                              <div className="accordion-body">
                                <p>{item.answer}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
