// import React from 'react';

import styled from "styled-components";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import EditIcon from "@material-ui/icons/Edit";
import { CircularProgress } from '@material-ui/core';


// // styled LoginPage //

// export const FormLogin = styled.form``;
// export const TitleLogin = styled.p``;
// export const TitleLogoLogin = styled.img``;
// // styled LoginPage //

// // styled SignUpPage //

// export const FormSignUp = styled.form``;
export const TitleLogo = styled.img`
  width: 70px;
`;

// styled LoginPage & SignUpPage OK//

export const FormInputsLogin = styled.form`
  display: flex;
  flex-direction: column;
  height: 20vh;
  width: 335px;
  justify-content: space-around;
  margin-top: 20%;
  margin-left: 3%;
  margin-bottom: 5%;
`;
export const FormInputsSignUp = styled.form`
  display: flex;
  flex-direction: column;
  height: 20Vh;
  width: 335px;
  justify-content: space-around;
  margin-top: 32%;
  margin-left: 3%;
  margin-bottom: 5%;
`;

export const TitleLogoLogin = styled.img`
  width: 150px;
`;
export const P = styled.p`
  text-align: center;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AreaButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const ChevronLeftIconStyled = styled(ChevronLeftIcon)`
  margin: 0;
  margin-bottom: 2%;
`;

export const CircularProgressStyled = styled(CircularProgress)`
   margin: 65% 45%;
`;

// styled ShoppingCart //
export const DeliveryAddress = styled.div`
  background-color: #eeeeee;
  padding: 5px 10px;
  p {
    line-height: 0.3;
  }
  p:nth-child(1) {
    font-size: 14px;
    color: #b8b8b8;
  }
  p:nth-child(2) {
    font-size: 15px;
  }
`;

export const RestaurantAddress = styled.div`
  padding: 0 10px;
  p {
    line-height: 0.5;
    font-size: 14px;
  }
  p:nth-child(1) {
    color: #e86e5a;
  }
  p:nth-child(n + 2) {
    font-size: 14px;
    color: #b8b8b8;
  }
`;

export const Payment = styled.div`
  padding: 0 10px;
  font-size: 15px;
  p {
    line-height: 0;
  }
  p:nth-child(1) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  p:nth-child(2) {
    color: #e86e5a;
  }
`;

export const ConfirmButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  margin: 0 auto;
  margin-top: 10px;
`;

export const Container = styled.div`
  height: 640px;
  width: 360px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border: 1px solid black;
  overflow-y: auto;
`;

export const ContainerHome = styled.div`
  background-color: #e86e5a;
  height: 640px;
  width: 360px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;

export const ImgLogo = styled.img`
  display: flex;
  text-align: center;
  width: 126px;
  height: 65px;
  padding: 288px 117px 287px;
  cursor: pointer;
  &:hover {
    width: 100px;
    height: 50px;
  }
`;

export const RestaurantDetails = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 360px;
  max-width: 465px;
  margin: 0;
  /* border: 1px solid black; */
  box-sizing: border-box;
`;

export const title = styled.div`
  height: 44px;
  margin: 20px 92px 0 54px;
  padding: 13px 45.5px 12px;
`;
export const AreaLogoRest = styled.div`
display:flex;
align-items:center;
margin-left:105px;
`;

export const ImageLogo = styled.img`
  width: 150px;
  height: 150px;

`;
export const RestaurantTitle = styled.div`
  width: 328px;
  height: 18px;
  margin: 12px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
`;
export const Burger = styled.div`
  width: 104px;
  height: 18px;
  margin: 8px 8px 8px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;
export const Areatempo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TempoDeEntrega = styled.p`
  width: 104px;
  height: 18px;
  margin: 8px 8px 10px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const Frete = styled.p`
  width: 104px;
  height: 18px;
  margin: 8px 128px 10px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const Endereco = styled.div`
  width: 328px;
  height: 18px;
  margin: 10px 16px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const Principais = styled.p`
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;

export const Rectangle = styled.div`
  width: 210px;
  height: 112px;
  margin: 7px 15px 5px;
  padding: 18px 0 0 113px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  justify-content: space-between;
`;

export const ImgBurguer = styled.img`
  width: 97px;
  height: 113px;
`;

export const AreaImg = styled.div`
  display: flex;

`;

export const CardImgComida = styled.img`
  width:100px;
  height:100px;
  margin-left:10px;

`

export const AreaItensLanche = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const NomeDoItem = styled.p`
  width: 166px;
  height: 18px;
  margin: 0 49px 6px 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
`;

export const ItensDoLanche = styled.p`
  width: 198px;
  height: 30px;
  margin: 6px 17px 6px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.34px;
  color: #b8b8b8;
`;

export const Preco = styled.p`
  width: 108px;
  height: 19px;
  margin: 6px 17px 15px 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;

export const ButtonAdd = styled.span`
  width: 40px;
  height: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  padding: 8px 20.5px 9px 21.5px;
  color: red;
  cursor: pointer;
  border-radius: 8px;
  border: solid 1px;
`;

export const Adicionar = styled.div`
  width: 48px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: red;
`;

export const ButtonAddR = styled.span`
  width: 40px;
  height: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: -20px 0 0 100px;
  padding: 8px 20.5px 9px 21.5px;
  color: black;
  cursor: pointer;
  border-radius: 8px;
  border: solid 1px;
`;

export const Remover = styled.div`
  width: 48px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: black;
`;

