import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, Modal, Pressable, StyleSheet } from 'react-native';
import globalStyles from '../../Shared/styles';
import AuthContext from '../Context/AuthContext';

const ProfileMenu = (props: any) => {

    const [modalVisible, setModalVisible] = useState(false);
    const logOutHandler = () => {
        console.log("Log out?")
        Alert.alert('Do you want to log out?',
            "You will be returned to the login screen",
            [{
                text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"
            }, { text: "Log Out", onPress: () => { console.log("set value in context to logged out. remove all tokens.") } }]);
    }
    // allows us to access the upper level context storage (user information)
    const userFromContext = React.useContext(AuthContext);

    // run right after the component dom is updated
    //useEffect(() => {
    //    alert(userFromContext);
    //})

    return (
        <View style={globalStyles.container}>
            <View></View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View>
                <Text>User: </Text>
            </View>
            <Button title='LogOut' onPress={() => logOutHandler()} />
            <Button title='Open Modal' onPress={() => setModalVisible(!modalVisible)} />
        </View>)

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default ProfileMenu;