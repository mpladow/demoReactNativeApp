import "react-native-gesture-handler";
import * as React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Splash from './Components/Splash/Splash';

import { useState } from 'react';
import AppTabs from "./Components/NavigationSetup/AppTabs";
import AuthProvider from "./Components/Context/AuthContext";
import AuthStack from "./Components/NavigationSetup/AuthStack";
import { Router } from "./Components/NavigationSetup/Router";



export default function App() {

    let [isLoading, setIsLoading] = useState(false);
    let [isSignOut, setIsSignOut] = useState(false);
    let [userToken, setUserToken] = useState(false);
    if (isLoading) {
        return <Splash />
    }


    return (
        <AuthProvider>
            <Router />
        </AuthProvider>


    )
}
const imageBG = {
    uri: 'https://picsum.photos/200/300'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent',


    },
});
