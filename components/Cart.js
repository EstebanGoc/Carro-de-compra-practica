import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';



export const Cart = ({ Carrito, setCarrito }) => {

    const [Suma, setSuma] = useState(0);

    useEffect(() => {
        let suma = 0
        Carrito.forEach(item => {
            let NSuma = item.price * item.count
            suma = suma + NSuma
        });
        setSuma(suma)

    }, [])
    useEffect(() => {
        let suma = 0
        Carrito.forEach(item => {
            let NSuma = item.price * item.count
            suma = suma + NSuma
        });
        setSuma(suma)

    }, [Carrito])

    return (
        <View style={{ width: "100%", height: 100, justifyContent: "center" }}>

            <TouchableOpacity style={{ borderColor: "green", borderWidth: 1, alignItems: "center", marginLeft: 40, marginRight: 40, paddingTop: 15, paddingBottom: 15, borderRadius: 15 }}>
                <Text>Pagar: {Suma}</Text>
            </TouchableOpacity>
        </View>
    )
}
