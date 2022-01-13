import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Button, Pressable, View, StyleSheet } from "react-native";
import ShoppingList from "../Pages/ShoppingList/ShoppingList";
import { Feather, Entypo, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MessageListStack from "../Pages/Messages/MessageListStack";
import JobsStack from "../Pages/Jobs/JobsStack";
import HelpStack from "../Pages/Help/HelpStack";
import { useNavigation } from "@react-navigation/native";
import LearnStack from "../Pages/Learn/LearnStack";




const Tab = createBottomTabNavigator();

const AppTabs = (props: any) => {
    const nav = useNavigation();
    return (
        <Tab.Navigator
            initialRouteName="Jobs"
            screenOptions={
                {
                    headerShown: false,
                    headerTintColor: 'green',
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTitleAlign: 'center',
                }}>
            <Tab.Group>
                <Tab.Screen
                    name='JobsStack'
                    component={JobsStack}
                    options={
                        {
                            title: 'Jobs',
                            tabBarIcon: (() => (
                                <Ionicons name="briefcase-outline" size={24} color="black" />
                            )),
                            headerRight: () => (
                                <Pressable onPress={() => { nav.navigate('Profile') }}>
                                    <View style={styles.icon}></View>
                                </Pressable>)


                        }}
                />
                <Tab.Screen name='LearnHome' component={LearnStack}
                    options={
                        {
                            title: 'Learn',
                            tabBarIcon: (() => (
                                <Ionicons name="school" size={24} color="black" />
                            )),
                            headerRight: () => (
                                <Pressable onPress={() => { nav.navigate('Profile') }}>
                                    <View style={styles.icon}></View>
                                </Pressable>)
                        }
                    }
                />
                <Tab.Screen name='Message List' component={MessageListStack}
                    options={
                        {
                            title: 'Messages',
                            tabBarIcon: (() => (
                                <AntDesign name="message1" size={24} color="black" />
                            ))
                        }
                    }
                />
                <Tab.Screen name='Shopping List'
                    component={ShoppingList}
                    options={
                        {
                            tabBarIcon: (() => (
                                <Entypo name="list" size={24} color="black" />
                            ))
                        }}
                />
                <Tab.Screen name='HelpPage'
                    component={HelpStack}
                    options={
                        {
                            title: 'Help',
                            tabBarIcon: (() => (<Feather name="help-circle" size={24} color="black" />))
                        }
                    } />
            </Tab.Group>
        </Tab.Navigator>
    )
}

export default AppTabs;

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