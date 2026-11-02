import PageHero from "@/components/common/PageHero";
import ServiceCard from "@/components/common/ServiceCard";

const services = [
  {
    image: "service-1.jpg",
    title: "residential interior design",
    description:
      "We create personalized living spaces that reflect your style and functional needs.",
  },
  {
    image: "service-2.jpg",
    title: "commercial interior design",
    description:
      "Enhancing business environments with professional, functional, and aesthetic design.",
  },
  {
    image: "service-3.jpg",
    title: "furniture and decor selection",
    description:
      "Our experts help you choose the perfect furniture and decor to complement your style.",
  },
  {
    image: "service-4.jpg",
    title: "lighting design",
    description:
      "Enhancing ambiance and functionality with thoughtfully designed lighting solutions.",
  },
  {
    image: "service-5.jpg",
    title: "color consultation",
    description:
      "Choosing palettes that evoke warmth, energy, or calm to match your vision.",
  },
  {
    image: "service-6.jpg",
    title: "3D visualization",
    description:
      "Bringing design ideas to life with realistic 3D models before the work begins.",
  },
];

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
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                image={`/images/${service.image}`}
                title={service.title}
                description={service.description}
                delay={`${index * 0.2}s`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
