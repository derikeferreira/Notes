// import React, {useState} from 'react'
// import { Touchable, TouchableOpacity } from 'react-native'
// import {View, Text, StyleSheet, TextInput} from 'react-native'
// import { Ionicons } from '@expo/vector-icons'

// import * as Animatable from 'react-native-animatable'

// export default function Create() {

//     const [hidePass, setHidePass] = useState(true);
//     const [hidePass1, setHidePass1] = useState(true);

//     return (
//         <View style={styles.container}>
//             <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
//                 <Text style={styles.message}>Cadastre-se</Text>
//             </Animatable.View>

//             <Animatable.View animation="fadeInUp" style={styles.containerForm}>

//                 <TextInput
//                     placeholder='Nome'
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder='Sobrenome'
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder='Celular ou email'
//                     style={styles.input}
//                 />
//                 <View style={styles.icons}>
//                     <TextInput
//                         placeholder='Nova senha'
//                         style={styles.input}
//                         secureTextEntry={hidePass}
//                         flex={1}
//                     />
//                     <TouchableOpacity style={styles.buttonRow} onPress={() => setHidePass(!hidePass)} >
//                         <Ionicons name="eye" color="#FFF" size={25}/>
//                     </TouchableOpacity>
                    
//                 </View>
//                 <View style={styles.icons}>
//                     <TextInput
//                         placeholder='Confirme nova senha'
//                         style={styles.input}
//                         secureTextEntry={hidePass1}
//                         flex={1}
//                     />
//                     <TouchableOpacity style={styles.buttonRow} onPress={() => setHidePass1(!hidePass1)} >
//                         <Ionicons name="eye" color="#FFF" size={25}/>
//                     </TouchableOpacity>
                    
//                 </View>
//                 <TouchableOpacity style={[styles.button, styles.green]}>
//                     <Text style={styles.buttonText}>Cadastre-se</Text>
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
//         paddingTop: '2%'

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

//     },
//     icons:{
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     buttonRow:{
//         backgroundColor: '#000000',
//         width: '10%',
//         borderRadius: 100,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// })