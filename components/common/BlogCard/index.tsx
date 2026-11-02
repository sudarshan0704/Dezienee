import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  image: string;
  title: string;
  href?: string;
  delay?: string;
  columnClassName?: string;
};

export default function BlogCard({
  image,
  title,
  href,
  delay = "0s",
  columnClassName = "col-lg-4 col-md-6",
}: BlogCardProps) {
  const delayInMilliseconds = Math.round(Number.parseFloat(delay) * 1000);

  return (
    <div className={columnClassName}>
      <article className="post-item" data-aos="fade-up" data-aos-delay={delayInMilliseconds}>
        <div className="post-featured-image">
          <figure>
            {href ? (
              <Link href={href} className="image-anime" data-cursor-text="View">
                <Image src={image} alt={title} width={600} height={450} />
              </Link>
            ) : (
              <Image src={image} alt={title} width={600} height={450} />
            )}
          </figure>
        </div>
        <div className="post-item-body">
          <div className="post-item-content">
            <h3>{href ? <Link href={href}>{title}</Link> : title}</h3>
          </div>
          {href && (
            <div className="post-item-btn">
              <Link href={href} className="post-btn">read more</Link>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
