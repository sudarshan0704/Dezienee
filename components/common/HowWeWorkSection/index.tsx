import Image from "next/image";

const process = [
  { title: "01. initial consultation", description: "We start with a one-on-one meeting to understand your vision, preferences, and requirements." },
  { title: "02. design planning", description: "We select materials, layouts, and furnishings, and create detailed 3D renderings." },
  { title: "03. project execution", description: "With the design plans in place, we manage and coordinate every aspect of the project." },
  { title: "04. final review", description: "After completing the project, we walk through the space with you and review every detail." },
];
const companyLogos = [1, 2, 3, 4, 5, 1];

export default function HowWeWorkSection() {
  return (
    <section className="how-we-work">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title dark-section">
              <h3 className="wow fadeInUp">how we work</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">From concept to completion in<span> our work</span></h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title-content dark-section">
              <p className="wow fadeInUp" data-wow-delay="0.2s">Our comprehensive approach guides you through each phase of the design process, from initial brainstorming and conceptualization.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="how-we-work-list">
              {process.map((item, index) => (
                <article className="how-we-work-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={item.title}>
                  <div className="icon-box"><Image src={`/images/icon-how-we-work-${index + 1}.svg`} alt="" width={64} height={64} /></div>
                  <div className="how-we-work-content"><h3>{item.title}</h3><p>{item.description}</p></div>
                </article>
              ))}
            </div>
            <div className="how-work-company-slider">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {companyLogos.map((logo, index) => (
                    <div className="swiper-slide" key={`${logo}-${index}`}>
                      <div className="company-logo"><Image src={`/images/company-logo-${logo}.svg`} alt={`Design partner ${logo}`} width={180} height={60} /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
