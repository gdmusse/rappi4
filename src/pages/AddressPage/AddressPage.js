import useForm from '../../hooks/useForm'
import { Button, TextField } from "@material-ui/core"
import BASE_URL from '../../constants/urls'
import { useHistory } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'
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


const AddressPage = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        getAddress(form, clear, history)
    }


    const getAddress = (form, clear, history) => {
        const axiosConfig = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.put(`${BASE_URL}/address`, form, axiosConfig).then(response => {
            localStorage.setItem('token', response.data.token)
            goToHomePage(history)
            clear()
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
                        name={"street"}
                        value={form.street}
                        onChange={onChange}
                        label={"Street"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"street"}
                    />
                    <TextField
                        name={"number"}
                        value={form.number}
                        onChange={onChange}
                        label={"Number"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"number"}
                    />
                    <TextField
                        name={"neighbourhood"}
                        value={form.neighbourhood}
                        onChange={onChange}
                        label={"Neighbourhood"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"neighbourhood"}
                    />
                    <TextField
                        name={"city"}
                        value={form.city}
                        onChange={onChange}
                        label={"City"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"city"}
                    />
                    <TextField
                        name={"state"}
                        value={form.state}
                        onChange={onChange}
                        label={"State"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"state"}
                    />
                    <TextField
                        name={"complement"}
                        value={form.complement}
                        onChange={onChange}
                        label={"Complement"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"complement"}
                    />
                    <Button
                        type={"submit"}
                        variant={"contained"}
                        color={"primary"}
                        fullWidth
                        margin={"normal"}>
                        Sign Up
                    </Button>

                </form>
            </InputsContainer>
            <AlertModified />
        </ScreenContainer>
    );
}

export default AddressPage