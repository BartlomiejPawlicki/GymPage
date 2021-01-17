import React from 'react';
import {Link} from 'react-router-dom'
import "../style/ProductPageList.css"

const product = ['bike','car','water','shoes']


const ProductListPage = () => {

  const products = product.map(product =>
   <li key={product}>
    <Link to={`/product/${product}`}>{product}</Link>
  </li>)
  

    return (
        <div className="products">
       <h2>Lista Produktów</h2>
       <div>
         <ul>
           {products}
         </ul>
       </div>
        </div>
      );
}
 
export default ProductListPage;