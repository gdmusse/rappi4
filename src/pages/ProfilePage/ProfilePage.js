import React, { useContext, useEffect } from "react"
import axios from "axios"
import styled from "styled-components";
import GlobalStateContext from "../../global/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import BASE_URL from "../../constants/urls";
import CreateIcon from '@material-ui/icons/Create';
import {
  PostCardContainer,
  PostCardContent,
  LeftContent,
  RightContent,
} from "./styled";
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { goToEditAddress, goToEditProfile } from "../../routes/coordinator";

const ProfilePage = () => {
  useProtectedPage();
  const history = useHistory();

  const {
    setAlertMsg,
    setAlertSeverity,
    setOpenAlert,
    setRestaurants,
    restaurants,
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
    profile,
    setProfile
  } = useContext(GlobalStateContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(profile);

    return (
      <div>
        <PostCardContainer>
          <PostCardContent>
            <LeftContent>
                <p>{profile.name}</p>
                <p>{profile.email}</p>
                <p>{profile.cpf}</p>
            </LeftContent>
          <RightContent>
              <button onClick={() => goToEditProfile(history)}><CreateIcon/></button>
          </RightContent>
        </PostCardContent>
        </PostCardContainer>
          <Paper elevation={3}>
          <Ender>endereço de cadastro</Ender>
          <ProfileEddres>{profile.address}</ProfileEddres>
          <button onClick={() => goToEditAddress(history)}>a</button>
          </Paper>
          <p>Histórico de pedidos</p>
      </div>
    );
  }
  
  export default ProfilePage;

  const Ender = styled.p`
  
  `

  const ProfileEddres = styled.p`
  
  `

