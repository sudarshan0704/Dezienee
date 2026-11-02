"use client";

import Image from "next/image";
import { useState } from "react";

const questions = [
  { question: "What is the typical process for starting a design project?", answer: "Our process starts with a consultation to discuss your vision, followed by planning, design presentation, and implementation to achieve your ideal space." },
  { question: "How long does a typical interior design project take?", answer: "Project timelines depend on the size and scope of the work. We outline milestones with you during planning and keep you updated from design through installation." },
  { question: "Can I incorporate my existing furniture into the new design?", answer: "Absolutely. We can work with meaningful or practical pieces you already own and incorporate them into a cohesive new design." },
  { question: "What should I expect during the design consultation?", answer: "We discuss your space, goals, style, priorities, and budget, then explain the next steps and how we can tailor the project to you." },
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section className="our-faqs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="our-faqs-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">asked questions</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Have a question? Look <span>here</span></h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Find answers to common questions about our design process and how we work with you.</p>
              </div>
              <div className="faq-accordion" id="about-faqs">
                {questions.map((item, index) => {
                  const isOpen = openQuestion === index;
                  const headingId = `about-faq-heading-${index + 1}`;
                  const panelId = `about-faq-panel-${index + 1}`;
                  return (
                    <div className="accordion-item wow fadeInUp" key={item.question} data-wow-delay={`${index * 0.2}s`}>
                      <h2 className="accordion-header" id={headingId}>
                        <button className={`accordion-button${isOpen ? "" : " collapsed"}`} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenQuestion(isOpen ? -1 : index)}>
                          <span>{index + 1}.</span> {item.question}
                        </button>
                      </h2>
                      <div id={panelId} className={`accordion-collapse collapse${isOpen ? " show" : ""}`} aria-labelledby={headingId}>
                        <div className="accordion-body"><p>{item.answer}</p></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-5"><div className="our-faqs-image"><figure className="image-anime reveal"><Image src="/images/faqs-image.jpg" alt="A calm, well-organized interior" width={650} height={800} /></figure></div></div>
        </div>
      </div>
    </section>
  );
}
