import React, { useState, useEffect } from "react";
import { CartContext } from "./contexts/CartContext";
import { loadCart } from "./store";


// Sepet verilerini localStorage'a kaydetmek için bir fonksiyon tanımlama
export const saveCart = (cart) => {
    // Sepet verilerini JSON dizgesine dönüştürme
    const cartJSON = JSON.stringify(cart);
    // JSON dizgesini localStorage'a kaydetme
    localStorage.setItem("cart", cartJSON);
  };
  
  // localStorage'dan sepet verilerini yüklemek için bir fonksiyon tanımlama
  export const loadCart = () => {
    // localStorage'dan JSON dizgesini alma
    const cartJSON = localStorage.getItem("cart");
    // JSON dizgesini JavaScript dizisine dönüştürme
    const cart = JSON.parse(cartJSON);
    // Diziyi döndürme
    return cart;
  };