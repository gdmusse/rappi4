import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  mainGray,
  primaryColor,
} from '../../../constants/colors'
import {
    DivPadding,
    BoxProduct,
    ProductImg,
    BoxQuantity,
    BoxInfos,
    RemoveButton,
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
    font16: {
      fontSize: '16px',
      lineHeight: '25px',
    },
    font14: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  }));


const ProductCart = () => {
  const classes = useStyles();


    return (
        <DivPadding $padding='0px 20px 20px 20px'>
        <BoxProduct>

          <BoxQuantity>
            <Typography className={classes.primaryColor}  
              component='p'
            > 1
            </Typography>
          </BoxQuantity>
          
        
          <ProductImg src={'https://www.baressp.com.br/bares/fotos2/mc_donalds_5-min_120220191550.jpg'}/>

          <DivPadding $padding='20px 20px 20px 20px'> 
            <BoxInfos>
                <Typography className={classNames(classes.primaryColor, classes.font16)}   
                  component='p'
                > Stencil
                </Typography>

                <Typography className={classNames(classes.mainGray, classes.font14)}   
                  component='p'
                > Loren Ipsun Loren Ipsun
                </Typography>

                <Typography className={classNames(classes.blackColor, classes.font16)}   
                  component='p'
                > Stencil
                </Typography>
            </BoxInfos>
          </DivPadding>
          <RemoveButton>Remove</RemoveButton>
        </BoxProduct>

      </DivPadding>

    );
  }

export default ProductCart