import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  mainGray,
  primaryColor,
} from '../../../constants/colors'
import {
    DivPadding,
    DivAddress,
  } from '../styled'
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

const AddressBox = () => {
    const classes = useStyles();
    
    return (
        <DivAddress>
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
        </DivAddress>
    )
}

export default AddressBox
  