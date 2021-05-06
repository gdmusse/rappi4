import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components'
import avatar from '../assets/images/avatar.svg'
import avatarcolor from '../assets/images/avatarcolor.svg'
import homepage from '../assets/images/homepage.svg'
import homepagecolor from '../assets/images/homepagecolor.svg'
import shoppingcart from '../assets/images/shopping-cart.svg'
import shoppingcartcolor from '../assets/images/shopping-cartcolor.svg'
import { HideScroll } from 'react-hide-on-scroll'



export const Image = styled.img`
  width: 5vw;
  max-width: 50px;
 
`;

const Container = styled.div`
display: flex;
justify-content:space-around;
align-items:center;
height: 8vh;
width:100vw;
background-color: #FFFF;
z-index:10;
position: fixed;
bottom:0;
overflow: hidden;
box-shadow: "0 0.5px 0 0 rgba(0, 0, 0, 0.25)";
`

const Footer = () => {


    return (
        <HideScroll variant="down">


            <Container >
                <IconButton><Image src={homepage} /></IconButton>
                <IconButton><Image src={shoppingcart} /></IconButton>
                <IconButton ><Image src={avatar} /></IconButton>
            </Container>

        </HideScroll>

    );
};

export default Footer