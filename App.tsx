import "react-native-gesture-handler";
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';


import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import Welcome from './Components/Login/Welcome';
import Splash from './Components/Splash/Splash';

import { useState } from 'react';
import ProfileMenu from './Components/Profile/ProfileMenu';
import { forFade } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackWelcome from "./Components/NavigationSetup/StackWelcome";
import TabBottom from "./Components/NavigationSetup/TabBottom";
import AuthContext from "./Components/Context/AuthContext";



export default function App() {

    let [loading, setLoading] = useState(false);
    let [isSigningOut, setIsSigningOut] = useState(false);
    if (loading) {
        return <Splash />
    }
    let [signedIn, setIsSignedIn] = useState(true);

    return (
        <NavigationContainer>
            {
                <AuthContext.Provider value="Bob Jane ... T Mart">
                    {signedIn ?
                        <TabBottom /> :
                        <StackWelcome />
                    }
                </AuthContext.Provider >
            }

        </NavigationContainer>
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
