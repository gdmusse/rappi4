import { Card, CardContent, Typography } from "@material-ui/core";
import styled from "styled-components";
import { mainGray } from "../../constants/colors";

export const DivDetailsRestaurant = styled.div`
  display: flex;
  flex-direction:column;
  gap:8px;

`;
export const StyledTypographyTime = styled(Typography)`
  display: flex;
  flex-direction:row;
  gap:50px;

`;

export const StyledCardContent= styled(CardContent)`
  margin:-12px;

`;

export const StyledCard= styled(Card)`
display:flex;
flex-direction:row;
border:solid 1px ${mainGray};

`;

export const CardImgFood = styled.img`
  width: 100px;
`;

export const InfoItemFood = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-top:10%;

`;
export const ButtonAdd = styled.span`
  width: 70px;
  height: 10px;
justify-content:end;

  align-items: flex-end;
  justify-self:flex-end;
  align-self:flex-end;
  padding: 12px;
  color: red;
  cursor: pointer;
  border-radius: 10px 0px 10px 0px;
  border: solid 1px;
`;



