import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Button, Pressable, View, StyleSheet } from "react-native";
import MessageList from "../Messages/MessageList";
import ProfileMenu from "../Profile/ProfileMenu";
import ShoppingList from "../ShoppingList/ShoppingList";
import Splash from "../Splash/Splash";
import { Feather, Entypo, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();

const AppTabs = (props) => {
    return (
        <Tab.Navigator
            initialRouteName="Shopping List"
            screenOptions={
                {
                    headerTintColor: 'green',
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTitleAlign: 'center',

                }}>
            <Tab.Screen
                name='ProfileMenu'
                component={ProfileMenu}
                options={
                    {
                        tabBarIcon: (() => (
                            <Feather name="help-circle" size={24} color="black" />
                        )),
                        headerRight: () => (
                            <Pressable onPress={() => { props.navigation.navigate('Splash') }}>
                                <View style={styles.icon}></View>
                            </Pressable>)


                    }}
            />
            <Tab.Screen name='Splash' component={Splash}
                options={
                    {
                        tabBarIcon: (() => (
                            <Ionicons name="school" size={24} color="black" />
                        ))
                    }
                }
            />
            <Tab.Screen name='Message List' component={MessageList}
                options={
                    {
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
                        )),
                        headerRight: () => (
                            <Pressable onPress={() => { props.navigation.navigate('Splash') }}>
                                <View style={styles.icon}></View>
                            </Pressable>)


                    }}
            />


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