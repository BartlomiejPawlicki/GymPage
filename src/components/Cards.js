import React from "react";
import CardItem from "./CardItem";
import "../style/Cards.css";
import productImage from '../pictures/product.jpg'
import machineImage from '../pictures/machines.jpg'
import contactForm from '../pictures/formularz.png'
import adminPhoto from '../pictures/adm.jpeg'
import adminSecondPhoto from '../pictures/adminpanel2.jpg'

const Cards = () => {
  return (
    <div className="cards">
      <h1>Zobacz na naszą ofertę</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src={productImage} alt="product"
              text="Przetestuj nasze produkty Gold's gym"
              label="Nasze produkty"
              path="/products"
            />
            <CardItem
              src={machineImage} alt="machine"
              text="Zobacz na zadowolonych użytkowników"
              label="Zadowoleni użytkownicy"
              path="/users"
            />
            <CardItem
              src={contactForm} alt="contact"
              text="Wypełnij formularz kontaktowy!"
              label="Formularz kontaktowy"
              path="/contact"
            />
          </ul>
          <ul className="cards__item"> 
            <CardItem
              src={adminPhoto} alt ="admin"
              text="Zaloguj się na stronę admina"
              label="Panel Admin"
              path="/ProductPage"
            />
            <CardItem
              src={adminSecondPhoto}
              text="Zaloguj się na stronę admina" alt="secondAdmin"
              label="Panel Admin"
              path="/ProductPage"
            />
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
