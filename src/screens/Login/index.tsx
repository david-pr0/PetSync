import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation()
    const goToInitialPage = () => {
        navigation.navigate('InitialPage' as never)
    }
    const goToRegister = () => {
        navigation.navigate('Register' as never)
    }
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Lógica para o login
        console.log('Botão de Login pressionado');
    };

    const handleRegister = () => {
        // Lógica para o registro
        console.log('Link de Registro pressionado');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Bem-vindo(a) ao PetSync</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome:"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin} onPressOut={goToInitialPage}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister} onPressOut={goToRegister}>
                <Text style={styles.registerText}>Registrar-se</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 32,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    loginButton: {
        width: '80%',
        height: 40,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 16,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    registerText: {
        color: '#0000ff',
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
