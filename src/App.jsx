import "bulma/css/bulma.min.css";
import { useState, useEffect } from "react";
import { FaFacebook, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import logo from "/logo.jpeg";
import "./styles.css";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpeg"];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Cambiar imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Detectar scroll para cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="has-background-light">
      {/* 📌 Encabezado de Redes Sociales (Fijo) */}
      <div className="redes-sociales">
        <a href="https://wa.me/tuNumero" className="mx-3 has-text-white">
          <FaWhatsapp size={24} />
        </a>
        <a href="https://facebook.com/" className="mx-3 has-text-white">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com/" className="mx-3 has-text-white">
          <FaXTwitter size={24} />
        </a>
      </div>

      {/* 📌 Header con logo y menú (transparente al inicio, blanco al hacer scroll) */}
      <nav className={`navbar px-4 navbar-ajustado ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-brand">
          <img src={logo} alt="IE AMAUTA" className="logo" />
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a href="#nosotros" className="navbar-item has-text-primary-85	
">Nosotros</a>
            <a href="#docentes" className="navbar-item has-text-primary-85	
">Plana Docente</a>
            <a href="#galeria" className="navbar-item has-text-primary-85	
">Galería</a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-success">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
                </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 📌 Carrusel de pantalla completa */}
      <div className="carousel-container">
        <img src={images[currentImage]} alt="Carrusel" className="carousel-image fade" />
      </div>

      {/* 📌 Información de la IE */}
      <section className="section has-background-white">
        <div className="container">
          <h1 className="title has-text-centered">IE AMAUTA</h1>
          <p className="content has-text-justified">
            La Institución Educativa AMAUTA es un centro de formación comprometido con la excelencia académica...
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
