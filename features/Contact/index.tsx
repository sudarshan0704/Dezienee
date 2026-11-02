import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import { companyContact } from "@/data/company/contact";

const contactDetails = [
  {
    icon: "fa-solid fa-phone",
    title: "phone number",
    lines: [{ text: companyContact.phone, href: `tel:${companyContact.phoneHref}` }],
  },
  {
    icon: "fa-regular fa-envelope",
    title: "e-mail support",
    lines: [{ text: companyContact.email, href: `mailto:${companyContact.email}` }],
  },
  {
    icon: "fa-solid fa-house",
    title: "location",
    lines: [{ text: companyContact.location }],
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact us"
        backgroundImage="/images/page-header-bg.jpg"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "contact us" },
        ]}
      />

      <section className="page-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-us-image">
                <figure className="image-anime reveal">
                  <Image
                    src="/images/contact-us-image.jpg"
                    alt="A welcoming interior designed by our team"
                    width={800}
                    height={770}
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-us-form">
                <div className="section-title">
                  <h3 className="wow fadeInUp">contact form</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    We would love to hear <span>from you</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Your email address will not be published. Required fields are marked *
                  </p>
                </div>

                <div className="contact-form">
                  <form action="#" method="post" className="wow fadeInUp" data-wow-delay="0.4s">
                    <div className="row">
                      <div className="form-group col-md-6 mb-4">
                        <label className="visually-hidden" htmlFor="contact-name">Name</label>
                        <input
                          className="form-control"
                          id="contact-name"
                          name="name"
                          type="text"
                          placeholder="Name*"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 mb-4">
                        <label className="visually-hidden" htmlFor="contact-email">Email address</label>
                        <input
                          className="form-control"
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="Email Address*"
                          required
                        />
                      </div>
                      <div className="form-group col-md-12 mb-4">
                        <label className="visually-hidden" htmlFor="contact-phone">Phone</label>
                        <input
                          className="form-control"
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          placeholder="Your Phone"
                        />
                      </div>
                      <div className="form-group col-md-12 mb-5">
                        <label className="visually-hidden" htmlFor="contact-message">Message</label>
                        <textarea
                          className="form-control"
                          id="contact-message"
                          name="message"
                          rows={4}
                          placeholder="Your Message"
                          required
                        />
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="btn-default">submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="google-map">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">our contact</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Get in touch with us
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Get in touch to discuss your design needs. Give us a call, send us an
                  email, or fill out the contact form and we&apos;ll get back to you.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="google-map-iframe">
                <iframe
                  title="Map showing GarveBhaviPalya, Electronic City, Bangalore"
                  src="https://maps.google.com/maps?q=GarveBhaviPalya%2C%20Electronic%20City%2C%20Bangalore%20560068&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="contact-info-box">
                {contactDetails.map((detail, index) => (
                  <div
                    className="contact-info-item wow fadeInUp"
                    data-wow-delay={`${index * 0.2}s`}
                    key={detail.title}
                  >
                    <div className="icon-box" aria-hidden="true">
                      <i className={detail.icon} />
                    </div>
                    <div className="contact-info-content">
                      <h3>{detail.title}</h3>
                      {detail.lines.map((line, lineIndex) => (
                        <p key={`${detail.title}-${lineIndex}`}>
                          {"href" in line ? <a href={line.href}>{line.text}</a> : line.text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
