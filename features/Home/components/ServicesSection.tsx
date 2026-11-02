import Link from "next/link";
import ServiceCard from "@/components/common/ServiceCard";

const services = [
  { image: "service-1.jpg", title: "residential interior design", description: "We create personalized living spaces that reflect your style and functional needs." },
  { image: "service-2.jpg", title: "commercial interior design", description: "Enhancing business environments with professional, functional, and aesthetic design." },
  { image: "service-3.jpg", title: "furniture and decor selection", description: "Our experts help you choose the perfect furniture and decor to complement your style." },
];

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
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              image={`/images/${service.image}`}
              title={service.title}
              description={service.description}
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
