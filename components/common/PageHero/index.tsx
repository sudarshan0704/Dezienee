import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  backgroundImage: string;
  breadcrumbs: BreadcrumbItem[];
};

export default function PageHero({
  title,
  backgroundImage,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section
      className="page-header parallaxie"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      aria-label={`${title} page heading`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-2" data-cursor="-opaque">
                {title}
              </h1>
              <nav className="wow fadeInUp" aria-label="Breadcrumb">
                <ol className="breadcrumb">
                  {breadcrumbs.map((item, index) => {
                    const isCurrent = index === breadcrumbs.length - 1;
                    return (
                      <li
                        className={`breadcrumb-item${isCurrent ? " active" : ""}`}
                        aria-current={isCurrent ? "page" : undefined}
                        key={`${item.label}-${index}`}
                      >
                        {item.href && !isCurrent ? (
                          <Link href={item.href}>{item.label}</Link>
                        ) : (
                          item.label
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
