import React from "react";
import Article from "../components/Article";
import "../style/HomePage.css";
import Cards from "../components/Cards";
import CardIntroduction from '../components/CardIntroduction'
const articles = [
  {
    id: 1,
    title: "Co znajdziesz na stronie ?",
    author: "Karolina Kowalska",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    id: 2,
    title: "Co to jest gold's gym",
    author: "Karolina Kowalska",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 3,
    title: "Odzywki czym sa ?",
    author: "Karolina Kowalska",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo",
  },
  {
    id: 4,
    title: "Odzywki czym sa ?",
    author: "Karolina Kowalska",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

const HomePage = () => {
  const ArticleList = articles.map((list) => (
    <Article key={list.id} {...list} />
  ));

  return (
    <>
    <CardIntroduction/>
      <Cards/>
      <div className="home">{ArticleList}</div>
    </>
  );
};

export default HomePage;
