import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,

    } from 'react-native'

import Notessql from '../../services/sqlite/Notes' 

export default function Notes({ navigation, route }) {
    const { paramKey, paramStr } = route.params;
    const [text, setText] = useState(paramStr);
    const alterarTexto = (textoDeEntrada) => {
        setText(textoDeEntrada);
    };

      //update
    Notessql.update( paramKey, {notes:text} )
        .then( updated => console.log('Cars updated: '+ updated) )
        .catch( err => console.log(err) )

    return (

        <View animation="fadeInUp" style={styles.container}>
            <Text style={styles.title}>Sua anotação. </Text>
            <View style={styles.divider}/>
            <TextInput  style={styles.textInput} multiline={true} value={text} onChangeText={alterarTexto} />
        </View>
    )
    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
        
    },
    title:{
        fontSize: 30,
        marginTop: 28,
        marginBottom: 12,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textInput: {
        flex: 2,
        fontSize: 20,
        paddingLeft: 20,
        textAlign: 'left'
        
    },
    divider: {
        width: '%100',
        height:1, // Largura da linha de divisão
        backgroundColor: 'gray', // Cor da linha de divisão
    },
})