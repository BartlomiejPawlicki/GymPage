import React, { useContext } from "react";
import {DataContext} from '../components/DataProvider'
import { Link } from "react-router-dom";
import "../style/ProductPageList.css";
 
const ProductListPage = () => {
  const value =  useContext(DataContext)
  const [products] = value.products 
  const addCart = value.addCart 

  return (
    <div className="main">
      <h2 className="main__header">Lista Produktów</h2>
      <div className="container">
        <ul className="products">
          {products.map((product) => (
            <li className="products__list" key={product.id}>
                  <Link to={`/products/${product.id}`}><img className='product__img' src={product.img} alt="protein" /></Link>
            
              <h2 className="products__name">
                <Link to={`/products/${product.id}`}>{product.name}</Link> 
                </h2>
              <h3 className="products__cost">{product.cost}</h3>
              <div className="products__wrapper">
                <button onClick = {() => addCart(product.id)} className="add__cart">
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
