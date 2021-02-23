import React, { useContext } from "react";
import {DataContext} from '../components/DataProvider'
import { Link } from "react-router-dom";
import "../style/ProductPageList.css";
 
const ProductListPage = () => {

  const [products,setProducts] = useContext(DataContext)
     

  return (
    <div className="main">
      <div className="cart__box">
        <h3>Go to Cart </h3>
        <a className="fas fa-shopping-basket">
          <div className="cart__icon--number">{}</div>
        </a>
      </div>
      <h2 className="main__header">Lista Produktów</h2>
      <div className="container">
        <ul className="products">
          {products.map((product) => (
            <li className="products__list" key={product.id}>
                  <Link to={`/products/${product.id}`}><img src={product.img} alt="protein" /></Link>
            
              <h2 className="products__name">
                <Link to={`/products/${product.id}`}>{product.name}</Link> 
                </h2>
              <h3 className="products__cost">{product.cost}</h3>
              <div className="products__wrapper">
                <button className="add__cart">
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductListPage;
