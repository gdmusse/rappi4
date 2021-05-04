import useForm from '../../hooks/useForm'
import { Button, TextField } from "@material-ui/core"
import BASE_URL from '../../constants/urls'
import { useHistory } from 'react-router-dom'
import { goToSignUpPage, goToHomePage } from '../../routes/coordinator'
import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import AlertModified from '../../components/Alert'
import GlobalStateContext from '../../global/GlobalStateContext'
import { useContext } from 'react'



export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 10vh;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

const LoginPage = () => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    login()
  }

  const login = () => {
    const axiosConfig = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }

    axios.post(`${BASE_URL}/login`, form, axiosConfig).then(response => {
      localStorage.setItem('token', response.data.token)
      goToHomePage(history)
    }).catch(error => {
      setAlertMsg(error.response.data.message)
      setAlertSeverity("error")
      setOpenAlert(true)
    })
  }

  const {
    setOpenAlert,
    setAlertMsg,
    setAlertSeverity,

  } = useContext(GlobalStateContext);
  return (
    <ScreenContainer>

      <InputsContainer>
        <form onSubmit={onSubmitForm}>

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
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Password"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <Button
            type={"submit"}
            variant={"contained"}
            color={"primary"}
            fullWidth
            margin={"normal"}>
            Login
                    </Button>
          <Button
            onClick={() => goToSignUpPage(history)}
            type={"submit"}
            color={"primary"}
            fullWidth
            margin={"normal"}
          >
            Don't have an account? Sign Up
                </Button>

        </form>
      </InputsContainer>
      <AlertModified />

    </ScreenContainer>
  );
}

export default LoginPage