import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {COLORS,SIZES,FONTS} from "...constants"


export default function Homepage(){
    // toda la funcionalidad y todo lo que quieras poner en la aplicacion
    return <View style={styles.container}>
        <Text>Hola soy Homepage</Text>
    </View> 
}

const styles = StyleSheet.create({
    // todos los estilos

    container: {
        padding: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding,
    }
})
