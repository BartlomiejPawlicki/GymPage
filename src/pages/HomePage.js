import React from "react";
import Article from "../components/Article";
import "../style/HomePage.css";
import Offers from "../components/Offers";
import OffersIntroduction from '../components/OffersIntroduction'
const articles = [
  {
    id: 1,
    title: "Dlaczego my ?",
    author: "Halinka Jaruk",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 2,
    title: "Co to jest gold's gym",
    author: "Karolina Kowalska",
    text:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 3,
    title: "Odzywki czym sa ?",
    author: "Karolina Kowalska",
    text:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

const HomePage = () => {
  const ArticleList = articles.map((list) => (
    <Article key={list.id} {...list} />
  ));

  return (
    <>
    <OffersIntroduction/>
      <Offers/>
      <div className="home">{ArticleList}</div>
    </>
  );
};

export default HomePage;
