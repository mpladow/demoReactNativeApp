import "react-native-gesture-handler";
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

const Stack = createNativeStackNavigator();



const DemoStackNav = () => {
    let [loading, setLoading] = useState(false);
    let [isSigningOut, setIsSigningOut] = useState(false);
    if (loading) {
        return <Splash />
    }
    let [signedIn, setIsSignedIn] = useState(false);
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerTintColor: 'green',
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}>
            {signedIn ?
                <>
                    <Stack.Group>
                        <Stack.Screen
                            name='ProfileMenu'
                            component={ProfileMenu}
                            options={({ route }) => ({ title: "Profile" })} />
                        <Stack.Screen
                            name='Splash'
                            component={Splash}
                            options={({ route }) => ({ title: "Splash" })} />
                    </Stack.Group>
                </> :
                <>
                    <Stack.Group>

                        <Stack.Screen
                            name='Welcome'
                            options={{
                                title: 'Welcome', statusBarHidden: true,
                                headerShown: false,
                                animationTypeForReplace: isSigningOut ? 'pop' : 'push',
                            }}>
                            {props => <Welcome {...props} firstTime={true} />}
                        </Stack.Screen>
                        <Stack.Screen name='Registration' component={Registration}
                            options={{ title: 'Welcome' }} />
                        <Stack.Screen name='DetailsScreen' component={Registration} />
                        <Stack.Screen
                            name='Login'
                            component={Login}
                            options={{
                                title: "Login",

                            }}
                        />
                    </Stack.Group>
                </>}
        </Stack.Navigator>
    )
}