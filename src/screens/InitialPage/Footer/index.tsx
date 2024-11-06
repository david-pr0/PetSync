import { View, Image, StyleSheet } from "react-native"

const Footer = () => {
    return (
        <View style={styles.container}>
            <Image source={{uri: "https://via.placeholder.com/40x40"}} style={styles.image}/>
            <Image source={{uri: "https://via.placeholder.com/40x40"}} style={styles.image}/>
            <Image source={{uri: "https://via.placeholder.com/40x40"}} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    }
});

export default Footer