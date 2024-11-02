import { StyleSheet, View, Text, Image } from "react-native"


const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.start}>
                <View>
                    <Image source={require('../../../../assets/arrow.png')} style={styles.image}/>
                </View>
                <Text style={styles.title}>
                    Perfil
                </Text>
            </View>
            <View>
                <Image source={require('../../../../assets/menu.webp')} style={styles.image}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 26,
    },
    start: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        marginLeft: 16,
    },
    image: {
        width: 25,
        height: 25,
    }
});


export default Header