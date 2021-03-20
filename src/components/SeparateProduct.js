import React, { useContext} from "react";
import { Link, useParams} from "react-router-dom";
import { DataContext } from "./DataProvider";
import '../style/SeparateProduct.scss'

export default function SeparateProduct() {
  const { id } = useParams();

  const value =  useContext(DataContext)
  const [products] = value.products 
  const addCart = value.addCart 

  const details = products.filter(
    (product) => parseInt(product.id) === parseInt(id)
  );

  return (
    <>
      {details.map((product) => (
        <div className="product__container" key={product.id}>
          <div className="img__container">
            <img className="img" src={product.img} alt=""  />
            <div className="box__details">
              <h2>{product.name}</h2>
              <h3>{product.price} zł</h3>
              <p>{product.description}</p>
              <div className="taste">
                {product.taste.map((single, index) => (
                  <button  className="taste__button" key={index}>{single}</button>
                ))}
              </div>
              <div className="cart">
                <Link to='/cart' onClick = {() => addCart(product.id)} className="cart__button">Add to Cart</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
