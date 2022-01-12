import React, { createContext, FC, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from "react-native-gesture-handler";

// declare a new context of type auth context data
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: FC = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>();

    useEffect(() => {
        loadStorageData()
    }, [])

    async function loadStorageData() {
        try {
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');

            if (authDataSerialized) {
                // if there is data, its converted to an object and we update the state
                const _authData: AuthData = JSON.parse(authDataSerialized);
                setAuthData(_authData);
            }
        } catch (e) {

        } finally {
            setLoading(false);
        }
    }

    const [loading, setLoading] = useState(true);

    const signIn = async (email: string, password:string) => {
        // maybe we can use a service?
        //call the service passing credential (email and password). 

        // CALL THE API to validate the email and password
        // get a token from the database
        // then
        
        const _authData = { token: Math.random.toString(), email: email, name: password };

        //Set the data in the context, so the App can be notified
        //and send the user to the AuthStack
        setAuthData(_authData);

        // set the data in Asyn storage
        AsyncStorage.setItem('@AuthData', JSON.stringify(_authData)); 
    };



    const signOut = async () => {
        //Remove data from context, so the App can be notified
        //and send the user to the AuthStack
        console.log("removing @AuthData")
        setAuthData(undefined);
        await AsyncStorage.removeItem('@AuthData');
    };

    return (
        //This component will be used to encapsulate the whole App,
        //so all components will have access to the Context
        <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

