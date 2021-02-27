import React from 'react';
import {Link} from 'react-router-dom'
 
function OffersItem (props) {

 
    return (
        <>
        <li className="offers__item">
            <Link className="offers__item__link" to={props.path}>
            <figure className="offers__item__pic-wrap" data-category={props.label}>
                <img src={props.src} alt="gym"
                className="offers__item__img" />
            </figure>
            <div className="offers__item__info">
             <h5 className="offers__item__text">{props.text}</h5>
            </div>

            </Link>

        </li>
        </>
    )
}

export default OffersItem