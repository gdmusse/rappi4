import React, { useEffect, useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  AddressBox,
  ProductCart,
  RestaurantDetails, 
  Total,
  Payment,
} from './index'
import {
  Height,
  DivPadding,
  Confirm,
  Spacing
} from './styled'
import {
  mainGray,
  primaryColor,
} from '../../constants/colors'

const useStyles = makeStyles((theme) => ({

  primaryColor: {
    color: [primaryColor],
  },

  blackColor: {
    color: 'black',
  },
  mainGray: {
    color: [mainGray],
  },
  bold: {
    fontWeight: 'bold',  
  },
  font18: {
    fontSize: '18px',
  },
  font16: {
    fontSize: '16px',
    lineHeight: '25px',
  },
  font14: {
    fontSize: '4px',
    lineHeight: '20px',
  },
}));

const CartPage = () => {
    const classes = useStyles();

    const {
      setActualPage,
      cart
    } = useContext(GlobalStateContext);

    useEffect(() => {
      setActualPage('Meu carrinho')
    }, []);

    console.log(cart)

    return (

      <Height> 
        <div> 
          <AddressBox/>

          <RestaurantDetails/>
        
          {cart.length > 0 ?
            cart.map (product => (
              <ProductCart product={product}/> 
            )) : 'Carrinho vazio'
          }
            
          <Total/> 

          <Payment/>
        </div>
      

      <DivPadding $padding='0px 20px 20px 20px'>
        <Confirm>Confirmar</Confirm>
        <Spacing/>
      </DivPadding>


      </Height>

    );
  }
  
  export default CartPage