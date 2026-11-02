import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import { galleryImages } from "@/data/gallery/images";

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Image gallery"
        backgroundImage="/images/page-header-bg.jpg"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "gallery" },
        ]}
      />
      <section className="page-gallery">
        <div className="container">
          <div className="row gallery-items page-gallery-box">
            {galleryImages.map((image, index) => (
              <div className="col-lg-4 col-6" key={image.src}>
                <div
                  className="photo-gallery"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  data-cursor-text="View"
                >
                  <Link href={image.src}>
                    <figure className="image-anime">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={680}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </figure>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
