import React from "react";
import OffersItem from "./OffersItem";
import "../style/Offers.css";
import productImage from '../pictures/product.jpg'
import machineImage from '../pictures/machines.jpg'
import contactForm from '../pictures/formularz.png'
import adminPhoto from '../pictures/adm.jpeg'
import adminSecondPhoto from '../pictures/adminpanel2.jpg'

const Offers = () => {
  return (
    <div className="offers">
      <h1>Spójrz na naszą ofertę</h1>
      <div className="offers__container">
        <div className="offers__wrapper">
          <ul className="offers__item">
            <OffersItem
              src={productImage} alt="product"
              text="Przetestuj nasze produkty Gold's gym"
              label="Nasze produkty"
              path="/products"
            />
            <OffersItem
              src={machineImage} alt="machine"
              text="Zobacz na zadowolonych użytkowników"
              label="Zadowoleni użytkownicy"
              path="/users"
            />
            <OffersItem
              src={contactForm} alt="contact"
              text="Wypełnij formularz kontaktowy!"
              label="Formularz kontaktowy"
              path="/contact"
            />
          </ul>
          <ul className="offers__item"> 
            <OffersItem
              src={adminPhoto} alt ="admin"
              text="Zaloguj się na stronę admina"
              label="Panel Admin"
              path="/login"
            />
            <OffersItem
              src={adminSecondPhoto}  alt="secondAdmin"
              text="Zaloguj się na stronę admina"
              label="Panel Admin"
              path="/login"
            />
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Offers;
