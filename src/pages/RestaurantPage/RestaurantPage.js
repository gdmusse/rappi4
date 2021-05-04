import React from "react"
import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../../constants/urls";
import * as S from '../../pages/RestaurantPage/styled'
import ProductCard from "../../components/RestaurantCard.js/ProductCard";
import RestaurantCardDetails from "../../components/RestaurantCard.js/RestaurantCardDetails";
import { useParams } from "react-router-dom";

 const RestaurantPage = (props) =>  {
  const [restaurantDetails, setRestaurantDetails] = useState([]);


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ims5WlphU0NtVWZ2NTFsVXBDWDRLIiwibmFtZSI6ImFkbWluZGV2IiwiZW1haWwiOiJhZG1pbmRldkBnLmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYyMDA1OTk0MH0.4fTfTkUtSy6ty-3_UMziJmlus4CtFDRVFx-xy3GO2J4"
const params = useParams()


  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = () => {
    axios
      .get(`${BASE_URL}/restaurants/${params.id}`, {
        headers: {
          auth:token,
        },
      })
      .then((response) => {
        setRestaurantDetails(response.data.restaurant);
        console.log(response.data.restaurant);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (

    <S.Container>
      <RestaurantCardDetails
        logoUrl={restaurantDetails.logoUrl}
        name={restaurantDetails.name}
        deliveryTime={restaurantDetails.deliveryTime}
        shipping={restaurantDetails.shipping}
        category={restaurantDetails.category}
        address={restaurantDetails.address}
      />
    <S.MainTitleBar>Principais</S.MainTitleBar>
     
      {restaurantDetails &&
        restaurantDetails.products &&
        restaurantDetails.products.map((Item) => {
          return (
            <ProductCard
              restaurant={Item}
              key={Item.id}
              id={Item.id}
              name={Item.name}
              Photo={Item.photoUrl}
              description={Item.description}
              price={Item.price}
            />
          );
        })}

      
      
    </S.Container>
  );
}

export default RestaurantPage

