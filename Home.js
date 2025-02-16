import React, { useState, useEffect } from "react";
import { StatusBar, FlatList, Text, View, TextInput, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 20,
        margin: 20,
        justifyContent: "center",
    },
    buttonStyle: {
        backgroundColor: "#fdc42d",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",

    },
    listStyle: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#f8f8f8",
        borderRadius: 5,
    },
});
const Home = ({ navigation }) => {


    const [myData, setMyData] = useState([]);
    //useEffect
    useEffect(() => {
        //Add fetch()
        fetch("https://d927a50e251b4e359277c50e77017023.api.mockbin.io/")
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setMyData(myJson);
            });
    }, []);


    const renderItem = ({ item }) => {
        return (
            <View style={styles.listStyle}>
                <Text>{item.username}</Text>
                <Text>{item.email}</Text>
                <Text>{item.phone}</Text>
            </View>
        );
    };

    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Add', { datastr: JSON.stringify(myData) })}>
                <Text>Register Here</Text>

            </TouchableOpacity>
            <FlatList
                data={myData}
                renderItem={renderItem}

            />


        </View>

    );
};

export default Home;
