import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import InitialPage from './src/screens/InitialPage/InitialPage';
import Perfil from './src/screens/Perfil/Perfil';
import PerfilPet from './src/screens/PerfilPet/PerfilPet';
import Tarefa from './src/screens/Tarefa/ScreenTarefa';
import LoginScreen from './src/screens/Login';
import RegisterPage from './src/screens/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <SafeAreaView style={styles.safeArea}>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="InitialPage" component={InitialPage} />
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="PerfilPet" component={PerfilPet} />
            <Stack.Screen name="Tarefa" component={Tarefa} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </SafeAreaView>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingTop: 32
  },
});
