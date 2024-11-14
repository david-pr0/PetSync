import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'

const RegisterPage = () => {
    const navigation = useNavigation()
    const goToInitialPage = () => {
        navigation.navigate('InitialPage' as never)
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [img, setImg] = useState(require('../../../assets/user.png'))
    const [newImg, setNewImg] = useState('')

    const handleRegister = () => {
        console.log('Registrando:', { name, email, password });
    };

    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            aspect: [4,4],
            allowsEditing: true,
            base64: true,
            quality: 1,
        })
        if (!result.canceled) {
            setNewImg(result.assets[0].uri)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={handleImagePicker}>
                    {
                        newImg? <Image source={{uri: newImg}} style={{width: 50, height: 50}}/> :
                        <Image source={img} style={{width: 50, height: 50}}/>
                    }
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>CRIAR UMA CONTA</Text>
            <Text style={styles.subtitle}>Inscreva-se para começar</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome:"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email:"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha:"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.registerButton} onPress={handleRegister} onPressOut={goToInitialPage}>
                    <Text style={styles.registerButtonText}>Registrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
                <Text>🏢</Text>
            </View>
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
    iconContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 32,
    },
    form: {
        width: '80%',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    registerButton: {
        backgroundColor: 'black',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    registerButtonText: {
        color: 'white',
        fontSize: 16,
    },
    logoContainer: {
        marginTop: 20,
    },
});

export default RegisterPage;
