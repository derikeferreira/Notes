import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Alert

    } from 'react-native'

import {useNavigation} from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Notes from '../../services/sqlite/Notes' 

export default function Initial() {
    const navigation = useNavigation();
    const [views, setViews] = useState([]);
    const [condicaoView, setcondicaoView] = useState(false);


    const adicionarViewExistente = () => {
        Notes.all()
            .then((objeto) => {
            if (objeto) {

                const novaView = objeto.map((objeto) => (
                    <TouchableOpacity 
                        key={objeto.id} 
                        style={styles.containerBlock1} 
                        onPress={() => {navigation.navigate('Notes', { paramKey: objeto.id, paramStr: objeto.notes });}}
                        onLongPress={() => excluirView(objeto.id)} // Passa numero como a chave
                    >
                      <Text style={styles.titleblock1}>{objeto.notes}</Text>
                    </TouchableOpacity>
                ));
                setViews(novaView);
            } else {
                console.log("Nenhum registro encontrado na tabela.");
                
            }
            })
            .catch((error) => {
            console.error("Erro ao obter o objeto:", error);
            }); 
               
    };
    
    const adicionarView = () => {
        //create
        Notes.create( {Notes:''} )
            .then( id => console.log('Notes created with id: '+ id) )
            .catch( err => console.log(err) )

        Notes.getLastObject()
            .then((objeto) => {
            if (objeto) {
                
                const novaView = (
                    <TouchableOpacity 
                        key={objeto.id} 
                        style={styles.containerBlock1} 
                        onPress={() => {navigation.navigate('Notes', { paramKey: objeto.id, paramStr: objeto.notes });}}
                        onLongPress={() => excluirView(objeto.id)} // Passa numero como a chave
                    >
                      <Text style={styles.titleblock1}>{objeto.notes}</Text>
                    </TouchableOpacity>
                    );
                
                setViews([...views, novaView]);
            } else {
                console.log("Nenhum registro encontrado na tabela.");
            }
            })
            .catch((error) => {
            console.error("Erro ao obter o objeto:", error);
            });
          
    };

    
    const excluirView = (key) => {
        // Adicione um alerta de confirmação antes de excluir a nota
        Alert.alert(
            'Confirmação',
            `Tem certeza de que deseja excluir esta nota?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                    onPress: () => console.log('Exclusão cancelada'),
                },
                {
                    text: 'Excluir',
                    onPress: () => {
                        // Delete the note
                        Notes.remove(key)
                            .then((updated) => {
                                console.log('Nota excluída: ' + key);
                                setViews((prevViews) => {
                                    const novasViews = [...prevViews];
                                    const index = novasViews.findIndex((view) => Number(view.key) === Number(key));
                                    if (index !== -1) {
                                        novasViews.splice(index, 1);
                                    }
                                    return novasViews;
                                });
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    },
                },
            ]
        );
    };
    
    
    
   
    return (

        <ScrollView style={styles.container}>


            <View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Todas as notas</Text>
                <Text style={styles.text}> {views.length} 
                    {views.length > 1 ? (
                        ' notas'
                    ) : ' nota'}
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={adicionarView}>

                <Ionicons
                name='duplicate-outline' size={30}  />
                    
            </TouchableOpacity> 
            {!condicaoView ? adicionarViewExistente() : setcondicaoView(prev => !prev)}

            <View style={styles.containerBlock} >
            
                {views.map((view, index) => (
                    
                    <React.Fragment key={index}>{view}</React.Fragment>
                ))}
  
                
            </View>
        </ScrollView>
    )
    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',


    },
    containerForm:{
        backgroundColor: '#FFF',
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    containerBlock:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 30,  
    },
    title:{
        fontSize: 30,
        marginTop: 28,
        marginBottom: 12,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    button:{
        backgroundColor: '#e0eaf080',
        borderRadius: 100/2,
        width: 60,
        height: 60,
        alignItems: 'center',
        marginStart: '75%',
        marginTop: '2%',
        justifyContent: 'center',
        

    },
    containerBlock1:{
        height: Dimensions.get('window').width / 2, 
        width: Dimensions.get('window').width / 2.1, 
        backgroundColor: '#e0eaf080',
        borderRadius: 15,
        marginStart: 7,
        marginBottom: 7,
        
    },
    titleblock1:{
        color: 'black',
        fontSize: 12,
        marginTop: 28,
        marginStart: 12,
        marginEnd: 12,
        marginBottom: 12,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text:{
        color: '#a1a1a1',
        textAlign: 'center'
    },
})