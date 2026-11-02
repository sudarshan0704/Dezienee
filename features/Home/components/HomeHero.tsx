import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="hero parallaxie" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10">
            <div className="hero-content">
              <div className="section-title">
                <h3>Inspired interiors</h3>
                <h1>Designing your dream spaces, one room at a time</h1>
                <p>
                  We create personalized, functional, and stylish interiors that
                  reflect your vision.
                </p>
              </div>
              <div className="hero-btn">
                <Link href="/about" className="btn-default">
                  Explore more
                </Link>
                <Link href="/projects" className="btn-default btn-highlighted">
                  View projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
