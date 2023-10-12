// import React from 'react'
// import { Touchable, TouchableOpacity } from 'react-native'
// import {View, Text, StyleSheet, TextInput} from 'react-native'

// import * as Animatable from 'react-native-animatable'
// import {useNavigation} from '@react-navigation/native'

// export default function Forgot() {
//     const navigation = useNavigation();
//     return (
//         <View style={styles.container}>
//             <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
//                 <Text style={styles.message}>Bem-vindo(a)</Text>
//             </Animatable.View>

//             <Animatable.View animation="fadeInUp" style={styles.containerForm}>
//                 <Text style={styles.title}>Email</Text>
//                 <TextInput
//                     placeholder='Digite um email...'
//                     style={styles.input}
//                 />
//                 <Text style={styles.title}>Senha</Text>
//                 <TextInput
//                     placeholder='Digite sua senha...'
//                     style={styles.input}
//                 />

//                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Initial')}>
//                     <Text style={styles.buttonText}>Entrar</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.buttonForgot} onPress={() => navigation.navigate('Forgot')}>
//                     <Text style={styles.ForgotText}>Esqueceu a senha?</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={[styles.button, styles.green]} onPress={() => navigation.navigate('Create')}>
//                     <Text style={styles.buttonText}>Criar nova conta</Text>
//                 </TouchableOpacity>

//             </Animatable.View>

//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor: '#38a69d'
//     },
//     containerHeader:{
//         marginTop: '14%',
//         marginBottom: '8%',
//         paddingStart: '5%',

//     },
//     message:{
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: '#FFF'

//     },
//     containerForm:{
//         backgroundColor: '#FFF',
//         flex: 1,
//         borderTopLeftRadius: 25,
//         borderTopRightRadius: 25,
//         paddingStart: '5%',
//         paddingEnd: '5%',

//     },
//     title:{
//         fontSize: 20,
//         marginTop: 28,
//     },
//     input:{
//         borderBottomWidth: 1,
//         height: 40,
//         marginBottom: 12,
//         fontSize: 16,
//     }, 
//     button:{
//         backgroundColor: '#00ced1',
//         width: '100%',
//         borderRadius: 4,
//         paddingVertical: 8,
//         marginTop: 14,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     buttonText:{
//         color: '#FFF',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     buttonForgot:{
//         marginTop: 14,
//         alignSelf: 'center',

//     },
//     ForgotText:{
//         fontSize: 15,
//         marginBottom: 30,

//     },
//     green:{
//         backgroundColor: '#32cd32',

//     }
// })