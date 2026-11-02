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
  href = "/blog-single",
  delay = "0s",
  columnClassName = "col-lg-4 col-md-6",
}: BlogCardProps) {
  return (
    <div className={columnClassName}>
      <article className="post-item wow fadeInUp" data-wow-delay={delay}>
        <div className="post-featured-image">
          <figure><Link href={href} className="image-anime" data-cursor-text="View"><Image src={image} alt={title} width={600} height={450} /></Link></figure>
        </div>
        <div className="post-item-body">
          <div className="post-item-content"><h3><Link href={href}>{title}</Link></h3></div>
          <div className="post-item-btn"><Link href={href} className="post-btn">read more</Link></div>
        </div>
      </article>
    </div>
  );
}
