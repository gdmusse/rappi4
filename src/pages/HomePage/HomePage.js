import React, { useEffect, useContext } from "react";
import useInput from "../../hooks/useInput";
import TextField from "@material-ui/core/TextField";
import BASE_URL from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import axios from "axios";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { CollectionsBookmarkRounded } from "@material-ui/icons";
import styled from "styled-components";

const DivCards = styled.div`
  margin: 20px;
`;
const HomePage = () => {
  useProtectedPage();

  const {
    setAlertMsg,
    setAlertSeverity,
    setOpenAlert,
    setRestaurants,
    restaurants,
  } = useContext(GlobalStateContext);

  const history = useHistory();

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const restaurantsCategories = restaurants
    .map((restaurant) => {
      return restaurant.category;
    })
    .filter((category, index, self) => {
      return self.indexOf(category) === index;
    });
  const restaurantsCards = restaurants.map((restaurant) => {
    return (
      <RestaurantCard
        key={restaurant.id}
        logoUrl={restaurant.logoUrl}
        name={restaurant.name}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
      />
    );
  });

  return (
    <div>
      {restaurantsCategories}

      <DivCards>{restaurantsCards}</DivCards>
    </div>
  );
};

export default HomePage;
