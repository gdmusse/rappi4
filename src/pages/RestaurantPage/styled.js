// import React from 'react';

import styled from "styled-components";

export const Container = styled.div`
  width: clamp(340px, 92vw, 1024px);
  display: flex;
  flex-direction: column;
  justify-self: center;
  border: 1px solid black;
`;

export const MainTitleBar = styled.div`
  border-bottom: 1px solid black;
  margin:3%;
  padding-bottom:2%;
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
