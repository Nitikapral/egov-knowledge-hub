import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Areas of Work", href: "#features" },
    { label: "Platform", href: "#platform" },
    { label: "Resources", href: "#resources" },
    { label: "Ecosystem", href: "#ecosystem" },
  ];

  return (
    <header className={`navbar-header${scrolled ? " navbar-scrolled" : ""}`} role="banner">
      <nav className="navbar-inner" aria-label="Main Navigation">

        <a href="#" className="nav-brand" aria-label="eGov Foundation — Home">
          <span className="brand-e">e</span>
          <span className="brand-gov">Com</span>
          <span className="brand-foundation">Foundation</span>
        </a>

        <ul className="nav-links" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta" aria-label="Get in touch with eGov">
          Get in Touch
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="visually-hidden">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className={`ham-line${menuOpen ? " open" : ""}`} aria-hidden="true" />
          <span className={`ham-line${menuOpen ? " open" : ""}`} aria-hidden="true" />
          <span className={`ham-line${menuOpen ? " open" : ""}`} aria-hidden="true" />
        </button>
      </nav>

     
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="mobile-nav-cta" onClick={() => setMenuOpen(false)}>
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;