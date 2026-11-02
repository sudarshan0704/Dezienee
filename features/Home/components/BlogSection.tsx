import Link from "next/link";
import BlogCard from "@/components/common/BlogCard";

const posts = [
  { image: "post-1.jpg", title: "How Does One Go About Buying Furniture?" },
  { image: "post-2.jpg", title: "Innovative Décor Ideas Shaping Homes Today" },
  { image: "post-3.jpg", title: "Design Industry Updates You Should Know About" },
];

export default function BlogSection() {
  return (
    <section className="our-blog" id="blog">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">latest news</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Your guide to</span> inspired interiors</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title-content">
              <p className="wow fadeInUp" data-wow-delay="0.2s">Your journey to inspired interiors begins here. Our blog offers a wealth of resources, including design tips and trend analyses.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {posts.map((post, index) => (
            <BlogCard
              key={post.image}
              image={`/images/${post.image}`}
              title={post.title}
              delay={`${index * 0.2}s`}
            />
          ))}
          <div className="col-lg-12">
            <div className="our-blog-footer wow fadeInUp" data-wow-delay="0.6s">
              <Link href="/blog" className="btn-default">See All Blogs</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
