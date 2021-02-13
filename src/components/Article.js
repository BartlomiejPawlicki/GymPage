import React from "react";

const Article = ({ title, author, text }) => {


  return (
    <div className="advices">
      <h3 className="advices__header" >
        {title}
      </h3>
      <span className="advices__author">
        {author}
      </span>
      <p className="advices__paragraph">{text}</p>
    </div>
  );
};

export default Article;
