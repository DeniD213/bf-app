import {StyleSheet, View, Text, Image} from 'react-native';

import logo from '../assets/logo.png';

export const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/logo.png')} // Pfad zu deinem Bild
                style={{width: 200, height: 100}} // Größe des Logos
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        marginTop: 25,
        //justifyContent: 'center',
    },
});
