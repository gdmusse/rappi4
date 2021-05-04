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
`
const HomePage = () => {
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
          auth:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ims5WlphU0NtVWZ2NTFsVXBDWDRLIiwibmFtZSI6ImFkbWluZGV2IiwiZW1haWwiOiJhZG1pbmRldkBnLmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYyMDA1OTk0MH0.4fTfTkUtSy6ty-3_UMziJmlus4CtFDRVFx-xy3GO2J4",
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

  const restaurantsCards = restaurants.map((restaurant) => {
    console.log("logourl", restaurant.logoUrl)
    return (
      <RestaurantCard
        key={restaurant.id}
        id={restaurant.id}
        logoUrl={restaurant.logoUrl}
        name={restaurant.name}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
      />
   
    );
  });

  return <div> 
    <DivCards>{restaurantsCards}</DivCards>
    </div>;
};

export default HomePage;
