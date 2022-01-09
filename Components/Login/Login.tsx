import React, { useState } from 'react';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Button, Platform, Pressable, SafeAreaView } from 'react-native';
import { Text, StyleSheet, TextInput, View } from 'react-native';
import Input from '../../Shared/Forms/Input';
import globalStyles from '../../Shared/styles';


const Login = (props:any) => {
    const [loading, setLoading] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        defaultValues: {
            'Email': '',
            'Password': ''
        }
    });
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const loginHandler = (data: any) => {
        setLoading(true);
        console.log(data);
        Alert.alert(JSON.stringify(data));
        if (Platform.OS === 'web') {
            alert(JSON.stringify(data));
        }

        authUser().then();


    }

    const authUser = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const { name, email } = await res.json();
            // set session or global state to this person
        } catch (e) {

        }
    }
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text>Login</Text>
            <Controller
                name='Email'
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input labelName='Email'
                        showLabel={false}
                        error={errors.Email}
                        errorText={errors.Email?.message}
                        autoCorrect={false}
                        style={globalStyles.cInput}
                        placeholder={"Enter Email"}
                        onChangeText={(value: any) => { onChange(value) }}
                        value={value}
                    />
                )}
                rules={{
                    required: {
                        value: true,
                        message: "Email is required"
                    },
                    pattern: {
                        value: EMAIL_REGEX,
                        message: 'Email is invalid'
                    }
                }}
            />
            <Controller
                name='Password'
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input labelName='Password'
                        showLabel={false}
                        error={errors.Password}
                        errorText={errors.Password?.message}
                        autoCorrect={false}
                        style={globalStyles.cInput}
                        placeholder={"Enter Password"}
                        onChangeText={(value: any) => { onChange(value) }}
                        value={value}
                    />
                )}
                rules={{
                    required: {
                        value: true,
                        message: "Password is required"
                    }
                }}
            />
            <View>
                <Button title='Login' onPress={handleSubmit(loginHandler)} />
                <Pressable onPress={() => props.navigation.goBack()}><Text>Go Back</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({

})