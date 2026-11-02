import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="container" aria-label="Main navigation">
          <div className="navbar navbar-expand-lg">
            <Link className="navbar-brand" href="/" aria-label="Dezinee home">
              <Image src="/images/logo/logo-2.webp" alt="Dezinee" width={200} height={60} priority />
            </Link>

            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  {navigation.map(({ label, href }) => (
                    <li className="nav-item" key={href}>
                      <Link className="nav-link" href={href}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="header-btn d-inline-flex">
                <Link href="/contact" className="btn-default">
                  Get in touch
                </Link>
              </div>
            </div>

            <div className="navbar-toggle" aria-hidden="true" />
          </div>
        </nav>
        <div className="responsive-menu" />
      </div>
    </header>
  );
}