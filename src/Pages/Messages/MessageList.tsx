import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, Alert, Modal, Pressable, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import mobStyles from '../../Styles/styles';
import AuthContext from '../../Contexts/AuthContext';
import ListItem from '../../Components/Lists/ListItem';
import MessageListItem from './MessageListItem';
import { uuid } from 'uuidv4';
import { Message } from '../../Definitions/types';
import PlatformContext from '../../Contexts/PlatformContext';
import webStyles from '../../Styles/webStyles';

const MESSAGE_DATA: Array<Message> = [{ id: '1', title: "Test message 1", message: '' }, { id: '2', title: "Happy new year", message: '' }]


const MessageList = () => {
    // EXAMPLE - ADDING VALUES TO AN ARRAY - SIMPLE METHOD
    const platformContext = useContext(PlatformContext)
    let [data, setData] = useState<Array<Message>>(MESSAGE_DATA as Array<Message>);

    const addToMessageList = () => {
        console.log("Added")
        // get data from database
        const newData: Message = { id: uuid(), title: "This is a new message", message: '' };
        setData(oldArray => [...oldArray, newData]);
    }
    useEffect(() => {

        console.log(data)
    })



    return (<SafeAreaView style={platformContext.web ? webStyles.container : mobStyles.container}>
        <View style={styles.buttonsGroupLarge} >
            <TouchableOpacity onPress={addToMessageList} style={styles.buttonLarge}><Text >Add new message</Text></TouchableOpacity>
        </View>

        <View style={styles.sectionBottom}>
            <ScrollView>
                <FlatList data={data}
                    renderItem={(item) => (
                        <MessageListItem
                            title={item.item.title}
                            id={item.item.id}
                        />)
                    }
                />
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
        justifyContent: 'flex-start'
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