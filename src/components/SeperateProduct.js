import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";
import '../style/SeperateProduct.css'

export default function SeperateProduct() {
  const { id } = useParams();

  const [products, setProducts] = useContext(DataContext);

  const details = products.filter(
    (product, index) => parseInt(product.id) === parseInt(id)
  );

  return (
    <>
      {details.map((product) => (
        <div className="details" key={product.id}>
          <div className="img__container">
            <img className="img" src={product.img}  />
            <div className="box__details">
              <h2>{product.name}</h2>
              <h3>{product.cost}</h3>
              <p>{product.description}</p>
              <div className="taste">
                {product.taste.map((single, index) => (
                  <button className="taste__button" key={index}>{single}</button>
                ))}
              </div>
              <div className="cart">
                <button className="cart__button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
