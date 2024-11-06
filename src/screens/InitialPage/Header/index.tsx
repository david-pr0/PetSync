import { View, Image, StyleSheet, Text } from "react-native"

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={{uri: "https://via.placeholder.com/40x40"}} style={styles.image}/>
            <View style={styles.options}>
                <Image source={{uri: "https://via.placeholder.com/40x40"}} style={styles.image}/>
                <Image source={{uri: "https://via.placeholder.com/40x40"}} style={styles.image}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    options: {
        flexDirection: 'row',
        gap: 25,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    }
});

export default Header