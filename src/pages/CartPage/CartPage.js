import React, { useEffect, useState, useContext } from "react";
import axios from 'axios'
import BASE_URL from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Typography } from "@material-ui/core"
import classNames from 'classnames'
import { makeStyles } from "@material-ui/core/styles";
import {
  AddressBox,
  ProductCart,
  RestaurantDetails, 
  Total,
} from './index'
import {
  Height,
  DivPadding,
  Linha,
  PaymentOption,
  Method,
  Confirm,
  Spacing,
  EmptyMap
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

    const [restaurantDetails, setRestaurantDetails] = useState([]);
    const [paymentSelect, setPaymentSelect] = useState('');

    const {
      setActualPage,
      cart,
      setCart
    } = useContext(GlobalStateContext);

    useEffect(() => {
      setActualPage('Meu carrinho')
      if(cart.length > 0) {
        getRestaurantDetails()
      }
    }, []);

    const selectPaymentMethod = (event) => {
      setPaymentSelect(event.target.value)
   }

    const getRestaurantDetails = () => {
      axios
        .get(`${BASE_URL}/restaurants/${cart[0].idRestaurant}`, {
          headers: {
            auth: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setRestaurantDetails(response.data.restaurant);
        })
        .catch((error) => {
          alert(error.response.data);
        });
    };
    
    // const placeOrder = () => {
    //   let order = []
    //   for(var i in cart) {
    //     order.push([cart[i].id, cart[i].quantity])
    //   }
    //   var data = JSON.stringify({
    //     "products": order, 
    //     "paymentMethod": paymentSelect
    //   });
    //   console.log(order)

    //   axios
    //   .post(`${BASE_URL}/restaurants/${cart[0].idRestaurant}/order`, {
    //     headers: {
    //       auth: localStorage.getItem('token'),
    //     },
    //     data: data
    //   }) 
    //   .then((response) => { 
    //     console.log(response)
    //     setCart([])
    //   })
    //   .catch((error) => {
    //     console.log('erro')
    //   })
    // }

    const placeOrder = () => {
      let order = []
      for(var i in cart) {
        order.push({id: cart[i].id, quantity: cart[i].quantity})
      }
      var data = JSON.stringify({
        "products": order,
        "paymentMethod": paymentSelect
      });

      var config = {
        method: 'post',
        url: 'https://us-central1-missao-newton.cloudfunctions.net/rappi4C/restaurants/'+cart[0].idRestaurant+'/order',
        headers: { 
          'auth': localStorage.getItem('token'), 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
          console.log(response)
    //    setCart([])
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    

    return (

      <Height> 

        <div> 
          <AddressBox/>

          <RestaurantDetails details={restaurantDetails}/>
        
          {cart.length > 0 ?
            cart.map (product => (
              <ProductCart product={product}/> 
            )) : 
            <EmptyMap>Carrinho vazio</EmptyMap>
          }
            
          <Total shipping={restaurantDetails.shipping}/> 

          <DivPadding $padding='0px 20px 20px 20px'> 
          <Typography className={classNames(classes.blackColor, classes.font16)}  
            component='p'
                > Forma de pagamento
          </Typography>
          <Linha/>

          <Method>
            <PaymentOption type='radio' value='cash' name='method' onChange={selectPaymentMethod}/>Dinheiro
          </Method>

          <Method>
            <PaymentOption type='radio' value='creditcard' name='method' onChange={selectPaymentMethod}/>Cartão de crédito
          </Method>
          </DivPadding>
        </div>


        <DivPadding $padding='0px 20px 20px 20px'>
          <Confirm onClick={() => placeOrder()}>Confirmar</Confirm>
          <Spacing/>
        </DivPadding>
      


      </Height>

    );
  }
  
  export default CartPage