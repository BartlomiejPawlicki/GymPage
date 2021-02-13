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
            <Link to="/sign up"></Link>
            <Link to="/careers">Jak działamy</Link>
            <Link to="/investors">Ile mamy oddziałów na świecie</Link>
            <Link to="/sign up">Historia Gold's Gym</Link>
          </div>
          <div className="footer-link-items">
            <h2>Kontakt</h2>
            <Link to="/sign up">Wypełni formularz kontaktowy</Link>
            <Link to="/careers">Kariera u nas</Link>
            <Link to="/investors">Nasi inwestorzy</Link>
            <Link to="/sign up">Nasz zespół!</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Informacje</h2>
            <Link to="/sign up">Siłownia a pandemia</Link>
            <Link to="/careers">Godziny otwarcia</Link>
            <Link to="/investors">Cennik</Link>
            <Link to="/sign up">Karnet</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/sign up">Youtube</Link>
            <Link to="/careers">Instagram</Link>
            <Link to="/investors">Twitter</Link>
            <Link to="/sign up">Facebook</Link>
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
