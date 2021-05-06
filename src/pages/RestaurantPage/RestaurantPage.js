import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../../constants/urls";
import ProductCard from "../../components/RestaurantCard.js/ProductCard";
import RestaurantCardDetails from "../../components/RestaurantCard.js/RestaurantCardDetails";
import { useHistory, useParams } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";
import CardSelector from "./SelectProductTocard";
import { Container, MainTitleBar } from "./styled";
import CardRemove from "./RemoveProducts";

const RestaurantPage = (props) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const params = useParams();
  const history = useHistory();

  const { selectcart, selectedItemRemove, setActualPage, setBack } = useContext(
    GlobalStateContext
  );

  useEffect(() => {
    getRestaurantDetails();
    setActualPage("Restaurante");
    setBack(true);
  }, []);

  const getRestaurantDetails = () => {
    axios
      .get(`${BASE_URL}/restaurants/${params.id}`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setRestaurantDetails(response.data.restaurant);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  const showPage = () => {
    return selectcart ? (
      <CardSelector></CardSelector>
    ) : selectedItemRemove ? (
      <CardRemove></CardRemove>
    ) : null;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {showPage()}
      <Container>
        <RestaurantCardDetails
          logoUrl={restaurantDetails.logoUrl}
          name={restaurantDetails.name}
          deliveryTime={restaurantDetails.deliveryTime}
          shipping={restaurantDetails.shipping}
          category={restaurantDetails.category}
          address={restaurantDetails.address}
        />
        <MainTitleBar>Principais</MainTitleBar>

        {restaurantDetails &&
          restaurantDetails.products &&
          restaurantDetails.products.map((Item) => {
            if (Item.category !== "Acompanhamento" && Item.category !== "Bebida") {
              return (
                <ProductCard
                  category={Item.category}
                  prod={Item}
                  key={Item.id}
                  id={Item.id}
                  name={Item.name}
                  Photo={Item.photoUrl}
                  description={Item.description}
                  price={Item.price.toFixed(2)}
                />
              );
            }
          })}
          
  
        
        <MainTitleBar>Acompanhamentos</MainTitleBar> 

        {restaurantDetails &&
          restaurantDetails.products &&
          restaurantDetails.products.map((Item) => {
            if (Item.category === "Acompanhamento" || Item.category === "Bebida") {
              return (
                <ProductCard
                  category={Item.category}
                  prod={Item}
                  key={Item.id}
                  id={Item.id}
                  name={Item.name}
                  Photo={Item.photoUrl}
                  description={Item.description}
                  price={Item.price.toFixed(2)}
                />
              );
            }
          })}
          
        
      
      </Container>
    </div>
  );
};

export default RestaurantPage;
