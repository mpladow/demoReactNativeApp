import React from 'react';

import { ImageBackground, Switch, StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert, Platform, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const ListItem = (props) => {
    const navigation = useNavigation()
    

    const handleButtonPress = () => {
        console.log("Navigating to Message")
        navigation.navigate('Message', {id: 1});
    }
    return (
        <TouchableOpacity onPress={handleButtonPress} style={styles.listItem}>
            <Text>
                { props.title}
            </Text>
        </TouchableOpacity>
        
    );
}

export default ListItem;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 12,
        minHeight: 100,
        backgroundColor: 'red',
        marginBottom: 14
    }
})