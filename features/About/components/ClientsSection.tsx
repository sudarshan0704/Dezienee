import Image from "next/image";

const clientLogos = [1, 2, 3, 4, 1];

export default function ClientsSection() {
  return (
    <section className="our-clients">
      <div className="container">
        <div className="row"><div className="col-lg-12"><div className="our-clients-box">
          <div className="section-title">
            <h3 className="wow fadeInUp">our clients</h3>
            <h2 className="text-anime-style-2" data-cursor="-opaque">Transforming 1,000+ spaces with tailored designs</h2>
            <p className="wow fadeInUp" data-wow-delay="0.2s">We&apos;ve had the privilege of designing and transforming over a thousand interiors, creating spaces that resonate with our clients&apos; visions and needs. Our approach blends aesthetics and functionality, ensuring each project brings comfort, elegance, and a personalized touch.</p>
          </div>
          <div className="our-client-slider"><div className="swiper"><div className="swiper-wrapper">
            {clientLogos.map((logo, index) => (
              <div className="swiper-slide" key={`${logo}-${index}`}><div className="client-logo"><Image src={`/images/client-logo-${logo}.svg`} alt={`Client ${logo}`} width={180} height={60} /></div></div>
            ))}
          </div></div></div>
        </div></div></div>
      </div>
    </section>
  );
}
