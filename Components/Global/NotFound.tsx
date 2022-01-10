import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import mobStyles from '../../Styles/styles';
import { RootStackScreenProps } from '../../Definitions/types';


const NotFound = (navigation) => {
    <View style={mobStyles.container}>
        <Text>Page not found</Text>
        <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
            <Text style={mobStyles.linkText}>Go to home screen!</Text>
        </TouchableOpacity>
    </View>
}

export default NotFound;

const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
