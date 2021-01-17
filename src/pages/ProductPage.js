import React from 'react'
import {Link} from 'react-router-dom'
import Product from '../components/Product'

const ProductPage = ({match}) => {
    return ( 
        <div>
            <h1>Strona Produktu</h1>
            <Product id={match.params.id}/>
            <Link to="/products">Powrót do listy produktów</Link>
        </div>
     );
}
 
export default ProductPage;