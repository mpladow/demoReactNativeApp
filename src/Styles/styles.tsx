import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignSelf: 'stretch',
        padding: 12
    },
    card: {
        padding: 16,

    },
    cInput: {
        borderRadius: 20,
        padding: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },

    // common
    textSmall:{
        fontSize: 12
    },
    textMedium: {
        fontSize: 16
    },
    textLarge: {
        fontSize: 20
    },

    iconRound: {
        backgroundColor: 'green', width: 35, height: 35, marginRight: 12, borderRadius: 25
    }

});