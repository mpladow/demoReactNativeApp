import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignSelf: 'center',
        width: '50%',
        padding: 12, 
        // gap: 6
        margin: 6
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
    buttonsGroupLarge: {
        padding: 16,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ddd',
        width: '100%',
        alignItems: 'stretch'
    },

});