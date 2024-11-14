import { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const [img, setImg] = useState(require('../../../../assets/user.png'))
    const navigation = useNavigation()

    const goToProfile = () => {
        navigation.navigate('Perfil' as never)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goToProfile}>
                <Image source={ img } style={styles.image} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingTop: 32,
        paddingLeft: 32
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    }
});

export default Header;
