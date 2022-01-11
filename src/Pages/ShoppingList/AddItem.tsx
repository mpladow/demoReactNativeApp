import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, Modal, Pressable, StyleSheet, TextInput, ListView, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const AddItem = (props: any) => {

    const [text, setText] = useState(false);

    // allows us to access the upper level context storage (user information)

    const addItem = (text) => {
        // we get this function from the parent component
        props.addItem(text);
    }

    const onChange = (value) => {
        setText(value);
    }

    return (
        <View>
            <TextInput
                onChangeText={onChange}
                style={styles.input}
                placeholder='Add Item ...'></TextInput>
            <TouchableOpacity style={styles.button}
                onPress={() => { addItem(text) }}>
                <AntDesign
                    name="plus"
                    size={24}
                    color="black" />
                <Text>
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>)

}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 6,
        fontSize: 16,
        width: '100%',
        marginBottom: 6
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'darkslateblue',
        width: '100%'
    },
    btnText: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default AddItem;