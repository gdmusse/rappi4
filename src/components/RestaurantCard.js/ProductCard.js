import React from 'react'
import * as S from '../../pages/RestaurantPage/styled'
import styled from 'styled-components'




function ProductCard(props) {
        
    // console.log(props.Photo)
    return (
        
        <div>
        <S.AreaImg>
        <S.CardImgComida src = {props.Photo} alt='comida'/>
        
        <S.AreaItensLanche>
               <S.NomeDoItem>{props.name}</S.NomeDoItem>
               <S.ItensDoLanche>{props.description}</S.ItensDoLanche>
                <S.Preco>R$ {props.price} reais </S.Preco>
     
   
        </S.AreaItensLanche>
      
        </S.AreaImg>
     
      <S.ButtonAdd> <S.Adicionar>adicionar</S.Adicionar></S.ButtonAdd>
      <hr/>    
        </div>
    )  
}

export default ProductCard;


