import "react-native-gesture-handler";
import * as React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Platform, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Splash from './Components/Splash/Splash';

import { useState, useEffect } from 'react';
import AppTabs from "./Components/NavigationSetup/AppTabs";
import AuthProvider from "./Components/Context/AuthContext";
import AuthStack from "./Components/NavigationSetup/AuthStack";
import { Router } from "./Components/NavigationSetup/Router";
import PlatformContext from "./Components/Context/PlatformContext";
import { PlatformType } from "./Definitions/types";



export default function App() {

    let [isLoading, setIsLoading] = useState(false);
    let [isSignOut, setIsSignOut] = useState(false);
    let [userToken, setUserToken] = useState(false);

    const [platform, setPlatform] = useState<PlatformType>({} as PlatformType)

    useEffect(() => {
        let web = Platform.OS === 'web' && Dimensions.get('window').width > 700;
        let iOS = Platform.OS === 'ios';
        let android = Platform.OS === 'android';

        setPlatform({ web, iOS, android });
    }, [])
    if (isLoading) {
        return <Splash />
    }


    return (
        <PlatformContext.Provider value={platform}>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </PlatformContext.Provider>


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
