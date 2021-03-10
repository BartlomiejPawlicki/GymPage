import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../components/DataProvider";
import "../style/SeperateProduct.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);

      setTotal(res);
    };
    getTotal();
  }, [cart]);

  if (cart.length === 0) {
    return <h1 style={{ fontSize: "2rem" }}>Nie masz produktów w karcie </h1>;
  }

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? item.count = 1 : item.count -= 1;
      }
    });
    setCart([...cart]);
  };
  const addition = (id) => {
 
    cart.forEach((item) => {
      console.log(item)
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };


 const deleteItem = (id) => {
   cart.forEach((item,index)=> {
     if(item.id === id) {
       cart.splice(index,1)
     }
     setCart([...cart])
   })
 }

  return (
    <>
    <h1 style={{paddingTop:"30px"}}>Twój koszyk</h1>
      {cart.map((product, index) => (
        <div className="details products" key={index}>
          <div className="img__container">
            <img className="img" src={product.img} alt="" />
            <div className="box__details">
              <h2>{product.name}</h2>
              <h3> {product.price} zł</h3>
              <p>{product.description}</p>
              <div className="amount">
                <button onClick={() => reduction(product.id)}>-</button>
                <span>{product.count}</span>
                <button onClick={() => addition(product.id)}>+</button>
              </div>
              <div className="delete" onClick = {() => deleteItem(product.id)}>X</div>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <Link to="/payment">Payment</Link>
        <h3>Total: {total}  PLN</h3>
      </div>
    </>
  );
}
