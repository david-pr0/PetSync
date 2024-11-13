import { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
    const [img, setImg] = useState("https://via.placeholder.com/40x40");

    useEffect(() => {
        const imagem = require('../../../../assets/user.png');
        setImg(imagem);
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={{uri: img}} style={styles.image} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    }
});

export default Header;
