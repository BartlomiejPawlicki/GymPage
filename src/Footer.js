import React from "react";
import "./style/Footer.css";
import { Link } from "react-router-dom";
import {Button} from './components/Button'

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Zapisz się do naszego klubu
        </p>
        <p className="footer-subscription-text"></p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Twój email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subskrypcja</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>O nas</h2>
            <Link to="/"></Link>
            <Link to="/">Jak działamy</Link>
            <Link to="/">Ile mamy oddziałów na świecie</Link>
            <Link to="/">Historia Gold's Gym</Link>
          </div>
          <div className="footer-link-items">
            <h2>Kontakt</h2>
            <Link to="/">Wypełni formularz kontaktowy</Link>
            <Link to="/">Kariera u nas</Link>
            <Link to="/">Nasi inwestorzy</Link>
            <Link to="/">Nasz zespół!</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Informacje</h2>
            <Link to="/">Siłownia a pandemia</Link>
            <Link to="/">Godziny otwarcia</Link>
            <Link to="/">Cennik</Link>
            <Link to="/">Karnet</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Youtube</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Facebook</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Gold's Gym <i className="fas fa-dumbbell"/> 
            </Link>
          </div>
          <small className="website-rights">GOLD'S GYM ©</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              ariel-label="facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              ariel-label="facebook"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              ariel-label="facebook"
            >
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
