import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native"

const Main = () => {
    const [img, setImg] = useState('https://via.placeholder.com/180x180')
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
        }
])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PetSync</Text>
            <FlatList 
                data={pets}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <View style={styles.card}>
                            <Image source={{uri: img}} style={styles.image}/>
                        </View>
                    </View>
                    )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
    title: {
        fontSize: 28,
    },
    card: {
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 16,
        alignItems: 'center',
    },
    image: {
        width: 325,
        height: 290,
        borderRadius: 16,
    }
});

export default Main