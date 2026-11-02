import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  href?: string;
  delay?: string;
  columnClassName?: string;
};

export default function ServiceCard({
  image,
  title,
  description,
  href = "/services/residential-interior-design",
  delay = "0s",
  columnClassName = "col-lg-4 col-md-6",
}: ServiceCardProps) {
  const delayInMilliseconds = Math.round(Number.parseFloat(delay) * 1000);

  return (
    <div className={columnClassName}>
      <article className="service-item" data-aos="fade-up" data-aos-delay={delayInMilliseconds}>
        <div className="service-image">
          <Link href={href} data-cursor-text="View">
            <figure className="image-anime"><Image src={image} alt={title} width={600} height={450} /></figure>
          </Link>
        </div>
        <div className="service-btn">
          <Link href={href} aria-label={`View ${title}`}><Image src="/images/arrow-white.svg" alt="" width={24} height={24} /></Link>
        </div>
        <div className="service-content">
          <h3><Link href={href}>{title}</Link></h3>
          <p>{description}</p>
        </div>
      </article>
    </div>
  );
}
