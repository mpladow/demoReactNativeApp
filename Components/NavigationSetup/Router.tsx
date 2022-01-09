import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useAuth} from '../Context/AuthContext';
import Login from '../Login/Login';
import Splash from '../Splash/Splash';
import AppTabs from './AppTabs';
import AuthStack from './AuthStack';




export const Router = () => {
    //More explanations about "authData" below
    const { authData, loading } = useAuth();
     
    if (loading) {
        return <Login/>
    }

    return (
        <NavigationContainer>
            {authData?.token ? < AppTabs /> : <AuthStack />}
        </NavigationContainer>
    );
};