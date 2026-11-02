import Image from "next/image";

const quote = "I couldn't be happier with the transformation of my home! From our very first consultation, the team took the time to understand my vision and preferences.";

export default function TestimonialsSection() {
  return (
    <section className="our-testimonials">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div className="our-testimonials-image">
              <figure className="image-anime"><Image src="/images/testimonial-img.jpg" alt="Beautifully finished interior design project" width={1000} height={900} /></figure>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our-testimonial-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">client testimonials</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Trusted by thousands of <span>people &amp; companies.</span></h2>
              </div>
              <div className="testimonial-slider">
                <div className="swiper">
                  <div className="swiper-wrapper" data-cursor-text="Drag">
                    {[1, 2].map((slide) => (
                      <div className="swiper-slide" key={slide}>
                        <article className="testimonial-item">
                          <div className="testimonial-rating" aria-label="5 out of 5 stars">
                            {Array.from({ length: 5 }, (_, star) => <i className="fa-solid fa-star" key={star} />)}
                          </div>
                          <div className="testimonial-content"><p>{quote}</p></div>
                          <div className="testimonial-body">
                            <div className="author-image"><figure className="image-anime"><Image src="/images/author-1.jpg" alt="Arlene McCoy" width={100} height={100} /></figure></div>
                            <div className="author-content"><h3>arlene mccoy</h3><p>co-founder</p></div>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="testimonial-rating-counter">
                <div className="rating-counter"><h2><span className="counter">4.82</span></h2></div>
                <div className="testimonial-rating-content">
                  <div className="testimonial-client-rating" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, star) => <i className="fa-solid fa-star" key={star} />)}
                  </div>
                  <p>2,488 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
