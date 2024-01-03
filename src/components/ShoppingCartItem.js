import React from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";



const Item = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const removeItem = (id) => {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
  };
  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={() => removeItem(props.id)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
