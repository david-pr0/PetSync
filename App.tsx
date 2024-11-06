import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Perfil from './src/screens/Perfil/Perfil';
import InitialPage from './src/screens/InitialPage/InitialPage';

export default function App() {
  return (
    <View style={styles.container}>
      <InitialPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 32,
    paddingTop: 50,
  },
});
