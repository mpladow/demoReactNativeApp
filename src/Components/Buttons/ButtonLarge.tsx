import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import mobStyles from '../../Styles/styles';

const ButtonLarge = (props) => {

    const onButtonPressHandler = (e) => {
        props.onPress();
    }
    return (
        <Pressable style={styles.buttonLargeContainer} onPress={onButtonPressHandler}>
            <View style={styles.innerContainer}>
                <View style={styles.innerTop}>
                </View>
                <View style={styles.innerBottom}>
                    <Text style={[mobStyles.headingMed]}>{props.title}</Text>
                    <Text>{props.description}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ButtonLarge;

const styles = StyleSheet.create({
    buttonLargeContainer: {
        flex: 1,
        flexShrink: 1,
        flexBasis: 0,
        flexGrow: .5,
        flexDirection: 'column',
        borderRadius: 8,
        backgroundColor: '#fff',
        overflow: "hidden",
        elevation: 1,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOpacity: .2, // IOS
        shadowRadius: 3, //IOS 
        

    },
    innerContainer: {
        height: '100%'
    },
    innerTop: {
        backgroundColor: '#0C2340',
        flex: 1,
        flexDirection: "column",
        padding: 6


    },
    innerBottom: {
        flex: 1.5,
        flexDirection: "column",
        padding: 6,
        paddingLeft: 12,
        paddingRight: 12

    },
    innerButtonText: {

    },
    title: {
    }
})
