import React from 'react';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Button, Platform, Pressable } from 'react-native';
import { Text, StyleSheet, TextInput, View } from 'react-native';
import globalStyles from '../../Styles/styles';


const Splash = (props) => {
    return (
        <View style={globalStyles.container}>
            <Text>THIS IS A SPLASH SCREEN. Headers for this page have been switched off.</Text>
        </View>
    )

}

export default Splash;

const styles = StyleSheet.create({

})