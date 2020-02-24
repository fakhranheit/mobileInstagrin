import React, { useState, useReducer } from 'react';
import { View } from 'react-native'
import { Text, Input, Icon, Button } from 'react-native-elements';
import style from './style/style'
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux'
import { onUserRegister } from './actions'


const reducers = (state, action) => {
    switch (action.type) {
        case 'Change-data':
            return { ...state, [action.name]: action.payload }
        default:
            return state
    }
}


const Register = ({ navigation }) => {
    const [state, dispatch] = useReducer(reducers, { email: '', username: '', password: '', conpassword: '' })
    const [passHidden, setpassHidden] = useState(true)
    const [conpassHidden, setconpassHidden] = useState(true)

    return (
        <View style={style.RegcontainerStyle}>
            <Animatable.Text animation={'fadeInDown'} duration={2000}>
                <Text h3>Register</Text>
            </Animatable.Text>
            <View style={style.ReginputStyle}>
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
                    placeholder='Username'
                    leftIcon={
                        <Icon
                            name='account-box'
                            size={24}
                            color='black'
                        />
                    }
                    value={state.username}
                    onChangeText={(text) => { dispatch({ type: 'Change-data', name: 'username', payload: text }) }}
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
                            name={passHidden ? 'visibility-off' : 'visibility'}
                            size={24}
                            color={passHidden ? '#bfc3c9' : 'black'}
                            onPress={() => { setpassHidden(!passHidden) }}
                        />
                    }
                    secureTextEntry={passHidden}
                    value={state.password}
                    onChangeText={(text) => { dispatch({ type: 'Change-data', name: 'password', payload: text }) }}
                />
                <Input
                    placeholder='Confirm Password'
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='black'
                        />
                    }
                    rightIcon={
                        <Icon
                            name={conpassHidden ? 'visibility-off' : 'visibility'}
                            size={24}
                            color={conpassHidden ? '#bfc3c9' : 'black'}
                            onPress={() => { setconpassHidden(!conpassHidden) }}
                        />
                    }
                    secureTextEntry={conpassHidden}
                    value={state.conpassword}
                    onChangeText={(text) => { dispatch({ type: 'Change-data', name: 'conpassword', payload: text }) }}
                />

                <Button
                    title='Back to Login'
                    containerStyle={{ width: '100%' }}
                    buttonStyle={{ borderColor: 'black', borderWidth: 1, marginTop: 30 }}
                    titleStyle={{ color: 'black' }}
                    type='outline'
                    onPress={() => navigation.goBack()}
                />



            </View>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}
// const Register=({navigation})=>{

//     const [Email,setEmail]=useState('')
//     return(
//         <View style={style.RegcontainerStyle}>
//             <Animatable.Text animation={'fadeInDown'} duration={2000}>
//                 <Text h3>Register</Text>
//             </Animatable.Text>
//             <View style={style.ReginputStyle}>
//                 <Input
//                     placeholder='Email'
//                     leftIcon={
//                         <Icon
//                             name='email'
//                             size={24}
//                             color='black'
//                         />
//                     }
//                     value={Email}
//                     onChangeText={(text)=>setEmail(text)}
//                 />
//                 <Input
//                     placeholder='Username'
//                     leftIcon={
//                         <Icon
//                             name='account-box'
//                             size={24}
//                             color='black'
//                         />
//                     }
//                 />
//                  <Button
//                     title="Back to Login"
//                     containerStyle={{ width: '95%' }}
//                     buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
//                     titleStyle={{ color: 'black' }}
//                     type="outline"
//                     onPress={() => navigation.goBack()}
//                 />
//             </View>
//         </View>
//     )
// }

export default Register