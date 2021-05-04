import { Card, makeStyles, Typography } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import React, { useState } from "react";
import * as S from "../../pages/RestaurantPage/styled";
import { ButtonAdd, StyledCard,CardImgFood, InfoItemFood, } from "./styled";

const useStyles = makeStyles({

});
function ProductCard(props) {
  const classes = useStyles();
  const [ inTheCart, setInTheCard] = useState(true)

  return (
    <div>
      <StyledCard
        style={{
          boxShadow: "none",
          borderRadius:" 10px " ,
          margin: "5%",
  
        }}
      >
         <CardImgFood src={props.Photo} alt='comida' />
        <InfoItemFood>
          
        <Typography color="primary" className={classes.title} gutterBottom >
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
              {props.description} 
            </Typography>
            <Typography variant="body2" textcolor="primary">
              R$ {props.price} 
            </Typography>
        
        <ButtonAdd >
          {!inTheCart ? "adicionar" : "remover"}
        </ButtonAdd>
        </InfoItemFood>
      </StyledCard>
    </div>
  );
}

export default ProductCard;
