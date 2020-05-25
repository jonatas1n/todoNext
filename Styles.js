import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const cor = {
  primary: '#d81b60',
  light: '#ff5c8d',
  dark: '#a00037',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cor.primary,
  },

  statusBar: {
    backgroundColor: cor.dark,
    height: getStatusBarHeight(0),
    width: '100%',
    justifyContent: 'center',
    opacity: 0.7,
    // position: 'absolute'
    },

  header: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#d81b60',
    height: 50,
    // marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 10,
    justifyContent: 'space-between',
    },

  headerImage: {
    width: 44,
    height: 44,
    opacity: 0.8,
  },

  headerImage2: {
    width: 140,
    height: 44,
  },

  logosHeader:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: "space-between",
  },

  cardItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardNote: {
    maxWidth: 500,
    alignSelf: 'center',
    flex: 1,
    width: '100%',
    marginHorizontal: 50,
    elevation: 3,
  },

  emptyScreen: {
    alignItems: 'center',
    alignSelf: 'center',
  },

  alertText: {
    fontSize: 16,
    color: '#999',
    marginTop: 60,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  
  alertIcon: {
    alignSelf: 'center',
    color: '#999',
    marginLeft: 15,
  },

  button: {
    backgroundColor: cor.primary,
    zIndex: 50,
    elevation: 8,
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 65/2
  },

  cardList: {
    flex: 1,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
    height: '100%',
  },

  callText: {
    alignItems: 'center',
    marginTop: '45%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 40,
    color: '#a00037',
  },

  cardTextNote: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    flex: 1,
  },

  createBar: {
    // position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    height: 'auto',
    bottom: 0,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'space-between',
    },

  searchBar: {
    // position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    height: 'auto',
    bottom: 0,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'space-between',
    },
});

export default styles;