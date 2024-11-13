import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Perfil from './src/screens/Perfil/Perfil';
import InitialPage from './src/screens/InitialPage/InitialPage';
import PerfilPet from './src/screens/PerfilPet/PerfilPet';
import Tarefas from './src/screens/Tarefa/ScreenTarefa';

export default function App() {
  return (
    <View style={styles.container}>
      <Tarefas />
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
