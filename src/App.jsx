// src/App.jsx
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductSection from "./components/ProductSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      {/* Skip link for keyboard/screen-reader users */}
      <a className="skip-link" href="#resources">
        Skip to resources
      </a>

      <Navbar />

      <main id="main" tabIndex={-1}>
        <Hero />
        <ProductSection />
      </main>

      <Footer />
    </>
  );
}

export default App;