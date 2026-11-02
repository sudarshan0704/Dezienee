import Image from "next/image";

const reasons = [
  { icon: "icon-why-choose-1.svg", title: "tailored design solutions", description: "We provide personalized interior design services that reflect your unique vision and lifestyle." },
  { icon: "icon-why-choose-2.svg", title: "Seamless Project Management", description: "We handle the entire design process, from concept to completion, with flawless execution." },
  { icon: "icon-why-choose-3.svg", title: "Client-Centered Collaboration", description: "Your input is valued throughout the entire process, ensuring your vision is fully realized." },
];

const photos = [
  { className: "why-choose-img-1", src: "why-choose-img-1.jpg", alt: "Natural materials in a modern interior" },
  { className: "why-choose-img-2", src: "why-choose-img-2.jpg", alt: "Refined contemporary living space" },
  { className: "why-choose-img-3", src: "why-choose-img-3.jpg", alt: "Thoughtfully designed home interior" },
  { className: "why-choose-img-4", src: "why-choose-img-4.jpg", alt: "Elegant interior detail" },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="why-choose-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">why choose us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">A behind the scenes look at <span>our agency</span></h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">From concept to completion, discover how we bring your vision to life with innovation, collaboration, and expert craftsmanship.</p>
              </div>
              <div className="why-choose-item-list">
                {reasons.map((reason, index) => (
                  <div className="why-choose-item wow fadeInUp" data-wow-delay={`${0.4 + index * 0.2}s`} key={reason.title}>
                    <div className="icon-box"><Image src={`/images/${reason.icon}`} alt="" width={60} height={60} /></div>
                    <div className="why-choose-item-content">
                      <h3>{reason.title}</h3>
                      <p>{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="why-choose-images">
              <div className="why-choose-img-box-1">
                {photos.slice(0, 2).map((photo) => (
                  <div className={photo.className} key={photo.src}>
                    <figure className="image-anime reveal"><Image src={`/images/${photo.src}`} alt={photo.alt} width={600} height={700} /></figure>
                  </div>
                ))}
              </div>
              <div className="why-choose-img-box-2">
                {photos.slice(2).map((photo) => (
                  <div className={photo.className} key={photo.src}>
                    <figure className="image-anime reveal"><Image src={`/images/${photo.src}`} alt={photo.alt} width={600} height={700} /></figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
