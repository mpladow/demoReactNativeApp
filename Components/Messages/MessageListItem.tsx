import React from 'react';

import { ImageBackground, Switch, StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert, Platform, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import mobStyles from '../../Styles/styles';


const MessageListItem = (props) => {
    const navigation = useNavigation()
    

    const handleButtonPress = () => {
        console.log("Navigating to Message")
        navigation.navigate('Message', {id: props.id});
    }
    return (
        <TouchableOpacity onPress={handleButtonPress} style={styles.listItem}>
            <Text style={mobStyles.textLarge}>
                { props.title}..
            </Text>
        </TouchableOpacity>
        
    );
}

export default MessageListItem;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 12,
        minHeight: 100,
        backgroundColor: 'red',
        marginBottom: 14,
        padding: 8
    }
})