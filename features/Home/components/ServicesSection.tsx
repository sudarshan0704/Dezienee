import Link from "next/link";
import ServiceCard from "@/components/common/ServiceCard";
import { serviceDetails } from "@/data/services/test-service-detail";

export default function ServicesSection() {
  return (
    <section className="our-services" id="services">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">our services</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">Innovative design services for <span>every need</span></h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title-content">
              <p className="wow fadeInUp" data-wow-delay="0.2s">We offer a range of bespoke interior design services tailored to your unique needs. From concept development to final installation.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceDetails.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={service.title}
              image={`/images/${service.image}`}
              title={service.title}
              description={service.description}
              href={`/services/${service.slug}`}
              delay={`${index * 0.2}s`}
            />
          ))}
          <div className="col-lg-12">
            <div className="all-services-btn wow fadeInUp" data-wow-delay="0.6s">
              <Link href="/services" className="btn-default">see all services</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
