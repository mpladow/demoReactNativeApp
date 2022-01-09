import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';


import React, { useContext, useEffect, useState } from 'react';
import { forFade } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Registration from "../Registration/Registration";
import Welcome from "../Login/Welcome";
import Login from "../Login/Login";
import AuthContext from "../Context/AuthContext";
import Splash from "../Splash/Splash";

const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={
                {
                    headerTintColor: 'green',
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTitleAlign: 'center'
                }}
        >

            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                { }
                <Stack.Screen
                    name='Welcome'
                    options={{
                        title: 'Welcome', statusBarHidden: true,
                        headerShown: false,
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
                <Stack.Screen
                    name='Splash'
                    component={Splash}
                    options={{
                        title: "Splash",

                    }}
                />
            </Stack.Group>

        </Stack.Navigator>
    )
}

export default AuthStack;