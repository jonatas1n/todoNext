import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
    all: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: 'center',
    },

    retorno: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 15,
    },

    statusBar: {
        backgroundColor: '#b0003a',
        height: getStatusBarHeight(0),
        width: '100%',
        justifyContent: 'center',
    },

    header: {
        alignSelf: 'center',
        width: '100%',
        backgroundColor: '#d81b60',
        height: 50,
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 10,
        justifyContent: 'space-between',
    },

    headerImage: {
        width: 44,
        height: 44,
    },

    headerImage2: {
        width: 140,
        height: 44,
    },

    logosHeader:{
        flexDirection: 'row',
    },

    iconSearch: {
        alignSelf: 'center',
        color: '#fff',
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

    alertText: {
        fontSize: 18,
        color: '#999',
        marginTop: 60,
        textAlign: 'center',
    },

    alertText2: {
        fontSize: 16,
        color: '#999',
        marginRight: 10,
        bottom: 5,
    },

    alertBox: {
        position: 'absolute',
        fontSize: 16,
        color: '#999',
        bottom: (65/2),
        flexDirection: 'row',
    },

    iconAlert: {
        alignSelf: 'center',
        color: '#999',
        marginTop: 20,
    },

    iconAlert2: {
        color: '#999'
    },

    iconTrash: {
        marginLeft: 15,
        color: '#999',
    },

    button: {
        backgroundColor: '#d81b60',
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
        flex: 1,
        width: '100%',
        marginBottom: 10,
        height: '100%',
    },

    card: {
        top: -10,
    },

    alertLogos: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        opacity: 0.4,
    },

    alertLogo: {
        width: 200,
        height: 200,
        justifyContent: 'center',    
    },

    alertLogo2: {
        width: 200,
        height: 200,
        alignItems: 'center',
        marginTop: -60,
    },

    alertLogoText: {
        alignItems: 'center',
        marginTop: -40,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 40,
        color: '#a00037',
    },


    cardItem: {
        margin: 0,
        alignItems: 'center',
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