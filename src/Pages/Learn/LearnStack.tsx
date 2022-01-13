import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LearnHome from './LearnHome';
import { Pressable, View } from 'react-native';
import styles from '../../Styles/styles';
import { useNavigation } from '@react-navigation/native';
import ProfileModal from '../Profile/ProfileModal';
import LearnContent from './LearnContent';

const LearnStack = () => {

    const nav = useNavigation();
    const LearnStack = createNativeStackNavigator();
    return (<LearnStack.Navigator screenOptions={{
        headerTitleAlign: 'center',

        headerRight: () => (
            <Pressable onPress={() => { nav.navigate('Profile') }}>
                <View style={styles.iconRound}></View>
            </Pressable>
        )
    }}>
        <LearnStack.Screen name='Learn' component={LearnHome}></LearnStack.Screen>
        <LearnStack.Screen name='Profile' component={ProfileModal}/>
        <LearnStack.Screen name='LearnContent' component={LearnContent}></LearnStack.Screen>
    </LearnStack.Navigator>)

}

export default LearnStack;