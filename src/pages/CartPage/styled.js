import styled from 'styled-components'
import {
  secondaryColor, 
  mainGray,
  primaryColor,
} from '../../constants/colors'

export const Height = styled.div` 
  min-height: 92vh;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
`

export const DivAdress = styled.div`
  background-color: ${secondaryColor};
  display: flex;
  flex-flow: column;
` 

export const DivPadding = styled.div` 
  padding: ${(props) => props.$padding || '20px'};
` 

export const BoxProduct = styled.div` 
  width: 100%;
  height: 18vh;
  border: 1px solid ${mainGray};
  border-radius: 10px;
  position: relative;
  display: flex;
` 

export const ProductImg = styled.img` 
  height: 100%;
  width: 14vh;
  object-fit: cover;
  border-radius: 10px 0px 0px 10px;
` 

export const BoxQuantity = styled.div`
  border: 1px solid ${primaryColor};
  position: absolute;
  height: 5vh;
  width: 5vh;
  top: -1px;
  right: -1px;
  border-radius: 0px 10px 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxInfos = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
` 

export const RemoveButton = styled.button` 
  border: 1px solid ${primaryColor};
  position: absolute;
  height: 5vh;
  bottom: -1px;
  right: -1px;
  border-radius: 10px 0px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: transparent;
  font-size: 12px;
  color: ${primaryColor};
  padding: 0px 10px 0px 10px;
`

export const BoxPrices = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
` 

export const ShippingPrice = styled.div` 
  text-align: end;
`

export const Linha = styled.hr` 
  width: 100%;
` 

export const Confirm = styled.button` 
  font-size: 16px;
  bottom: 20px;
  width: 100%;
  outline: none;
  background-color: ${primaryColor};
  border: none;
  padding: 10px 0px 10px 0px;
` 