import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function Welcome() {
  const navigation = useNavigation();

  useEffect(() => {
    checkBiometrics();
  }, []);

  const checkBiometrics = async () => {
    const supported = await LocalAuthentication.hasHardwareAsync();
    if (supported) {
      const biometryType = await LocalAuthentication.supportedAuthenticationTypesAsync();

      // Verifica se há pelo menos um tipo de autenticação biométrica disponível
      if (biometryType.length > 0) {
        // Se houver suporte, você pode lidar com a autenticação biométrica aqui
        // Este é um exemplo simples, você pode personalizá-lo de acordo com suas necessidades
        authenticateWithBiometrics();
      }
    }
  };

  const authenticateWithBiometrics = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Faça a autenticação biométrica para acessar',
    });

    if (result.success) {
      navigation.navigate('Initial');
    } else {
      // A autenticação falhou, você pode lidar com isso aqui
      console.log('Falha na autenticação biométrica');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo1.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>App de notas para Android</Text>
        <Text style={styles.text}>Faça o login para começar</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => authenticateWithBiometrics()}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d'
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center'

    },
    containerForm:{
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        textAlign: 'center'
    },
    text:{
        color: '#a1a1a1',
        textAlign: 'center'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        height: '25%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'

    }
})