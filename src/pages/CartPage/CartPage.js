import React, { useEffect, useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import ProductCart from './ProductCart'
import { makeStyles } from "@material-ui/core/styles";
import {
  Height,
  DivAdress,
  DivPadding,
  BoxPrices,
  ShippingPrice,
  Linha,
  PaymentOption,
  Method,
  Confirm
} from './styled'
import {
  secondaryColor, 
  mainGray,
  primaryColor,
} from '../../constants/colors'
import { Typography } from "@material-ui/core"
import classNames from 'classnames'

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
    } = useContext(GlobalStateContext);

    useEffect(() => {
      setActualPage('Meu carrinho')
    }, []);

    // className={classNames(classes.mainGray, classes.primaryColor)} 
    return (

      <Height> 
        <div> 
          <DivAdress>
            <DivPadding>
                <Typography className={classNames(classes.mainGray, classes.font16)}  
                  component='p'
                > Endereço de entrega
                </Typography>
              
              <Typography className={classes.font16}
                  component='p'
                > Rua Alessandra Vieira, 42
              </Typography>
            </DivPadding>
          </DivAdress>

          <DivPadding>
            <Typography className={classNames(classes.primaryColor, classes.font16)}  
                component='p'
              > Bullguer Vila Madalena
            </Typography>
            <Typography className={classNames(classes.mainGray, classes.font16)}  
                component='p'
              > R. Fradique Coutinho, 1136 - Vila Madalena
            </Typography>
            <Typography className={classNames(classes.mainGray, classes.font16)}  
                component='p'
              > 30 - 45 min
            </Typography>
          </DivPadding>

          <ProductCart/>
          
          <DivPadding $padding='0px 20px 20px 20px'> 
            <BoxPrices>
            <Typography className={classNames(classes.blackColor, classes.font18)}  
                    component='p'
                  > SUBTOTAL
                </Typography>
              
              <ShippingPrice>
                <Typography className={classNames(classes.blackColor, classes.font16)}  
                    component='p'
                  > Frete R$6,00
                </Typography>

                <Typography className={classNames(classes.primaryColor, classes.font18, classes.bold)}  
                    component='p'
                  > R$67,00
                </Typography>
              </ShippingPrice>
            </BoxPrices>
          </DivPadding>

          <DivPadding $padding='0px 20px 20px 20px'> 
            <Typography className={classNames(classes.blackColor, classes.font16)}  
              component='p'
                  > Payment method
            </Typography>
            <Linha/>

            <Method>
              <PaymentOption type='radio' value='Cash' name='method' />Cash
            </Method>

            <Method>
              <PaymentOption type='radio' value='Credit' name='method' />Credit card
            </Method>

          </DivPadding>
      </div>
      
      <DivPadding>
        <Confirm>Confirm</Confirm>
      </DivPadding>

      </Height>

    );
  }
  
  export default CartPage