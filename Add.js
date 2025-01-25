import React, { useState } from "react";
import { StatusBar, View, Button, Text, TextInput, StyleSheet, Alert, TouchableOpacity, FlatList } from "react-native";

const styles = StyleSheet.create({
    titleStyle: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: '#405cbd',
    },
    inputStyle: {
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#74b5d9',
        margin: 10,
        padding: 10,
    },

    buttonStyle: {
        backgroundColor: '#fdc42d',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
    },

    containerStyle: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    }

});


const Add = ({ navigation, route }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = () => {
        if (!username || !email || !phone) {
            Alert.alert("Error Registering", "All fields are required.");
            return;
        }
        let mydata = JSON.parse(route.params.datastr);
        let item = { username: username, email: email, phone: phone };
        mydata.push(item);

        fetch("[my endpoint url would go here if I had one :(]",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "[my API Token would then be here]"
                }, body: JSON.stringify(mydata)
            })
            .then((response) => {
                navigation.navigate("Home");
            })


    }

    return (
        <View style={styles.containerStyle}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.titleStyle}>REGISTRATION</Text>

            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.inputStyle}

            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.inputStyle}
            />
            <TextInput
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="numeric"
                style={styles.inputStyle}
            />

            <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit} >
                <Text>Submit</Text>
            </TouchableOpacity>




        </View>
    );
};

export default Add;
