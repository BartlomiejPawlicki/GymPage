import React from "react";
import "./style/Footer.scss";
import { Link } from "react-router-dom";
import { Button } from "./components/Button";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="subscription">
        <p className="subscription__heading">
          Zapisz się do naszego klubu
        </p>
        <p className="subscription__text"></p>
        <div className="subscription__area">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Twój email"
              className="subscription__input"
            />
            <Button buttonStyle="btn--outline">Subskrypcja</Button>
          </form>
        </div>
      </section>
      <div className="links">
        <div className="links__wrapper">
          <div className="links__item">
            <h2>O nas</h2>
            <Link to="/"></Link>
            <Link to="/">Jak działamy</Link>
            <Link to="/">Ile mamy oddziałów na świecie</Link>
            <Link to="/">Historia Gold's Gym</Link>
          </div>
          <div className="links__item">
            <h2>Kontakt</h2>
            <Link to="/">Wypełni formularz kontaktowy</Link>
            <Link to="/">Kariera u nas</Link>
            <Link to="/">Nasi inwestorzy</Link>
            <Link to="/">Nasz zespół!</Link>
          </div>
        </div>
        <div className="links__wrapper">
          <div className="links__item">
            <h2>Informacje</h2>
            <Link to="/">Siłownia a pandemia</Link>
            <Link to="/">Godziny otwarcia</Link>
            <Link to="/">Cennik</Link>
            <Link to="/">Karnet</Link>
          </div>
          <div className="links__item">
            <h2>Social Media</h2>
            <Link to="/">Youtube</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Facebook</Link>
          </div>
        </div>
      </div>
      <section className="socialmedia">
        <div className="socialmedia__wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Gold's Gym <i className="fas fa-dumbbell" />
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
