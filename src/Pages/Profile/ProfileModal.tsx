import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../Styles/styles';
import { Text, Button, Platform, Alert } from 'react-native';
import { useAuth } from '../../Contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

const ProfileModal = () => {
    const auth = useAuth();
    const nav = useNavigation();

    const logoutHandler = () => {
        if (Platform.OS !== 'web') {
            auth.signOut();

            Alert.alert('Do you want to log out?',
                "You will be returned to the login screen [not working in mobile yet]",
                [{
                    text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"
                }, { text: "Log Out", onPress: () => { auth.signOut; nav.navigate('Welcome') } }]);
        } else {
            // Alert.alert only works on mobile devices, alternative will be needed for web
            let result = confirm('Alert.alert only works on mobile devices, alternative will be needed for web. LOGGING OUT NOW')
            if (result === true) {
                auth.signOut();
            }
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textLarge}>PROFILE</Text>
            <Text>Stuff here</Text>
            <Button title='Log out' onPress={logoutHandler}>Log out</Button>
        </SafeAreaView>);
}

export default ProfileModal;