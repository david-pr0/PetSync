import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native"
import * as ImagePicker from "expo-image-picker"

const Tarefas = () => {
    const [tarefa, setTarefa] = useState([
        {
            "id_tarefa": 1,
            "nome_tarefa": "Levar para passeio",
            "conclusao": "pendente",
            "data_tarefa": "12/11/2024",
            "hora": "17:00",
            "id_animal": 1
        },
        {
            "id_tarefa": 2,
            "nome_tarefa": "Levar para tosa",
            "conclusao": "concluido",
            "data_tarefa": "12/11/2024",
            "hora": "17:00",
            "id_animal": 1
        },
        {
            "id_tarefa": 3,
            "nome_tarefa": "Levar para veterinário",
            "conclusao": "pendente",
            "data_tarefa": "12/11/2024",
            "hora": "17:00",
            "id_animal": 1
        },
        {
            "id_tarefa": 4,
            "nome_tarefa": "Levar para veterinário",
            "conclusao": "pendente",
            "data_tarefa": "12/11/2024",
            "hora": "17:00",
            "id_animal": 1
        },
        {
            "id_tarefa": 5,
            "nome_tarefa": "Levar para veterinário",
            "conclusao": "pendente",
            "data_tarefa": "12/11/2024",
            "hora": "17:00",
            "id_animal": 1
        }
    ])
    const [pet, setPet] = useState(
        {
            id_animal: 1,
            nome_animal: 'pet',
            raca_animal: 'dog',
            bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque suscipit enim dolorem, voluptas asperiores quod officia quo accusantium.',
            foto_animal: 'iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAEB0lEQVR4nO3YQU/yShiG4SmlBSwYjEIQCyaSqmHl//8NLNgZSaORAmJQxCC0dihzFs3hEPQkX8KXlid5rl1r9YW5w2RQ63Q6gpBl0n4BtC8mhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J42bRfwH88zxNCNBqN+HK5XPZ6ve0HHMexLEsIoZQaj8fT6TSKouPjY9u2s9m93kiKo/d3KAnH4/H7+/vp6enmThAEpmm22+1fH57NZq1WS9f1fr//9PTkOA7i6L8i/Y00DEPXdSeTiWma2/eDIMjn8z+fV0pNJpNarZbP5w3DaDabi8VisVhgjf6L0k+4XC5N07y9vc3lctv3/28dfd9fr9fxtiaEMAzDNM2ddZzNZt1udz6fx5ePj48PDw9KqQRGJy/9jbRcLpfL5Z/34/W6v7+XUhYKhXq9Hq+dlFIIYRjG5knDMMIw3PmbJycng8Hg5uZmNpvN5/Pr62tN0xIYnbz0P4W/iqJISmmapuM47Xb76OjIdd0gCIQQ6/VaCLHdQ9O0n58w27bX67XnecPhsFarFQqFxEYn7EAT6rp+d3fXbDaz2Ww2m724uMjlcm9vb+LfFdxeOKVUJrP7RnRdt2374+Mjl8tVq9UkRyfsQBP+ZJpmvI/FR4/VarX5kZRye3Pb8H1fCBGGYRRFCY9O0oEm/Pr66na739/f8aVSanPEyOfzmUxmc4iQUoZhuDlibPi+//r6Wq/XdV2Pv/YlNjphB5rQsqxCoeB5XhiGq9VqMBhEUVSpVIQQmUzm7OxsNBr5vi+l7Pf7lmXtrKNS6vn5uVgsVqvVRqPx+fk5nU6TGZ289E+kv9I07erqajQa9Xq9+BzvOM7m/yDn5+dKKdd1hRClUuny8nLn119eXqSUrVZLCFEsFiuVynA4LJVKf7Lp7Tk6eVqn00n7NdBeDnQjpT/HhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEN4/cnznZiQb6hsAAAAASUVORK5CYII='
        }
    )
    const [img, setImg] = useState('https://via.placeholder.com/130x130')
    useEffect(
        () => {
            setImg(pet.foto_animal)
        }
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
            <View style={styles.flex}>
                <View style={styles.petinfo}>
                    <TouchableOpacity onPress={handleImagePicker}>
                        {
                            newImg ? <Image source={{uri: newImg}} style={styles.image}/> :
                            <Image source={{uri: `data:image/png;base64,${img}`}} style={styles.image}/>
                        }
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.nome}>Nome: {pet.nome_animal}</Text>
                        <Text style={styles.raca}>Raça: {pet.raca_animal}</Text>
                    </View>
                </View>
            </View>
            <Text>{pet.bio}</Text>
            <View style={styles.flex}>
                <Text style={styles.title}>Confira a agenda de seu pet</Text>
                <Image source={require('../../../../assets/arrow.png')} style={[styles.icon, { transform: [{ scaleX: -1 }] }]} />
            </View>
            <FlatList 
                data={tarefa}
                keyExtractor={(item) => item.id_tarefa.toString()}
                renderItem={({ item }) => (
                <TouchableOpacity>
                    <View style={styles.tarefa}>
                    <View style={styles.info}>
                        <View>
                            <Text style={styles.name}>{item.nome_tarefa}</Text>
                            <Text>{item.data_tarefa}</Text>
                            <Text>{item.hora}</Text>
                            {
                                item.conclusao === "pendente"? <Text style={styles.pendente}>{item.conclusao}</Text> :
                                <Text style={styles.concluido}>{item.conclusao}</Text>
                            }
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        paddingTop: 32,
        paddingBottom: 32,
    },
    image: {
        width: 130,
        height: 130,
        marginBottom: 16,
        marginRight: 16,
        borderRadius: 16,
    },
    tarefa: {
        flexDirection: 'row',
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 24,
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 20
    },
    nome: {
        fontSize: 28
    },
    raca: {
        fontSize: 24
    },
    bio: {
        color: '#6e6e6e',
    },
    icon: {
        height: 25,
        width: 25,
        marginLeft: 16,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    petinfo: {
        flex: 1,
        flexDirection: 'row'
    },
    pendente: {
        width: 100,
        textAlign: 'center',
        backgroundColor: 'yellow',
        padding: 8,
        borderRadius: 16
    },
    concluido: {
        width: 100,
        textAlign: 'center',
        backgroundColor: 'green',
        padding: 8,
        borderRadius: 16
    },
    excluir: {
        textAlign: 'center',
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 16,
        color: '#fff'
    },
    listContainer: {
        paddingBottom: 20,
    },
    container: {
        flex: 1
    }
});

export default Tarefas
