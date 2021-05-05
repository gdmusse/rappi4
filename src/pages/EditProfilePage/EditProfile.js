import React, { useContext, useEffect, useState } from 'react'
import {goToPreviousPage} from "../../routes/coordinator"
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useForm from '../../hooks/useForm'
import { InputsContainer, ScreenContainer } from "./styled";
import Button from '@material-ui/core/Button'
import axios from 'axios';
import BASE_URL from '../../constants/urls';
import GlobalStateContext from '../../global/GlobalStateContext';
import useProtectedPage from '../../hooks/useProtectedPage';
import {goToProfile} from '../../routes/coordinator'

const EditProfilePage = () => {
    const history = useHistory();
    const [form, onChange, clear, setForm] = useForm({ name: "", email: "", cpf: "" })
    useProtectedPage();

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
            setForm(res.data.user);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

      const editProfile = (event) => {
        event.preventDefault()
        edit()
      }

      const edit = () => {
        const axiosConfig = {
          headers: {
            auth: localStorage.getItem('token')
          }
        }
        console.log(axiosConfig)
        axios.put(`${BASE_URL}/profile`, form, axiosConfig).then(response => {
          goToProfile(history)
        }).catch(error => {
          console.log(error)
        })
      }
      console.log(form)
    return(
        <ScreenContainer>
            <InputsContainer>
            <form onSubmit={editProfile}>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Name"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"username"}
                />
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"Email"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    label={"Cpf"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"cpf"}
                />
                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                    fullWidth
                    margin={"normal"}>
                Save
                 </Button>
            </form>
            <button onClick={() => console.log(form)}>Teste</button>
        </InputsContainer>
      </ScreenContainer>
    )

}

export default EditProfilePage;