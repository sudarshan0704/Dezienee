import Image from "next/image";

const skills = [
  { title: "space planning and layout", percent: "95%" },
  { title: "project challenges and solutions", percent: "85%" },
  { title: "sustainability and eco-friendly features", percent: "75%" },
];

export default function SkillsSection() {
  return (
    <section className="our-skill">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="our-skill-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">our skills</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Skills that shape your<span> dream home</span></h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Our dedicated team of designers works closely with you to understand your vision and bring it to life with thoughtful attention to detail.</p>
              </div>
              <div className="our-skillbar">
                {skills.map((skill) => (
                  <div className="skills-progress-bar" key={skill.title}>
                    <div className="skillbar" data-percent={skill.percent}>
                      <div className="skill-data"><div className="skill-title">{skill.title}</div><div className="skill-no">{skill.percent}</div></div>
                      <div className="skill-progress"><div className="count-bar" /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our-skill-image">
              {[1, 2, 3].map((image) => (
                <div className={`our-skill-img-${image}`} key={image}>
                  <figure className="image-anime reveal"><Image src={`/images/our-skill-img-${image}.jpg`} alt={`Interior design project ${image}`} width={600} height={700} /></figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
