import React, { useEffect } from 'react';

import { ImageBackground, Switch, StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert, Platform, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const DeletableListItem = (props) => {

    const deleteItemHandler = (id) => {
        props.deleteItem(id)
    }
    useEffect(() => {
        console.log(props);
    })
    return (
        <View style={styles.listItem}>
            <Text>
                {props.item.details}
            </Text>
            <TouchableOpacity
                onPress={() => deleteItemHandler(props.item.id)}>
                <FontAwesome name="times" size={24} color="red" />
            </TouchableOpacity>
        </View>

    );
}

export default DeletableListItem;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 12,
        minHeight: 100,
        backgroundColor: '#eaeaea',
        marginBottom: 14,
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16
    }
})