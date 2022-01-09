import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, Modal, Pressable, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../../Shared/styles';
import AuthContext from '../Context/AuthContext';
import ListItem from '../UI/ListItem';

const MESSAGE_DATA = [{ id: '1', title: "Test message 1" }, { id: '2', title: "Test message 2" }]


const MessageList = () => {
    let [data, setData] = useState(MESSAGE_DATA);

    const addToMessageList = () => {
        console.log("Added")
        // get data from database
        const newData = { id: '3', title: "This is a new message" };
        setData(oldArray => [...oldArray, newData]);


    }
    useEffect(() => {

        console.log(data)
    })



    return (<SafeAreaView style={globalStyles.container}>
        <View style={styles.buttonsGroupLarge} >
            <TouchableOpacity onPress={addToMessageList} style={styles.buttonLarge}><Text >Add Doodad 1</Text></TouchableOpacity>
            <View style={styles.buttonLarge}><Text>Add Doodad 2</Text></View>
        </View>

        <View style={styles.sectionBottom}>
            <ScrollView>
                <FlatList data={data}
                    renderItem={(item) => (<ListItem title={item.item.title} />)}
                    keyExtractor={item => item.id} />
            </ScrollView>
        </View>

    </SafeAreaView>)
}

export default MessageList;

const styles = StyleSheet.create({
    buttonsGroupLarge: {
        padding: 16,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ddd',
        width: '100%',
        justifyContent: 'space-evenly',
    },
    buttonLarge: {
        padding: 6,
        width: '46%',
        borderRadius: 12,
        backgroundColor: 'blue'
    },
    sectionBottom: {
        flex: 4,
        width: '100%',
        padding: 16
    }
});