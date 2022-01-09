import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Button, Pressable, View, StyleSheet } from "react-native";
import MessageList from "../Messages/MessageList";
import ProfileMenu from "../Profile/ProfileMenu";
import ShoppingList from "../ShoppingList/ShoppingList";
import Splash from "../Splash/Splash";

const Tab = createBottomTabNavigator();

const TabBottom = (props) => {
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
                        headerRight: () => (
                            <Pressable onPress={() => { props.navigation.navigate('Splash') }}>
                                <View style={styles.icon}></View>
                            </Pressable>)

                        
                    }}
            />
            <Tab.Screen name='Splash' component={Splash} />
            <Tab.Screen name='Message List' component={MessageList} />
            <Tab.Screen name='Shopping List' component={ShoppingList} />


        </Tab.Navigator>
    )
}

export default TabBottom;

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