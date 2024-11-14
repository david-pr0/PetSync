import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.start}>
                <TouchableOpacity onPress={handleGoBack}>
                    <View>
                        <Image source={require('../../../../assets/arrow.png')} style={styles.image}/>
                    </View>
                </TouchableOpacity>
                <Text style={styles.title}>
                    Pet
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
        padding: 32,
        backgroundColor: '#fff'
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