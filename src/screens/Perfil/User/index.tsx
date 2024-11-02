import { useState } from "react"
import { View, Image, Text, StyleSheet, Button } from "react-native"

const User = () => {
    const [img, setImg] = useState("https://via.placeholder.com/150x150")
    const [user, setUser] = useState({
        nome: 'David',
        email: 'david@email.com',
        senha: '12345'
    })

    return (
        <View style={styles.container}>
            <Image source={{uri: img}} style={styles.image}/>
            <View style={styles.perfilInformations}>
                <View>
                    <Text style={styles.name}>{user.nome}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
                <View>
                    <Text style={styles.button}>
                        Sair
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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