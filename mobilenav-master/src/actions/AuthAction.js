import { AsyncStorage } from 'react-native'
import { API_URL } from '../support/apiURL'
import Axios from 'axios'
import { REGISTER_FAILED, LOGIN_USER_SUCCESS } from './type'

export const onUserRegister = ({ email, username, password, conpassword }) => {
    return (dispatch) => {
        dispatch({ type: START_REGISTER })
        if (
            email !== ''
            && username !== ''
            && conpassword !== ''
        ) {
            if (password === conpassword) {
                Axios.post(`${API_URL}/user/register`, { email, username, password })
                    .then(async (res) => {
                        try {
                            await AsyncStorage.setItem('usertoken', res.data.token)
                            dispatch({
                                type: LOGIN_USER_SUCCESS,
                                payload: res.data
                            })
                        } catch (err) {
                            dispatch({
                                type: REGISTER_FAILED,
                                payload: err.message
                            })
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                        dispatch({
                            type: REGISTER_FAILED,
                            payload: err.response.data.message
                        })
                    })
            }
            else {
                dispatch({
                    type: REGISTER_FAILED,
                    payload: 'confirm password and password must be equal'
                })
            }
        }
        else {
            dispatch({
                type: REGISTER_FAILED,
                payload: 'Please Fill All the inputs'
            })
        }
    }
}