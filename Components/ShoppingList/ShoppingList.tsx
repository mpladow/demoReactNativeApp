import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, Modal, Pressable, StyleSheet, TextInput, ListView, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../../Shared/styles';
import AuthContext from '../Context/AuthContext';
import { AntDesign } from '@expo/vector-icons';
import ListItem from '../UI/ListItem';
import { uuid } from 'uuidv4';
import DeletableListItem from '../UI/DeletableListItem';
import AddItem from './AddItem';



const ShoppingList = (props: any) => {

    const [modalVisible, setModalVisible] = useState(false);

    const [items, setItems] = useState([{id: '1', details: 'dfdfdfs'}]);

    const logOutHandler = () => {
        console.log("Log out?")
        Alert.alert('Do you want to log out?',
            "You will be returned to the login screen",
            [{
                text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"
            }, { text: "Log Out", onPress: () => { console.log("set value in context to logged out. remove all tokens.") } }]);
    }
    // allows us to access the upper level context storage (user information)
    const userFromContext = React.useContext(AuthContext);

    const addItemHandler = (text) => {
        console.log(text);
        setItems((oldArray) => {
            return [{ id: uuid(), details: text }, ...oldArray]
        })
    }
    const deleteItemHandler = (id) => {
        setItems((oldArray) => {
            return oldArray.filter(item => item.id != id)
        })
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <AddItem addItem={addItemHandler}/>
            <FlatList style={{width: '100%'}} data={items}
                renderItem={({ item }) => <DeletableListItem
                    item={item}
                    deleteItem={deleteItemHandler} />}
            />
        </SafeAreaView>)
     
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
        width: '100%',
        marginBottom: 6
    },

    buttonOpen: {
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

export default ShoppingList;