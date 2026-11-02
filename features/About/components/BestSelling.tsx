import Image from "next/image";

export default function BestSelling() {
  return (
    <section className="best-selling">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="best-selling-content">
              <div className="best-selling-content-img"><figure className="image-anime reveal"><Image src="/images/best-selling-img-1.jpg" alt="Close-up of carefully selected interior finishes" width={700} height={500} /></figure></div>
              <div className="section-title">
                <h3 className="wow fadeInUp">best selling finishes</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">We use materials only from personally <span>verified suppliers</span></h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Gloss, matte, wood texture, and more than 200 colors to choose from. We select environmentally friendly materials and ensure all certifications are available.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6"><div className="best-selling-iamge"><figure className="image-anime reveal"><Image src="/images/best-selling-img-2.jpg" alt="A finished interior with distinctive materials" width={800} height={900} /></figure></div></div>
        </div>
      </div>
    </section>
  );
}
