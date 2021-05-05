import {  makeStyles, Typography } from "@material-ui/core";
import React, { useContext} from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { ButtonAdd, StyledCard,CardImgFood, InfoItemFood, } from "./styled";

const useStyles = makeStyles({

});
function ProductCard(props) {
  const classes = useStyles();
   const { setSelectedItem,  setSelectcart} = useContext(GlobalStateContext);
  

  const selectItemToCart = () => {
    setSelectcart(true)  
    setSelectedItem(props.resta);
  }


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
        
        <ButtonAdd  onClick={selectItemToCart} >
          { "adicionar" }
        </ButtonAdd>
        </InfoItemFood>
      </StyledCard>

    </div>
  );


}

export default ProductCard;
