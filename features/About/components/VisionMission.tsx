import Image from "next/image";

const values = [
  { icon: "icon-our-vision.svg", title: "our vision", text: "Our vision is rooted in the belief that thoughtfully designed spaces can transform lives, enhancing how people feel, work, and connect. We are committed to creating interiors that reflect our clients’ unique identities, blending comfort, functionality, and beauty. By combining timeless design with modern innovations, we craft spaces that are visually stunning and practical." },
  { icon: "icon-our-mission.svg", title: "our mission", text: "Our mission is to deliver exceptional interior designs that enhance quality of life by prioritizing comfort, functionality, and aesthetics. We create spaces that are visually appealing and tailored to meet each client’s needs. By staying true to design innovation, we ensure every project balances style and purpose." },
];

export default function VisionMission() {
  return (
    <section className="vision-mission">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6"><div className="section-title dark-section"><h3 className="wow fadeInUp">vision mission</h3><h2 className="text-anime-style-2" data-cursor="-opaque">A behind the scenes look at <span>our agency</span></h2></div></div>
          <div className="col-lg-6"><div className="section-title-content dark-section"><p className="wow fadeInUp" data-wow-delay="0.2s">We bring thoughtful design and expert craftsmanship together to create beautiful, functional spaces that feel uniquely yours.</p></div></div>
        </div>
        <div className="row"><div className="col-lg-12"><div className="vision-mission-box">
          {values.map((value, index) => (
            <article className="vision-mission-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={value.title}>
              <div className="icon-box"><Image src={`/images/${value.icon}`} alt="" width={64} height={64} /></div>
              <div className="vision-mission-content"><h3>{value.title}</h3><p>{value.text}</p></div>
            </article>
          ))}
        </div></div></div>
      </div>
    </section>
  );
}
