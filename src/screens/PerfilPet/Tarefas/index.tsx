import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from "react-native"

const Tarefas = () => {
    const [img, setImg] = useState('https://via.placeholder.com/130x130')
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
        }
    ])
    const [pet, setPet] = useState(
        {
            id_animal: 1,
            nome_animal: 'pet',
            raca: 'dog',
            bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque suscipit enim dolorem, voluptas asperiores quod officia quo accusantium.'
        }
    )
    return (
        <ScrollView>
            <View style={styles.flex}>
                <View style={styles.petinfo}>
                    <Image source={{uri: img}} style={styles.image}/>
                    <View>
                        <Text style={styles.nome}>Nome: {pet.nome_animal}</Text>
                        <Text style={styles.raca}>Raça: {pet.raca}</Text>
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
            />
        </ScrollView>
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
    }
});

export default Tarefas
