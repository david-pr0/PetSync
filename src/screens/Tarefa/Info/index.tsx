import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native"

const Tarefas = () => {
    const [tarefa, setTarefa] = useState(
        {
            "id_tarefa": 1,
            "nome_tarefa": "Levar para passeio",
            "conclusao": "pendente",
            "data_tarefa": "12/11/2024",
            "hora": "17:00",
            "id_animal": 1
        }
    )
    const [tarefas, setTarefas] = useState([
        {
            "id_tarefa": 2,
            "nome_tarefa": "Levar para tosa",
            "conclusao": "concluído",
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
    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                <View style={styles.tarefainfo}>
                    <View>
                        <Text style={styles.nome}>{tarefa.nome_tarefa}</Text>
                        <Text>Data: {tarefa.data_tarefa}</Text>
                        <Text>Hora: {tarefa.hora}</Text>
                        {
                            tarefa.conclusao === "pendente"? <Text style={styles.pendente}>{tarefa.conclusao}</Text> :
                            <Text style={styles.concluido}>{tarefa.conclusao}</Text>
                        }
                    </View>
                    <View>
                        <TouchableOpacity>
                                <Text style={styles.concluir}>Concluir</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.excluir}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.flex}>
                <Text style={styles.title}>Confira a agenda de seu pet</Text>
                <Image source={require('../../../../assets/arrow.png')} style={[styles.icon, { transform: [{ scaleX: -1 }] }]} />
            </View>
            <FlatList 
                data={tarefas}
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
    tarefainfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    concluir: {
        textAlign: 'center',
        backgroundColor: 'aqua',
        padding: 8,
        borderRadius: 16,
        marginBottom: 16,
    },
    listContainer: {
        paddingBottom: 20,
    },
    container: {
        flex: 1,
        paddingLeft: 32,
        paddingRight: 32,
        backgroundColor: '#fff'
    }
});

export default Tarefas
