import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Email from '../components/Email.js';
import Senha from '../components/Senha.js';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { usuariosCadastrados } from '../Usuarios.js';

const google = require('../assets/Google.png')
const facebook = require('../assets/Facebook.png')

export default function CadastraSe() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(''); 


  function salvarCadastro() { // Essa função so aparece o alert no navegador
    usuariosCadastrados.push({email, senha})
    alert('Cadastro Realizado')
    navigation.navigate('Acesse')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonSetinha} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Cadastra-se</Text>
      <Text style={styles.subtitulo}>Informe seu E-mail e crie uma senha</Text>

      <Email value={email} onChangeText={setEmail}></Email>
      <Senha label='Crie uma Senha' placeholder='Digite a sua senha' value={senha} onChangeText={setSenha}></Senha>
      <Senha label='Repita a senha' placeholder='Digite a sua senha'></Senha>

      

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao1} onPress={salvarCadastro}>
          <Text style={styles.textBotao1}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaDivisor}>
        <View style={styles.divisor}></View>
        <Text style={styles.textDivisor}>Ou continue com</Text>
        <View style={styles.divisor}></View>
      </View>


      <View style={styles.outroLogin}>
        <TouchableOpacity>
          <Image source={google} style={styles.logo}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={facebook} style={styles.logo}></Image>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 60
  },
  buttonSetinha: {
    padding: 8,
    marginLeft: -8
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 14,
    marginBottom: 24,
  },
  botoes: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24
  },
  botao1: {
    flex: 1,
    backgroundColor: '#3cb371',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  textBotao1: {
    color: '#fff',
    fontWeight: '600'
  },
  areaDivisor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  divisor: {
    flex: 1,
    height: 1,
    backgroundColor: '#303030'
  },
  textDivisor: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#303030'
  },
  outroLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 18
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
});
