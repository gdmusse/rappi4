import React from 'react'
import * as S from '../styled'
// import Dropdown from '../../Assets/dropdown.svg'


function Confirmation() {
    return( 

    <S.Container>
        <S.ConfirmationContainer>
            <S.ConfirmationText>
                <S.TitleConfirmation> 
                    Selecione a quantidade desejada
                </S.TitleConfirmation>
            </S.ConfirmationText>
        <S.ConfirmationContainerSmall>
            <S.Contador> 0 </S.Contador>
            <S.dropdown src = {Dropdown} />
        </S.ConfirmationContainerSmall>

        <S.AdicionarAoCarrinho> ADICIONAR AO CARRINHO </S.AdicionarAoCarrinho>
            
        
        
        
        </S.ConfirmationContainer>    

    


    </S.Container>
    
    
    )}
  


  export default Confirmation
