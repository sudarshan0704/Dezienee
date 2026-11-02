import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page not found"
        backgroundImage="/images/page-header-bg.jpg"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "404 error page" },
        ]}
      />
      <section className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-page-image" data-aos="fade-up">
                <Image
                  src="/images/404-error-img.png"
                  alt="404 - page not found"
                  width={720}
                  height={360}
                  priority
                />
              </div>
              <div className="error-page-content">
                <div className="section-title">
                  <h2 data-aos="fade-up" data-aos-delay="250">
                    Oops! page <span>not found</span>
                  </h2>
                </div>
                <div className="error-page-content-body">
                  <p data-aos="fade-up" data-aos-delay="500">
                    We searched everywhere but couldn&apos;t find what you&apos;re looking for.
                    Let&apos;s find a better place for you to go.
                  </p>
                  <Link
                    className="btn-default"
                    data-aos="fade-up"
                    data-aos-delay="750"
                    href="/"
                  >
                    <span>back to home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
