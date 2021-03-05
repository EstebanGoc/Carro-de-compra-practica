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
    Image
} from 'react-native';
export const ItemProduct = ({ item, Carrito, setCarrito }) => {


    const [EnCarro, setEnCarro] = useState(false);
    const [Count, setCount] = useState(0);

    const verificarCarrito = () => {


        let cartIndex = Carrito.findIndex(_item => _item.id == item.id)
        if (cartIndex !== -1) {
            setEnCarro(true)
            let count = Carrito[cartIndex].count
            setCount(count)
        } else {
            setEnCarro(false)
        }

    }

    const Aumentar = () => {

        let newArray = [...Carrito]
        let elementsIndex = Carrito.findIndex(_item => _item.id == item.id)
        newArray[elementsIndex] = { ...newArray[elementsIndex], count: newArray[elementsIndex].count + 1 }
        setCarrito(newArray)


    }
    const Disminuir = () => {

        let newArray = [...Carrito]
        let elementsIndex = Carrito.findIndex(_item => _item.id == item.id)

        if (newArray[elementsIndex].count == 1) {
            newArray.splice(elementsIndex, 1);

        } else {
            newArray[elementsIndex] = { ...newArray[elementsIndex], count: newArray[elementsIndex].count - 1 }
        }
        setCarrito(newArray)
    }

    const AgregarAlCarro = (item) => {

        const { id, name, price, image, count } = item
        let count1 = count + 1
        let newItem = { id, name, price, image, count: count1 }
        if (!EnCarro) {
            setCarrito([...Carrito, newItem])
        }
    }
    useEffect(() => {
        verificarCarrito()
    }, [])
    useEffect(() => {
        verificarCarrito()
    }, [Carrito])
    const { image } = item
    return (
        <View style={{ flexDirection: "row", width: "100%", paddingLeft: 15, paddingRight: 15, /* borderColor: "blue",  */borderWidth: 0.5, marginTop: 5,/*  marginBottom: 5 */ }} key={item.key}>
            <View style={{ width: "50%", height: 100, justifyContent: "center", alignItems: "center", bordercolor: "green", borderWidth: 1, borderRadius: 15 }}>
                {<Image
                    style={{
                        width: 66,
                        height: 58,
                        borderRadius: 15
                    }}
                    source={{
                        uri: image
                    }} />}

            </View>
            <View style={{ width: "50%", height: 100, alignItems: "center" }}>
                <Text>{item.name}</Text>
                <Text>$: {item.price}</Text>

                {EnCarro ?
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: 100, height: 50, borderRadius: 15 }}>
                        <TouchableOpacity onPress={() => Disminuir()} style={{ borderWidth: 1, borderColor: "green", padding: 10, borderRadius: 15 }}><Text>-</Text></TouchableOpacity>
                        <View style={{ borderWidth: 1, borderColor: "green", padding: 10, borderRadius: 15 }}><Text>[{Count}]</Text></View>
                        <TouchableOpacity onPress={() => Aumentar()} style={{ borderWidth: 1, borderColor: "green", padding: 10, borderRadius: 15 }}><Text>+</Text></TouchableOpacity>
                    </View>
                    :
                    <TouchableOpacity onPress={() => AgregarAlCarro(item)} style={{ justifyContent: "center", alignItems: "center", width: 100, height: 50, borderWidth: 1, borderColor: "green", borderRadius: 15 }}>
                        <Text>+</Text>
                    </TouchableOpacity>
                }

            </View>
        </View>
    )
}
