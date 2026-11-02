import Image from "next/image";
import Link from "next/link";
import { founderName } from "@/data/company/contact";

const team = [
  { image: "team-1.jpg", name: founderName, role: "Founder" },
  { image: "team-2.jpg", name: "alexa brook", role: "human resources manager" },
  { image: "team-3.jpg", name: "suzen hilly", role: "civil engineering" },
];

export default function TeamSection() {
  return (
    <section className="our-team">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-5"><div className="section-title"><h3 className="wow fadeInUp">meet our team</h3><h2 className="text-anime-style-2" data-cursor="-opaque">Creative minds always <span>think something</span></h2></div></div>
          <div className="col-lg-7"><div className="section-title-content"><p className="wow fadeInUp" data-wow-delay="0.2s">We bring together creative expertise and practical experience to make every space feel considered, personal, and complete.</p></div></div>
        </div>
        <div className="row">
          {team.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={member.image}>
              <article className="team-member-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="team-image">
                  <Link href="/team-single" data-cursor-text="View"><figure className="image-anime"><Image src={`/images/${member.image}`} alt={member.name} width={600} height={700} /></figure></Link>
                  <div className="team-readmore-btn"><Link href="/team-single" aria-label={`View ${member.name}`}><Image src="/images/arrow-white.svg" alt="" width={24} height={24} /></Link></div>
                </div>
                <div className="team-body">
                  <div className="team-content"><h3>{member.name}</h3><p>{member.role}</p></div>
                  <div className="team-social-list"><div className="team-social-icon"><ul>
                    <li><a href="#instagram" aria-label={`${member.name} on Instagram`}><i className="fa-brands fa-instagram" /></a></li>
                    <li><a href="#x" aria-label={`${member.name} on X`}><i className="fa-brands fa-x-twitter" /></a></li>
                    <li><a href="#facebook" aria-label={`${member.name} on Facebook`}><i className="fa-brands fa-facebook-f" /></a></li>
                  </ul></div></div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
