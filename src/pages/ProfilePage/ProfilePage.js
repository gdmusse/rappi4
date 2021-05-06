import React, { useContext, useEffect } from "react"
import axios from "axios"
import styled from "styled-components";
import GlobalStateContext from "../../global/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import BASE_URL from "../../constants/urls";
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import OrdersCard from "../../components/OrdersHistoryCard/ordersCard"
import {
  PostCardContainer,
  PostCardContent,
  LeftContent,
  RightContent,
  CardColor,
  ButtonProfile,
  ButtonEddress,
  TitleAddress,
  CardRes,
} from "./styled";
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { goToEditAddress, goToEditProfile } from "../../routes/coordinator";

const ProfilePage = () => {
  useProtectedPage();
  const history = useHistory();

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
    profile,
    setProfile,
    orders,
    setOrders
  } = useContext(GlobalStateContext);

  useEffect(() => {
    getProfile()
    getOrdersHistory()
  }, []);


  const getProfile = () => {
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  } 

  const getOrdersHistory = () => {
    axios
      .get(`${BASE_URL}/orders/history`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setOrders(res.data.orders);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  } 

  function dataDoPedido(data){
    const dia = data.getDate().toString().padStart(2, "0")
    const mes = (data.getMonth()+1).toString().padStart(2, "0")
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`
  }

  const ordersHistoryCards = orders.map((order) => {
      return (
        <div>
        <h1>{dataDoPedido(new Date(order.createdAt))}</h1>
        <OrdersCard
        restaurantName={order.restaurantName}
        />
        </div>
      );
  });

  console.log(profile);

    return (
      <div>
        <PostCardContainer>
          <PostCardContent>
            <LeftContent>
                <p>{profile.name}</p>
                <p>{profile.email}</p>
                <p>{profile.cpf}</p>
            </LeftContent>
          <RightContent>
              <ButtonProfile onClick={() => goToEditProfile(history)}><CreateOutlinedIcon/></ButtonProfile>
          </RightContent>
        </PostCardContent>
        </PostCardContainer>
        <CardColor>
          <PostCardContainer>
            <PostCardContent>
                  <LeftContent>
                    <TitleAddress>endereço de cadastro</TitleAddress>
                    <ProfileEddres>{profile.address}</ProfileEddres>
                  </LeftContent> 
                  <RightContent>
                    <ButtonEddress onClick={() => goToEditAddress(history)}><CreateOutlinedIcon/></ButtonEddress>
                  </RightContent>
            </PostCardContent>
          </PostCardContainer>
        </CardColor>
        <PostCardContainer>
          <p>Histórico de pedidos</p>
          <hr/>
          <div>{ordersHistoryCards}</div>
        </PostCardContainer>
      </div>
    );
  }
  
  export default ProfilePage;

  const Ender = styled.p`
  
  `

  const ProfileEddres = styled.p`
  
  `

