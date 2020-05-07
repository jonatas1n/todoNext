import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: '#e8eaf6',
        alignItems: 'center',
    },

    decoration: {
        backgroundColor: '#b0003a',
        height: 65,
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
    },

    searchBar: {
        borderColor: '#e91e63',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 2,
        alignSelf: 'stretch',
        display: 'flex',
        marginTop: 40,
        height: 44,
        marginBottom: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },

    iconSearch: {
        alignSelf: 'center',
        color: '#e91e63',
    },

    searchInput: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 3, 
    },

    alert: {
        flex: 1,
        justifyContent: 'center',
    },

    alertText: {
        fontSize: 18,
        color: '#999',
    },

    alertText2: {
        fontSize: 16,
        color: '#999',
        marginRight: 10,
    },

    alertBox: {
        fontSize: 16,
        color: '#999',
        position: 'absolute',
        right: 10 + (65/2),
        bottom: 10 + (65/2),
        flexDirection: 'row',
    },

    iconAlert: {
        alignSelf: 'center',
        color: '#999',
        marginTop: 20,
    },

    iconAlert2: {
        alignSelf: 'center',
        top: 2,
        color: '#999'
    },

    iconTrash: {
        color: '#999',
    },

    button: {
        backgroundColor: '#3f51b5',
        position: 'absolute',
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        borderRadius: 65/2
    },

    buttonText: {
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
    },

    cardList: {
        width: '100%',
        marginBottom: 10,
        height: '110%',
    },

    card: {
        top: -10,
    },

    cardItem: {
        margin: 0,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0,
        flexDirection: 'row',
    },

    cardText: {
        marginLeft: -20,
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    }
});

export default styles;