import React from 'React';
import { createStackNavigator } from '@react-navigation/stack';
import Help from './Help';
import { StyleSheet, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileModal from '../Profile/ProfileModal';

const HelpStack = () => {
    const nav = useNavigation();
    const HelpStack = createStackNavigator();

    return (
        <HelpStack.Navigator
            screenOptions={{
                headerBackTitle: 'Back',
                headerTitleAlign: 'center',
                headerRight: () => (
                    <Pressable
                        onPress={() => { nav.navigate('Profile') }}>
                        <View
                            style={styles.icon}></View>
                    </Pressable>)
            }}>
            <HelpStack.Screen
                name='Help'
                component={Help}
            />
            <HelpStack.Screen
                name='Profile'
                component={ProfileModal}
            />

        </HelpStack.Navigator>
    )
}

export default HelpStack;

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