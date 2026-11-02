import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  image: string;
  category: string;
  title: string;
  categories?: string[];
  href: string;
  delay?: string;
  columnClassName?: string;
  hidden?: boolean;
};

export default function ProjectCard({
  image,
  category,
  title,
  categories = [],
  href,
  delay = "0s",
  columnClassName = "col-md-6",
  hidden = false,
}: ProjectCardProps) {
  const delayInMilliseconds = Math.round(Number.parseFloat(delay) * 1000);

  return (
    <div className={`${columnClassName} project-item-box ${categories.join(" ")}${hidden ? " d-none" : ""}`}>
      <article className="project-item" data-aos="fade-up" data-aos-delay={delayInMilliseconds}>
        <div className="project-image">
          <div className="project-featured-image">
            <figure className="image-anime"><Image src={image} alt={title} width={900} height={700} /></figure>
          </div>
          <div className="project-btn">
            <Link href={href} aria-label={`View project: ${title}`}><Image src="/images/arrow-white.svg" alt="" width={24} height={24} /></Link>
          </div>
        </div>
        <div className="project-content">
          <h3>{category}</h3>
          <h2><Link href={href}>{title}</Link></h2>
        </div>
      </article>
    </div>
  );
}
