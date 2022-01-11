import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LearnHome from './LearnHome';
import { Pressable, View } from 'react-native';
import styles from '../../Styles/styles';
import { useNavigation } from '@react-navigation/native';
import ProfileModal from '../Profile/ProfileModal';

const LearnStack = () => {

    const nav = useNavigation();
    const LearnStack = createStackNavigator();
    return (<LearnStack.Navigator screenOptions={{
        headerTitleAlign: 'center',

        headerRight: () => (
            <Pressable onPress={() => { nav.navigate('Splash') }}>
                <View style={styles.iconRound}></View>
            </Pressable>
        )
    }}>
        <LearnStack.Screen name='Learn' component={LearnHome}></LearnStack.Screen>
        <LearnStack.Screen name='Profile' component={ProfileModal}/>
    </LearnStack.Navigator>)

}

export default LearnStack;