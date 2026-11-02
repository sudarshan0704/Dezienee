import BlogCard from "@/components/common/BlogCard";
import PageHero from "@/components/common/PageHero";
import { blogPosts } from "@/data/blog/posts";

export default function Blog() {
  return (
    <>
      <PageHero
        title="Our blog"
        backgroundImage="/images/page-header-bg.jpg"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "blog" },
        ]}
      />
      <section className="page-blog">
        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.image}
                image={`/images/${post.image}`}
                title={post.title}
                href={`/blog/${post.slug}`}
                delay={`${index * 0.2}s`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
