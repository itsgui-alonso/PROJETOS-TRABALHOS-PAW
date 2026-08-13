import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
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
  const [confirmaSenha, setConfirmaSenha] = useState('') 
  const [cadastroFeito, setCadastroFeito] = useState(false)
  const [senhaDiferente, setSenhaDiferente] = useState(false)


  function salvarCadastro() { // Essa função so aparece o alert no navegador
    if(senha !== confirmaSenha){
      setSenhaDiferente(true)
      return
    }
    usuariosCadastrados.push({email, senha})
    setCadastroFeito(true)
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
      <Senha label='Repita a senha' placeholder='Digite a sua senha' value={confirmaSenha} onChangeText={setConfirmaSenha}></Senha>

      

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

      <Modal visible={cadastroFeito} transparent animationType='fade'>
        <View style={styles.fundoModal}>
          <View style={styles.caixinhaModal}>
            <Text style={styles.tituloModal}>Cadastro feito com Sucesso!</Text>
            <Text style={styles.textoModal}>A sua conta foi criada.</Text>

            <TouchableOpacity 
              style={styles.botaoModal}
              onPress={() => { setCadastroFeito(false)
              navigation.navigate('Acesse')
            }}
            ><Text style={styles.textoBotaoModal}>OK</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={senhaDiferente} transparent animationType='fade'>
        <View style={styles.fundoModal}>
          <View style={styles.caixinhaModal}>
            <Text style={styles.tituloModal}>Senha Incorreta!</Text>
            <Text style={styles.textoModal}>Repita a Sunha com a mesam acima!</Text>

            <TouchableOpacity 
              style={styles.botaoModal}
              onPress={() => { setSenhaDiferente(false)
            }}
            ><Text style={styles.textoBotaoModal}>OK</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  },
  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caixinhaModal: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    width: '70%',
    alignItems: 'center'
  }, 
  tituloModal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },
  textoModal: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  }, 
  botaoModal: {
    color: '#3cb371',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10
  },
  textoBotaoModal: {
    fontWeight: '600'
  }
});
