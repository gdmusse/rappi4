import React from "react";
import styled from 'styled-components'
import {
  secondaryColor, 
  mainGray,
  primaryColor,
} from '../../constants/colors'
import { Button, TextField, Typography, InputAdornment, IconButton } from "@material-ui/core"

const DivAdress = styled.div`
  background-color: ${secondaryColor};
  display: flex;
  align-items: center;
  padding: 20px;
` 



const CartPage = () => {

    return (
      <DivAdress>

        <Typography
        variant='body2'
        textAlign='center'
        color= 'textSecondary'
        component='p'
      > Endereço de entrega
      </Typography>
      
      <Typography
        variant='body2'
        textAlign='center'
        component='p'
      > Endereço de entrega
      </Typography>

        
      </DivAdress>

    );
  }
  
  export default CartPage