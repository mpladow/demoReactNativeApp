import React, { useState } from 'react';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Button, Platform, Pressable, SafeAreaView } from 'react-native';
import { Text, StyleSheet, TextInput, View } from 'react-native';
import mobStyles from '../../Styles/styles';
import { useAuth } from '../../Contexts/AuthContext';
import Input from '../../Components/Shared/Forms/Input';


const Login = (props: any) => {
    const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        defaultValues: {
            'Email': '',
            'Password': ''
        }
    });
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const auth = useAuth();


    const loginHandler = (data: any) => {
        console.log(data);
        Alert.alert(JSON.stringify(data));
        if (Platform.OS === 'web') {
            alert(JSON.stringify(data));
        }
        auth.signIn(data.email, data.password);

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
        <SafeAreaView style={mobStyles.container}>
            <View style={styles.containerTop}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Email</Text>
                        <Text>Forgot Password?</Text>
                    </View>

                    <Controller
                        name='Email'
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input labelName='Email'
                                isPassword={false}
                                showLabel={false}
                                error={errors.Email}
                                errorText={errors.Email?.message}
                                autoCorrect={false}
                                style={mobStyles.cInput}
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
                    <Text>Password</Text>

                    <Controller
                        name='Password'
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input labelName='Password'
                                isPassword={true}
                                showLabel={false}
                                error={errors.Password}
                                errorText={errors.Password?.message}
                                autoCorrect={false}
                                style={mobStyles.cInput}
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
                    <View style={{ marginTop: 6 }}>
                        <Button title='Login' onPress={handleSubmit(loginHandler)} />
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'column', marginTop: 6 }}>
                        <Pressable onPress={() => props.navigation.goBack()}><Text>Go Back</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    containerTop: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        padding: 12
    }, containerBottom: { flex: 2 }
})