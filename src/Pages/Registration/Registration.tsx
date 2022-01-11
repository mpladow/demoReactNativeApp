import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ImageBackground, Switch, StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert, Platform, SafeAreaView } from 'react-native';
import { Demo } from '../../Models/Demo';
import Input from '../../Components/Shared/Forms/Input';
import CSwitch from '../../Components/Shared/Forms/Switch';
import CheckboxGroup from '../../Components/Shared/Forms/CheckboxGroup';
import RadioGroup from '../../Components/Shared/Forms/RadioGroup';
import FileSelect from '../../Components/Shared/Forms/FileSelect';
import mobStyles from '../../Styles/styles' 


const Registration = ({ navigation, route}) => {

    const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        defaultValues: {
            'FirstName': '',
            'Surname': '',
            'Email': '',
            'Subscribe': true,
            'TAC': false,
            'ShowAdditional': false,
            'Preferences': [],
            'HumanPreference': ''
        }
    });
    let demoPerson: Demo = new Demo();
    const onSubmit = (data: any) => {
        Alert.alert(JSON.stringify(data));
        if (Platform.OS === 'web') {
            alert(JSON.stringify(data));
        }
    };

    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    useEffect(() => {
        fetchUsers();
    }, [])
    const fetchUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const { name, email } = await res.json();
            console.log(name);
            console.log(email);
            setValue("FirstName", name);
            setValue("Email", email);

        } catch (e) {

        }
    }

    const showAdditional = watch("ShowAdditional");


    return (
        <SafeAreaView style={mobStyles.container}>
            <View style={styles.headerBG}>
                <Image style={styles.logo} source={require('../../../assets/adaptive-icon.png')} />
                <Text>Welcome</Text>
            </View>

            <ScrollView style={[{ flex: 4, width: '100%', paddingBottom: 60 }, mobStyles.card]}>

                <Controller
                    name='FirstName'
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (

                        <Input labelName="First Name"
                            showLabel={ true}
                            error={errors.FirstName}
                            errorText={errors.FirstName?.message}
                            autoCorrect={false}
                            style={mobStyles.cInput}
                            placeholder={"Enter First Name"}
                            onChangeText={(value: any) => { onChange(value) }}
                            value={value}
                        />

                    )}
                    rules={{
                        required: {
                            value: true,
                            message: "First name is required"
                        }
                    }}
                />
                <Controller
                    name='Surname'
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            labelName="Surname"
                            showLabel={true}
                            error={errors.Surname}
                            errorText={errors.Surname?.message}
                            autoCorrect={false}
                            style={mobStyles.cInput}
                            placeholder={"Enter Surname"}
                            onChangeText={(value: any) => { onChange(value) }}
                            value={value}
                        />
                    )}
                    rules={{
                        required: {
                            value: true,
                            message: "Surname is required"
                        }
                    }}
                />
                <Controller
                    name='Email'
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (

                        <Input
                            labelName="Surname"
                            showLabel={true}
                            autoCorrect={false}
                            error={errors.Email}
                            errorText={errors.Email?.message}
                            style={mobStyles.cInput}
                            placeholder={"Enter Email"}
                            onChangeText={(value) => { onChange(value) }}
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
                    name='Subscribe'
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CSwitch
                            labelText="Subscribe to SMS"
                            showLabel={true}
                            error={errors.Subscribe}
                            errorText={errors.Subscribe?.message}
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={(newValue) => onChange(newValue)}
                            value={value}
                        />

                    )}
                />
                <Controller
                    name='TAC'
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CSwitch
                            labelText="Do you agree to the terms and conditions?"
                            showLabel={true}
                            error={errors.TAC}
                            errorText={errors.TAC?.message}
                            value={value}
                            onValueChange={(newValue) => onChange(newValue)}
                        />

                    )}
                    rules={{
                        required: {
                            value: true,
                            message: "You must agree to the terms and conditions"
                        },

                    }}
                />
                <Controller
                    name='ShowAdditional'
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CSwitch
                            labelText="Show additional controls?"
                            showLabel={ true}
                            value={value}
                            onValueChange={(newValue) => {
                                onChange(newValue);// this sets the value to the form
                            }}
                        />

                    )}
                />
                {showAdditional && (
                    <>
                        <Input
                            labelName="Surname"
                        />

                        <CheckboxGroup
                            options={['apple', 'android', 'web']}
                            control={control}
                            name="Preferences"
                            labelName="Please select preferences"
                            row={true}
                        />
                        <RadioGroup
                            options={['Yes', 'No', 'Both']}
                            control={control}
                            name="HumanPreference"
                            labelName="Are you human?"
                            row={true}
                        />
                        <FileSelect/>
                    </>
                )
                }
            </ScrollView>
            <View style={styles.registerButton}>
                <Button key='btnRegister' title='Register' onPress={handleSubmit(onSubmit)}> Register
                </Button>

            </View>
        </SafeAreaView>
    )
}

const imageBG = {
    uri: 'https://picsum.photos/200/300'
}

const styles = StyleSheet.create({

    headerBG: {
        height: '100%',
        flex: 1,
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        color: 'white'
    },
    registerButton: {
        width: '100%', backgroundColor: 'gold', justifyContent: 'center', alignItems: 'center'

    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute', top: 50
    },
    logo: {
        width: 100, height: 100
    }
});


export default Registration;