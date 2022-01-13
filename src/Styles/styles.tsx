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
        padding: 14,
        margin: 6 
    },
    card: {
        padding: 16,

    },
    cInput: {
        borderRadius: 6,
        padding: 8,
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
    textSmall: {
        fontSize: 12
    },
    textMedium: {
        fontSize: 16
    },
    textLarge: {
        fontSize: 20
    },
    headingLarge: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    headingMed: {
        fontSize: 14,
        fontWeight: 'bold'
    },

    iconRound: {
        backgroundColor: 'green', width: 35, height: 35, marginRight: 12, borderRadius: 25
    },
    buttonsGroupLarge: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        // gap: 16
    },
    list: {
        // flex: 1,
        // flexShrink: 1,
        // flexBasis: 0,
        // flexGrow: 1,
        flexDirection: 'column',
        borderRadius: 6,
        overflow: "hidden",
        justifyContent: 'flex-start',
        // gap: 10, // GAP is not valid in React native
        marginTop: 10,
        marginBottom: 10,
        elevation: 1,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOpacity: .2, // IOS
        shadowRadius: 3, //IOS 

    },
    listItem: {
        elevation: 1,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOpacity: .2, // IOS
        shadowRadius: 3, //IOS 
        padding: 12,
        flex: 1,
        minHeight: 80,
        backgroundColor: '#fff'
        // flexShrink: 1,
        // flexBasis: 2,
        // flexGrow: 1,
    },
    listItemUnstyled: {
        borderLeftWidth: 6,
        borderLeftColor: 'transparent'
    },

    listItemUnread: {
        borderLeftWidth: 6,
        borderLeftColor: 'red'
    }

});