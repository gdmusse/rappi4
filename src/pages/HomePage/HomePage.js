import React, { useEffect, useContext, useState } from "react";
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
import CategoryCard from "../../components/CategoryCard/CategoryCard";
const FullScreen = styled.div`
 width: 100%;
    height: 100%;
    overflow: hidden;
`
const DivCards = styled.div`
  margin: 20px;
`;

const DivCategories = styled.div`
      height: 100%;
    width: 100%;
    overflow: auto;
`;
const HomePage = () => {
  useProtectedPage();

  const {
    setAlertMsg,
    setAlertSeverity,
    setOpenAlert,
    setRestaurants,
    restaurants,
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
  } = useContext(GlobalStateContext);

  const history = useHistory();

  useEffect(() => {
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
  }, []);

  const restaurantsCategories = restaurants
    .map((restaurant) => {
      return restaurant.category;
    })
    .filter((category, index, self) => {
      return self.indexOf(category) === index;
    });

  const restaurantsCards = restaurants.map((restaurant) => {
    if (selectedCategory === "" || selectedCategory === null) {
      return (
        <RestaurantCard
          key={restaurant.id}
          logoUrl={restaurant.logoUrl}
          name={restaurant.name}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
        />
      );
    }
    if (selectedCategory !== "" && selectedCategory === restaurant.category) {
      return (
        <RestaurantCard
          key={restaurant.id}
          logoUrl={restaurant.logoUrl}
          name={restaurant.name}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
        />
      );
    }
  });

  useEffect(() => {
    setCategories(restaurantsCategories);
  }, [restaurantsCategories[0]]);

/*   console.log("rc", restaurantsCategories);

  console.log("categories", categories);
 */

  return (
    <FullScreen>
      <DivCategories>
        <CategoryCard />
      </DivCategories>

      <DivCards>{restaurantsCards}</DivCards>
    </FullScreen>
  );
};

export default HomePage;
