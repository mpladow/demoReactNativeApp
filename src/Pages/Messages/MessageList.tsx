import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, FlatList, SafeAreaView } from 'react-native';
import mobStyles from '../../Styles/styles';
import MessageListItem from './MessageListItem';
import { Message } from '../../Definitions/types';
import PlatformContext from '../../Contexts/PlatformContext';
import webStyles from '../../Styles/webStyles';
import ButtonLarge from '../../Components/Buttons/ButtonLarge';


const MESSAGE_DATA: Array<Message> = [{ id: '1', title: "Test message 1", message: '' }, { id: '2', title: "Happy new year", message: '' }]


const MessageList = () => {
    // EXAMPLE - ADDING VALUES TO AN ARRAY - SIMPLE METHOD
    const platformContext = useContext(PlatformContext)
    let [data, setData] = useState<Array<Message>>(MESSAGE_DATA as Array<Message>);

    const addToMessageList = () => {
        console.log("Added")
        // get data from database
        const newData: Message = { 
            id: Math.random.toString(), 
            title: "This is a new message", message: '' };
        setData(oldArray => [...oldArray, newData]);
    }
    useEffect(() => {

        console.log(data)
    })

    const onAlertPressHandler = () => {
        alert('Unread button pressed. ');

    }


    return (<SafeAreaView style={platformContext.web ? webStyles.container : mobStyles.container}>
        <View style={mobStyles.buttonsGroupLarge} >

            <ButtonLarge 
            title="Unread"
            onPress={onAlertPressHandler}
            />
            
            <ButtonLarge 
            title="Unread"
            onPress={onAlertPressHandler}
            />
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
        alignItems: 'stretch'
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
    },

});