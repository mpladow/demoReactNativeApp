import React, { useState } from 'react';
import { StyleSheet, TextInput,SafeAreaView , FlatList } from 'react-native';
import DeletableListItem from '../../Components/Lists/DeletableListItem';
import AddItem from './AddItem';
import mobStyles from '../../Styles/styles';


const ShoppingList = (props: any) => {

    const [items, setItems] = useState([{ id: '1', details: 'dfdfdfs' }]);


    const addItemHandler = (text) => {
        console.log(text);
        setItems((oldArray) => {
            return [{ id: Math.random.toString(), details: text }, ...oldArray]
        })
    }
    const deleteItemHandler = (id) => {
        setItems((oldArray) => {
            return oldArray.filter(item => item.id != id)
        })
    }

    return (
        //View></View> = <div></div>
        //<Text></Text>
        <SafeAreaView style={mobStyles.container}>
            <AddItem addItem={addItemHandler} />
            <FlatList
                style={{ width: '100%' }} data={items}
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