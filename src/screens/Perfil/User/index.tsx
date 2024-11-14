import { useEffect, useState } from "react"
import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { useNavigation } from "@react-navigation/native"

const User = () => {
    const navigation = useNavigation()
    const logout = () => {
        navigation.navigate('Login' as never)
    }
    const [user, setUser] = useState(
        {
            "nome_usuario": "David",
            "email": "david@email.com",
            "senha": "12345678",
            "imagem": "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"
        }
    )
    const [img, setImg] = useState('https://via.placeholder.com/150x150')
    useEffect(
        () => {
            setImg(user.imagem)
        }, [user]
    )
    const [newImg, setNewImg] = useState('')

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
            <TouchableOpacity onPress={handleImagePicker}>
                {
                    newImg ? <Image source={{uri: newImg}} style={styles.image}/> :
                    <Image source={{uri: `data:image/png;base64,${img}`}} style={styles.image}/>
                }
            </TouchableOpacity>
            <View style={styles.perfilInformations}>
                <View>
                    <Text style={styles.name}>{user.nome_usuario}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={logout}>
                        <Text style={styles.button}>
                            Sair
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 32,
        paddingRight: 32,
        backgroundColor: '#fff'
    },
    perfilInformations: {
        justifyContent: 'space-between',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 16,
        marginRight: 16,
    },
    email: {
        fontSize: 16
    },
    name: {
        fontSize: 28
    },
    button: {
        borderRadius: 16,
        backgroundColor: '#0c8ce9',
        color: '#fff',
        textAlign: 'center',
        padding: 8,
    }
});

export default User