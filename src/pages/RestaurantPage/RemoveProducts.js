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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0",
    color: "primary",
  },
}));

export default function CardRemove(props) {
  const {
    removeItemFromCart,
    setSelectedItemRemove,
    selectedItem,
  } = useContext(GlobalStateContext);

  const onClickRemove = () => {
    removeItemFromCart(selectedItem);
    setSelectedItemRemove(false);
  };

  return (
    <Card
      style={{
        backgroundColor: "primary",
        width: "250px",
        alignItems: "center",
        position: "fixed",
        top: "150px",
        zIndex: "100",
      }}
    >
      <CloseButton onClick={() =>  setSelectedItemRemove(false)} color={"neutralColor"}>
        X
      </CloseButton>

      <SelectionTitle>Excluir do pedido </SelectionTitle>

      <Typography
        variant='body2'
        textAlign='center'
        color='textSecondary'
        component='p'
      >
        <Box textAlign='center' m={1}>
          { selectedItem.name}
        </Box>
      </Typography>
      <OrderImage src={selectedItem.photoUrl} />

      <br />

      <OrderButton
        onClick={onClickRemove}
        color={"neutralColor"}
        style={{ fontSize: "0.8rem" }}
      >
        REMOVER DO CARRINHO{" "}
      </OrderButton>
    </Card>
  );
}
