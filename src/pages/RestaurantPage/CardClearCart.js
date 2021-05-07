import React, { useContext} from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  OrderButton,
  CloseButton,
  OrderImage,
  SelectionTitle,
  InputAdd,
} from "./styled";
import Box from "@material-ui/core/Box";
import GlobalStateContext from "../../global/GlobalStateContext";
import { primaryColor } from "../../constants/colors";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0",
    color: "primary",
  },
}));

export default function ClearCart(props) {
  const {
    setSelectcart, setCardClearCart , setCart,
  } = useContext(GlobalStateContext);

  const onClickRemove = () => {
    setCart([]);
    setCardClearCart(false);
    setSelectcart(true);
  };
  const onClickCancel = () => {
    setCardClearCart(false);
  };

  return (
    <Card
      style={{
        backgroundColor:"#E86E5A",
        width: "100%",
        alignItems: "center",
        position: "fixed",
        bottom: "0",
        zIndex: "100",
      }}
    >
     
      <SelectionTitle>
        <h3>Você só pode adicionar itens de um restaurante por vez.</h3> </SelectionTitle>

      <Typography
        variant='body2'
        textAlign='center'
        color='textSecondary'
        component='p'
      >
        <Box textAlign='center' m={1}>
        <h5>Deseja esvaziar a sacola e adiconar este Item?</h5>
        </Box>
      </Typography>
     

      <br />

      <Button
        onClick={onClickRemove}
        color="black"
        style={{ fontSize: "0.8rem" }}
      >
       <h5>Esvaziar minha sacola </h5> 
      </Button>
      <Button
        onClick={onClickCancel}
        color="white"
        style={{ fontSize: "0.8rem" }}
     
      >
       <h5> Cancelar</h5>
      </Button>
    </Card>
  );
}
