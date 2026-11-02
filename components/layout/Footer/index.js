import Image from "next/image";
import Link from "next/link";
import { companyContact } from "@/data/company/contact";

const informationLinks = [
  ["About our company", "/about"],
  ["View our services", "/services"],
  ["Read our blog", "/blog"],
  ["Our latest projects", "/projects"],
];

const portfolioLinks = [
  "Luxury home design",
  "Residential interior design",
  "Commercial space design",
  "Renovation and restoration design",
];

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-header">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="footer-logo">
                    <Image src="/images/logo/logo-2.webp" alt="Dezinee" width={150} height={50} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-social-links">
                    <div className="footer-social-link-title">
                      <h3>Follow our socials</h3>
                    </div>
                    <ul>
                      <li><a href="#facebook" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a></li>
                      <li><a href="#dribbble" aria-label="Dribbble"><i className="fa-brands fa-dribbble" /></a></li>
                      <li><a href="#instagram" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-links">
              <h3>Information</h3>
              <ul>
                {informationLinks.map(([label, href]) => (
                  <li key={href}><Link href={href}>{label}</Link></li>
                ))}
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/faqs">FAQs</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-links">
              <h3>Portfolio</h3>
              <ul>
                {portfolioLinks.map((label) => (
                  <li key={label}><Link href="/projects">{label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-contact-box footer-links">
              <h3>Contact us</h3>
              <div className="footer-contact-item">
                <div className="icon-box"><i className="fa-solid fa-phone" /></div>
                <div className="footer-contact-content"><a href={`tel:${companyContact.phoneHref}`}>{companyContact.phone}</a></div>
              </div>
              <div className="footer-contact-item">
                <div className="icon-box"><i className="fa-solid fa-envelope" /></div>
                <div className="footer-contact-content"><a href={`mailto:${companyContact.email}`}>{companyContact.email}</a></div>
              </div>
              <div className="footer-contact-item">
                <div className="icon-box"><i className="fa-solid fa-location-dot" /></div>
                <div className="footer-contact-content"><p>{companyContact.location}</p></div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-latest-news footer-links">
              <h3>Get the latest design news</h3>
              <div className="footer-newsletter-form">
                <p>Get exclusive design inspiration straight to your inbox.</p>
                <form action="#" method="post">
                  <div className="form-group">
                    <label className="visually-hidden" htmlFor="newsletter-email">Email address</label>
                    <input className="form-control" id="newsletter-email" name="email" type="email" placeholder="Enter your email" required />
                    <button type="submit" aria-label="Subscribe"><i className="fa-solid fa-arrow-right-long" /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-copyright-text">
                <p>Copyright © 2026 Dezinee. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}