export const Acompanhamentos = styled.div`
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;

// styled RestaurantPage //

// styled ConfirmationPage //

export const ConfirmationContainer = styled.div`
  width: 328px;
  height: 216px;
  margin: 150px 16px 29px;
  padding: 11px 0 68px;
  background-color: white;
  border: solid 1px black;
`;

export const TitleConfirmation = styled.p`
  width: 360px;
  height: 42px;
  margin: 28px 0 52px;
  padding: 6px 50px 12px 16px;
`;

export const ConfirmationText = styled.p`
  width: 296px;
  height: 18px;
  margin: 6px 0 100 16px;
  font-family: Roboto;
  font-size: 16px;
`;

export const ConfirmationContainerSmall = styled.div`
  width: 260px;
  height: 30px;
  margin: 9px 16px 0;
  padding: 16px;
  border-radius: 4px;
  border: solid 1px black;
  display: flex;
  justify-content: space-between;
`;

export const Contador = styled.p`
  width: 232px;
  height: 18px;
  margin: 3px 8px 3px 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;

export const dropdown = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  object-fit: contain;
  cursor: pointer;
`;

export const AdicionarAoCarrinho = styled.button`
  width: 220px;
  height: 19px;
  margin: 7px 16px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  text-align: right;
  color: #4a90e2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
`;

// styled AdressPage //

export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 96%;
  max-width: 465px;
  margin: 0 auto;
`;

// export const AdressContainer = styled.div
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   width: 96%;
//   max-width: 465px;
//   margin: 0 auto;
//

export const FormAdress = styled.form`
  height: 20vh;
  width: 335px;
  justify-content: space-around;
  margin-top: 18%;
  margin-left: 3%;
  margin-bottom: 5%;
`;

export const TitleAdress = styled.p`
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 16px;
  margin: 60% 34% 6%;

`;

export const LineHeader = styled.hr`
  width: 97%;
`;



// styled FeedPage //

export const RectangleFeed = styled.p`
  width: 328px;
  height: 30px;
  padding: 16px 8px 16px 17px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`;
export const Text = styled.p`
  display: flex;
  justify-content: center;
`;

export const TextCopy = styled.p`
  width: 87px;
  white-space: nowrap;
  height: 18px;
  margin: 0 80px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`;

export const TextCopy3 = styled.p`
  width: 59px;
  height: 18px;
  margin: 0 0 0 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`;

export const DivText = styled.div`
  display: flex;
`;

export const DivisaoPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivTextDeliveryFee = styled.p`
  margin-left: 190px;
  bottom: 30px;
  position: relative;
`;
export const ScreenShot = styled.img`
  width: 200px;
  height: 200px;
  margin: 20 0 18px;
  object-fit: contain;
`;

export const ScreenShot2 = styled.img`
  width: 200px;
  height: auto;
  margin: 0 0 12px;
  object-fit: contain;
  bottom: 30px;
  position: relative;
`;

export const Rest = styled.p`
  width: 296px;
  height: 18px;
  margin: 12px 16px 4px;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
`;

export const Rest2 = styled.p`
  width: 296px;
  height: 18px;
  margin: 0px 16px 4px;
  bottom: 30px;
  position: relative;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
`;

export const Time = styled.p`
  width: 148px;
  height: 18px;
  margin: 4px 8px 0 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const deliveryFee = styled.p`
  width: 140px;
  height: 18px;
  margin: 4px 16px 0 8px;
  bottom: 5px;
  position: relative;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: left;
  color: #b8b8b8;
`;

export const Description = styled.p`
  font-family: Roboto;
  font-size: 16px;
`;

export const deliveryFee2 = styled.p`
  width: 140px;
  height: 18px;
  bottom: 35px;
  position: relative;
  margin: 4px 16px 0 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: #b8b8b8;
`;

export const Time2 = styled.p`
  width: 148px;
  height: 18px;
  bottom: 30px;
  position: relative;
  margin: 4px 8px 0 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const DivContainer2 = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextCategory = styled.p`
  display: flex;
  justify-content: center;
`;

export const TextCategory2 = styled.p`
  display: flex;
  align-items: flex-start;
`;

// Final styled FeedPage //

// styled Search Place Holder Page //

export const Seta = styled.div`
  width: 23px;
  height: 24px;
  margin: 10px 54px 10px 16px;
  bottom: 40px;
  position: relative;
`;

// Final styled Search Place Holder Page //

// styled AdressEditPage //
export const FormEditAdress = styled.form`
  display: flex;
  flex-direction: column;
  height: 20vh;
  width: 335px;
  justify-content: space-around;
  margin-top: 54%;
  margin-left: 3%;
  margin-bottom: 5%;
`;

// styled SignUpEditPage //
export const FormEditSignUp = styled.form`
  display: flex;
  flex-direction: column;
  height: 20vh;
  width: 335px;
  justify-content: space-around;
  margin-top: 32%;
  margin-left: 3%;
  margin-bottom: 5%;
`;


// styled ProfilePage //
export const InfoUserContainer = styled.div`
  margin-top: 5%;
  margin-left: 4%;
  word-break: break-all;
  &:active {
    background-color: #eeeeee;
  }
`;

export const EditIconStyled = styled(EditIcon)`
  float: right;
  margin-top: 4%;
  margin-right: 5%;
  margin-left: 15%;
`;

export const AddressUserContainer = styled.div`
  margin-top: 4%;
  margin-left: 4%;
  &:active {
 background-color: #eeeeee;
 word-break: break-all;
  }
`;

export const HistoryUserContainer = styled.div`
  margin-top: 8%;
  margin-left: 4%;
  &:active {
    background-color: #eeeeee;
  }
`;




