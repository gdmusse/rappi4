import { Card, makeStyles, Typography } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import React from "react";
import * as S from "../../pages/RestaurantPage/styled";

const useStyles = makeStyles({

});
function ProductCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Card>
        
        <S.CardImgComida src={props.Photo} alt='comida' />
        <S.AreaItensLanche>
        <Typography color="primary" className={classes.title} gutterBottom >
            {props.name}
          </Typography>
     
          <S.ItensDoLanche>{props.description}</S.ItensDoLanche>
          <S.Preco>R$ {props.price} reais </S.Preco>
        <S.ButtonAdd>
          {" "}
          <S.Adicionar>adicionar</S.Adicionar>
        </S.ButtonAdd>
        </S.AreaItensLanche>
      </Card>
    </div>
  );
}

export default ProductCard;
