import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [selectcart, setSelectcart] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const addItemToCart = (newItem) => {
    const index = cart.findIndex((i) => i.id === newItem.id);
    let newCart = [...cart];
    if (index === -1) {
      newCart.push({ ...newItem, quantity: cartQuantity });
    } else {
      newCart[index].amount += cartQuantity;
    }
    setCart(newCart);
    alert(`${newItem.name} foi adicionado ao seu carrinho!`);
  };

  const removeItemFromCart = (itemToRemove) => {
    const index = cart.findIndex((i) => i.id === itemToRemove.id);
    let newCart = [...cart];
    if (newCart[index].amount === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].amount -= 1;
    }
    setCart(newCart);
  };

  console.log("esse é o array do carrinho",cart)
  
  return (
    <GlobalStateContext.Provider
      value={{
        openAlert,
        setOpenAlert,
        alertMsg,
        setAlertMsg,
        alertSeverity,
        setAlertSeverity,
        token,
        loading,
        setLoading,
        restaurants,
        setRestaurants,
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        cart, setCart,
        addItemToCart,
        removeItemFromCart,
        cartQuantity, setCartQuantity,
        selectcart, setSelectcart,
        selectedItem, setSelectedItem,



      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
