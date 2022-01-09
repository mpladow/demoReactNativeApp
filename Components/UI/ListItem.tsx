import React from 'react';

import { ImageBackground, Switch, StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert, Platform, SafeAreaView } from 'react-native';


const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>
                { props.title}
            </Text>
        </View>
        
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