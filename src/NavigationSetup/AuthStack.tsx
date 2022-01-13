import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, View, Image, ImageBackground, Platform, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


import React, { useContext, useEffect, useState } from 'react';


import Registration from "../Pages/Registration/Registration";
import Welcome from "../Pages/Login/Welcome";
import Login from "../Pages/Login/Login";
import AuthContext from "../Contexts/AuthContext";
import Splash from "../Pages/Splash/Splash";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
    const nav = useNavigation();
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
                    headerTitleAlign: 'center',

                }}
        >
            <Stack.Screen
                name='Splash'
                component={Splash}
                options={{
                    title: "Splash",
                }}
            />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
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
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default AuthStack;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    icon: {
        backgroundColor: 'green', width: 35, height: 35, marginRight: 12, borderRadius: 25
    }
});