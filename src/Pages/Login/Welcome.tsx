import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Image } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const Welcome = (props) => {

    useEffect(() => {
        console.log(props.firstTime);
    })
    return (
        <ImageBackground style={styles.imageBG} source={imageBG}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../../assets/adaptive-icon.png')} />
                <Text>Welcome</Text>
            </View>

            <View style={
                styles.loginButton
            }>
                <Text onPress={() => { props.navigation.navigate('Login')}}> Login
                </Text>
            </View>
            <View style={styles.registerButton}>
                <Text onPress={() => { props.navigation.navigate('Registration') }}> Register
                </Text>
            </View>

        </ImageBackground>


    )
}

const imageBG = {
    uri: 'https://picsum.photos/200/300'
}

const styles = StyleSheet.create({
    imageBG: {
        height: '100%',
        flex: 10,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flexWrap: 'wrap'
    },
    loginButton: {
        width: '100%', backgroundColor: 'tomato', height: 70, justifyContent: 'center', alignItems: 'center'
    },
    registerButton: {
        width: '100%', backgroundColor: 'gold', height: 70, justifyContent: 'center', alignItems: 'center'

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


export default Welcome;