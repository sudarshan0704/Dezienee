import Image from "next/image";
import Link from "next/link";
import { companyContact, founderName } from "@/data/company/contact";

const facilities = [
  { icon: "icon-about-facility-1.svg", title: "reasonable prices", text: "We produce furniture to fulfill the needs of all people and offer it at affordable prices." },
  { icon: "icon-about-facility-2.svg", title: "exclusive design", text: "A mixture of imagination, experience, and professionalism is the secret of our design." },
  { icon: "icon-about-facility-2.svg", title: "professional team", text: "We are proud of our friendly, professional, and always-developing team." },
];

type AboutIntroProps = {
  variant: "home" | "about";
};

export default function AboutIntro({ variant }: AboutIntroProps) {
  const isAboutPage = variant === "about";

  return (
    <section className={`about-us${isAboutPage ? " page-about-us" : ""}`} id={isAboutPage ? undefined : "about"}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-images">
              <div className="about-img-1"><figure className="image-anime reveal"><Image src="/images/about-img-1.jpg" alt="A thoughtfully designed living space" width={600} height={700} /></figure></div>
              <div className="about-img-2">
                <figure className="image-anime reveal"><Image src="/images/about-img-2.jpg" alt="A refined, comfortable interior" width={600} height={700} /></figure>
                <div className="experience-counter"><h3><span className="counter">15</span>+</h3><p>Years of experience</p></div>
              </div>
              <div className="feedback-counter"><p><span className="counter">95</span>%</p><h3>positive feedback</h3></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">about us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Our passion for design, your <span>vision realized</span></h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Our dedicated team of designers works closely with you to understand your vision and bring it to life with thoughtful attention to detail. Whether it&apos;s transforming a single room or an entire home.</p>
              </div>
              <div className="about-us-content-body">
                <div className="about-us-content-info">
                  <div className="about-us-content-list wow fadeInUp" data-wow-delay="0.4s"><ul><li>creative expertise</li><li>client-centered approach</li></ul></div>
                  <div className="about-us-content-btn wow fadeInUp" data-wow-delay="0.6s">
                    <Link href={isAboutPage ? "/contact" : "/about"} className="btn-default">{isAboutPage ? "contact now" : "read more"}</Link>
                  </div>
                </div>
                <div className="about-us-contact-list">
                  <div className="about-contact-item wow fadeInUp" data-wow-delay="0.4s"><div className="icon-box"><i className="fa-solid fa-phone" /></div><div className="about-contact-content"><p>need any help?</p><h3><a href={`tel:${companyContact.phoneHref}`}>{companyContact.phone}</a></h3></div></div>
                  <div className="about-contact-item wow fadeInUp" data-wow-delay="0.6s"><div className="icon-box"><figure className="image-anime"><Image src="/images/author-1.jpg" alt={`${founderName}, founder`} width={100} height={100} /></figure></div><div className="about-contact-content"><h3>{founderName}</h3><p>Founder</p></div></div>
                </div>
              </div>
            </div>
          </div>
          {isAboutPage && (
            <div className="col-lg-12">
              <div className="about-facility-list">
                {facilities.map((facility, index) => (
                  <article className="about-facility-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={facility.title}>
                    <div className="icon-box"><Image src={`/images/${facility.icon}`} alt="" width={60} height={60} /></div>
                    <div className="about-facility-content"><h3>{facility.title}</h3><p>{facility.text}</p></div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
