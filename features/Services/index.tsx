import PageHero from "@/components/common/PageHero";
import ServiceCard from "@/components/common/ServiceCard";
import { serviceDetails } from "@/data/services/test-service-detail";

export default function Services() {
  return (
    <>
      <PageHero
        title="Services"
        backgroundImage="/images/page-header-bg.jpg"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "services" },
        ]}
      />
      <section className="page-services">
        <div className="container">
          <div className="row">
            {serviceDetails.map((service, index) => (
              <ServiceCard
                key={service.title}
                image={`/images/${service.image}`}
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
                delay={`${index * 0.2}s`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
