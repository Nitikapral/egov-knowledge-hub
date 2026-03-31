
import { useState } from "react";

const footerLinks = {
    "Shop": ["All Products", "New Arrivals", "Best Sellers", "Deals", "Gift Cards"],
  "Customer Service": ["Contact Us", "Track Order", "Returns", "Shipping Info", "FAQs"],};

const socials = [
  { label: "Facebook", icon: "f", href: "#" },
  { label: "X (Twitter)", icon: "𝕏", href: "#" },
  { label: "LinkedIn", icon: "in", href: "#" },
  { label: "YouTube", icon: "▶", href: "#" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); 

  const handleSubscribe = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <footer className="site-footer" role="contentinfo" id="contact">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <a href="#" className="footer-logo" aria-label="eGov Foundation — Home">
              <span className="brand-e">e</span>
              <span className="brand-gov text-light">Com</span>
            </a>
            <p className="footer-tagline">
Lorem ipsum, dolor sit amet consectetur adipisicing elit.            </p>
            <div className="footer-socials" role="list" aria-label="Social media">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-btn"
                  role="listitem"
                  aria-label={`Follow eCom on ${s.label}`}
                  rel="noopener noreferrer"
                >
                  <span aria-hidden="true">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

         
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="footer-nav-col">
              <h3 className="footer-col-heading">{heading}</h3>
              <ul role="list">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="footer-link">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

 
          <div className="footer-subscribe-col">
            <h3 className="footer-col-heading">Subscribe Now</h3>
            <p className="footer-sub-text">
              Get our monthly newsletter DOT straight to your inbox.
            </p>
            <form
              className="subscribe-form"
              onSubmit={handleSubscribe}
              noValidate
              aria-label="Newsletter subscription"
            >
              <label htmlFor="footer-email" className="visually-hidden">
                Email address
              </label>
              <div className="subscribe-row">
                <input
                  id="footer-email"
                  type="email"
                  className={`subscribe-input${status === "error" ? " input-error" : ""}`}
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  required
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={status === "error"}
                  aria-describedby="subscribe-feedback"
                />
                <button
                  type="submit"
                  className="subscribe-btn"
                  aria-label="Subscribe to newsletter"
                >
                  →
                </button>
              </div>
              <span
                id="subscribe-feedback"
                className={`subscribe-msg subscribe-msg-${status}`}
                role="status"
                aria-live="polite"
              >
                {status === "success" && "🎉 You're subscribed!"}
                {status === "error" && "Please enter a valid email."}
              </span>
            </form>
          </div>
        </div>

        <hr className="footer-divider" aria-hidden="true" />

        <div className="footer-bottom">
          <p>© 2024 eGov Foundation. All Rights Reserved.</p>
          <nav aria-label="Legal navigation">
            <ul role="list" className="footer-legal">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;