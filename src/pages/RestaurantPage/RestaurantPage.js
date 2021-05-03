import React from "react"
import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../../constants/urls";
import { ChevronLeftIconStyled } from "./styled";
import RestaurantCard from "../../components/RestaurantCard.js/ProductCard";
import * as S from '../../pages/RestaurantPage/styled'
import ProductCard from "../../components/RestaurantCard.js/ProductCard";

 const RestaurantPage = (props) =>  {
  const [restaurantDetails, setRestaurantDetails] = useState([]);

  // const params = useParams();

  // const history = useHistory();

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = () => {
    axios
      .get(`${BASE_URL}/restaurants/1`, {
        headers: {
          auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ims5WlphU0NtVWZ2NTFsVXBDWDRLIiwibmFtZSI6ImFkbWluZGV2IiwiZW1haWwiOiJhZG1pbmRldkBnLmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYyMDA1OTk0MH0.4fTfTkUtSy6ty-3_UMziJmlus4CtFDRVFx-xy3GO2J4",
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
      <RestaurantCard
        logoUrl={restaurantDetails.logoUrl}
        name={restaurantDetails.name}
        deliveryTime={restaurantDetails.deliveryTime}
        shipping={restaurantDetails.shipping}
        category={restaurantDetails.category}
        address={restaurantDetails.address}
      />
   

      <ChevronLeftIconStyled  />
      <S.RestaurantDetails>
        <S.AreaLogoRest>
          <S.ImageLogo src={restaurantDetails.logoUrl} />
        </S.AreaLogoRest>
        <S.RestaurantTitle> {restaurantDetails.name} </S.RestaurantTitle>
        <S.Burger> {restaurantDetails.category} </S.Burger>
        <S.Areatempo>
          <S.TempoDeEntrega>
            {restaurantDetails.deliveryTime}minutos
          </S.TempoDeEntrega>
          <S.Frete>Frete: {restaurantDetails.shipping} reais</S.Frete>
        </S.Areatempo>
        <S.Endereco>{restaurantDetails.address}</S.Endereco>
      </S.RestaurantDetails>
      <S.Principais>Principais</S.Principais>
      <hr />

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


// <S.Container>
      
// <ChevronLeftIconStyled  />
// <S.RestaurantDetails>
//   <S.AreaLogoRest>
//     <S.ImageLogo src={restaurantDetails.logoUrl} />
//   </S.AreaLogoRest>
//   <S.RestaurantTitle> {restaurantDetails.name} </S.RestaurantTitle>
//   <S.Burger> {restaurantDetails.category} </S.Burger>
//   <S.Areatempo>
//     <S.TempoDeEntrega>
//       {restaurantDetails.deliveryTime}minutos
//     </S.TempoDeEntrega>
//     <S.Frete>Frete: {restaurantDetails.shipping} reais</S.Frete>
//   </S.Areatempo>
//   <S.Endereco>{restaurantDetails.address}</S.Endereco>
// </S.RestaurantDetails>
// <S.Principais>Principais</S.Principais>
// <hr />
