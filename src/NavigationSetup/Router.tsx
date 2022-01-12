import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useAuth } from '../Contexts/AuthContext';
import Login from '../Pages/Login/Login';
import Splash from '../Pages/Splash/Splash';
import AppTabs from './AppTabs';
import AuthStack from './AuthStack';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileModal from '../Pages/Profile/ProfileModal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export const Router = () => {
    //More explanations about "authData" below
    const { authData, loading } = useAuth();

    if (loading) {
        return <Login />
    }
    const RootStack = createNativeStackNavigator();

    // set up linking for screens
    // const linking = {
    //     config: {
    //         Welcome: {
    //             path: 'welcome',
    //             screens: {
    //                 Login: 'login',
    //                 Registration: 'registration'
    //             }
    //         },
    //         // Feed: "feed/:sort?/:type",
    //         // Menu: {
    //         //     path: "menu",
    //         //     screens: {
    //         //         TabA: "a",
    //         //         TabB: "b",
    //         //     },
    //         // },
    //         // NotFound: "404",
    //     },
    // };
    
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Group screenOptions={{
                    headerShown: false
                }}>
                    {/*these screens are dependant on whether user has auth or not*/}
                    {authData?.token ? <RootStack.Screen name='App' component={AppTabs} /> : <RootStack.Screen name='Auth' component={AuthStack} />}
                </RootStack.Group>
                <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                    {/*these can be split between private and public modals*/}
                    {authData?.token && <RootStack.Screen name='Profile' component={ProfileModal}></RootStack.Screen>
                    }
                </RootStack.Group>
            </RootStack.Navigator>
        </NavigationContainer>
    );
};