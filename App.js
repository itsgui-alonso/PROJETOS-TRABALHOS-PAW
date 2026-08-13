import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastraSe from './screens/Cadastra-se';
import Acesse from './screens/Acesse';
import { View } from 'react-native-web';
import BoasVindas from './screens/BoasVindas';
import Gooday from './screens/Gooday';

const Navigation = createNativeStackNavigator()

export default function App() {
  return (
    
    <View style={{ flex: 1}}>
      <NavigationContainer>
      <Navigation.Navigator screenOptions={{headerShown: false}}>
        <Navigation.Screen name='Gooday' component={Gooday}></Navigation.Screen>
        <Navigation.Screen name='BoasVindas' component={BoasVindas}></Navigation.Screen>
        <Navigation.Screen name='Acesse' component={Acesse}></Navigation.Screen>
        <Navigation.Screen name='Cadastro' component={CadastraSe}></Navigation.Screen>
      </Navigation.Navigator>
    </NavigationContainer>
    </View>
  );
}