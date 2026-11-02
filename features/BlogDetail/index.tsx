import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import type { BlogPost } from "@/data/blog/posts";

type BlogDetailProps = {
  post: BlogPost;
};

export default function BlogDetail({ post }: BlogDetailProps) {
  return (
    <>
      <PageHero
        title={post.title}
        backgroundImage="/images/page-header-bg.jpg"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "blog", href: "/blog" },
          { label: `${post.title.slice(0, 28)}...` },
        ]}
      />

      <section className="page-single-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="post-image">
                <figure className="image-anime reveal">
                  <Image
                    src={`/images/${post.image}`}
                    alt={post.title}
                    width={1400}
                    height={700}
                    priority
                    style={{ width: "100%", height: "auto" }}
                  />
                </figure>
              </div>

              <article className="post-content">
                <div className="post-entry">
                  <p data-aos="fade-up">{post.introduction}</p>
                  <p data-aos="fade-up" data-aos-delay="200">{post.paragraphs[0]}</p>
                  <blockquote data-aos="fade-up" data-aos-delay="400">
                    <p>{post.quote}</p>
                  </blockquote>
                  <p data-aos="fade-up" data-aos-delay="600">{post.paragraphs[1]}</p>
                  <h2 data-aos="fade-up" data-aos-delay="800">{post.sectionTitle}</h2>
                  <p data-aos="fade-up" data-aos-delay="1000">{post.sectionSummary}</p>
                  <ul data-aos="fade-up" data-aos-delay="1200">
                    {post.takeaways.map((takeaway) => (
                      <li key={takeaway}>{takeaway}</li>
                    ))}
                  </ul>
                  <p data-aos="fade-up" data-aos-delay="1400">{post.conclusion}</p>
                </div>

                <div className="post-tag-links">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags" data-aos="fade-up">
                        <span className="tag-links">
                          Tags:
                          {post.tags.map((tag) => (
                            <span className="post-tag" key={tag}>{tag}</span>
                          ))}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="post-social-sharing" data-aos="fade-up">
                        <Link href="/blog" className="post-btn">back to blog</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
