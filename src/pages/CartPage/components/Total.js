import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core"
import classNames from 'classnames'
import {
  DivPadding,
  BoxPrices,
  ShippingPrice,
} from '../styled'
import {
  mainGray,
  primaryColor,
} from '../../../constants/colors'

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

const Total = () => {
    const classes = useStyles()

    // className={classNames(classes.mainGray, classes.primaryColor)} 
    return (

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
    )
}

export default Total