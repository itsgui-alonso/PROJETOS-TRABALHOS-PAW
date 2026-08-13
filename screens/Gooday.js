import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const logo = require('../assets/logotipo.png')
export default function Gooday() {
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.replace('BoasVindas')} activeOpacity={1}>
        <Image source={logo} style={styles.logo}></Image>
    </TouchableOpacity>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3cb371',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 180,
    height: 60,
    resizeMode: 'contain'
  }
});