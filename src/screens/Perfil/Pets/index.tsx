import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native"

const Pets = () => {
    const [img, setImg] = useState('https://via.placeholder.com/130x130')
    const [pets, setPets] = useState([
        {
            id: 1,
            nome: 'pet',
            raca: 'dog',
            bio: 'cachorro'
        },
        {
            id: 2,
            nome: 'pet2',
            raca: 'cat',
            bio: 'gato'
        },
        {
            id: 3,
            nome: 'pet3',
            raca: 'bird',
            bio: 'passaro'
        }
    ])
    return (
        <View>
            <View style={styles.flex}>
                <Text style={styles.title}>Confira todos os seus pets</Text>
                <Image source={require('../../../../assets/arrow.png')} style={[styles.icon, { transform: [{ scaleX: -1 }] }]} />
            </View>
            <FlatList 
                data={pets}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                <View style={styles.animal}>
                    <Image source={{uri: img}} style={styles.image}/>
                    <View style={styles.info}>
                        <View>
                            <Text style={styles.name}>{item.nome}</Text>
                            <Text>{item.raca}</Text>
                        </View>
                        <Text style={styles.bio}>{item.bio}</Text>
                    </View>
                </View>
                )}
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
    animal: {
        flexDirection: 'row',
    },
    info: {
        flexDirection: 'column',
    },
    name: {
        fontSize: 20
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
    }
});

export default Pets