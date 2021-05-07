import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core"
import classNames from 'classnames'
import {
  Height,
  DivPadding,
  Linha,
  PaymentOption,
  Method,
  Confirm,
  Spacing
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

const Payment = () => {

    const classes = useStyles();

    return (
        <DivPadding $padding='0px 20px 20px 20px'> 
        <Typography className={classNames(classes.blackColor, classes.font16)}  
          component='p'
              > Forma de pagamento
        </Typography>
        <Linha/>

        <Method>
          <PaymentOption type='radio' value='Cash' name='method' />Dinheiro
        </Method>

        <Method>
          <PaymentOption type='radio' value='Credit' name='method' />Cartão de crédito
        </Method>

      </DivPadding>
    )
}

export default Payment