import React, { useEffect, useState, useReducer } from 'react';
import { View, StatusBar } from 'react-native'
import style from './style/style'
import * as Animatable from 'react-native-animatable'
import { Text, Input, Icon, Button } from 'react-native-elements'
import { CommonActions } from '@react-navigation/native'

const reducers = (state, action) => {
    switch (action.type) {
        case 'Change-data':
            return { ...state, [action.name]: action.payload }
        default:
            return state
    }
}

const Login = (props) => {

    const [state, dispatch] = useReducer(reducers, { email: '', password: '', passHidden: true })

    // useEffect(()=>{
    //     const resetcomm=CommonActions.reset({
    //         index:0,
    //         routes:[
    //             {name:'Register'}
    //         ]
    //     })
    //     props.navigation.dispatch(resetcomm)
    // },[])

    // const [passHidden, setPasshidden] = useState(true)

    const Gotohome = () => {
        props.navigation.navigate('Drawermain')
    }
    return (
        <View style={style.LogcontainerStyle}>
            <StatusBar backgroundColor='teal' />
            <Animatable.Text animation='bounceIn' iterationCount='infinite'>
                <Text h3>Instagrin</Text>
            </Animatable.Text>
            <View style={style.Loginputstyle}>
                <Input
                    placeholder='Email'
                    leftIcon={
                        <Icon
                            name='email'
                            size={24}
                            color='black'
                        />
                    }
                    value={state.email}
                    onChangeText={(text) => { dispatch({ type: 'Change-data', name: 'email', payload: text }) }}
                />
                <Input
                    placeholder='Password'
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='black'
                        />
                    }
                    rightIcon={
                        <Icon
                            name={state.passHidden ? 'visibility-off' : 'visibility'}
                            size={24}
                            color={state.passHidden ? '#bfc3c9' : 'black'}
                            onPress={() => dispatch({ type: 'Change-data', name: 'passHidden', payload: !state.passHidden })}
                        />
                    }
                    secureTextEntry={state.passHidden}
                    value={state.password}
                    onChangeText={(text) => { dispatch({ type: 'Change-data', name: 'password', payload: text }) }}
                />
            </View>
            <Button
                title='Login'
                containerStyle={{ width: '100%', marginBottom: 10 }}
                buttonStyle={{ backgroundColor: 'black' }}
            />
            <Button
                title="Go to Register"
                containerStyle={{ width: '100%' }}
                buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
                titleStyle={{ color: 'black' }}
                type='outline'
                onPress={() => props.navigation.navigate('Register')}
            />
            <View style={{ marginTop: 10 }}>
                <Button
                    title="Go to Home"
                    containerStyle={{ width: '100%' }}
                    buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
                    titleStyle={{ color: 'black' }}
                    type='outline'
                    onPress={Gotohome}
                />
            </View>
        </View>
    )
}

export default Login