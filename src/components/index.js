import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { SIZES,FONTS } from '../constants';
export default function Homepage(){
    // toda la funcionalidad y todo lo que quieras poner en la aplicacion
    return <View style={styles.view}>
    </View> 
}

const styles = StyleSheet.create({
    // todos los estilos
    view:{
        width:'100%',
        paddingVertical:5,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.borderRadius,
        elevation: 12,
    }
})
