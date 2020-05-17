import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#d81b60',
  },

  itemsList: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  statusBar: {
    backgroundColor: '#b0003a',
    height: getStatusBarHeight(0),
    width: '100%',
    justifyContent: 'center',
    opacity: 0.7
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
  },

  iconSearch: {
    alignSelf: 'center',
    // color: '#d81b60',
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

  emptyScreen: {
    flex: 1,
    height: '100%',
    position: 'absolute', 
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

  hintText: {
    fontSize: 16,
    color: '#999',
    marginRight: 10,
    bottom: 5,
  },

  instructionBox: {
    position: 'absolute',
    fontSize: 16,
    color: '#999',
    bottom: (65/2) + 5,
    flexDirection: 'row',
  },

  alertIcon: {
    alignSelf: 'center',
    color: '#999',
  },

  button: {
    backgroundColor: '#b0003a',
    position: 'absolute',
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    borderRadius: 65/2
  },

  cardList: {
    flex: 1,
    width: '100%',
    // marginBottom: 10,
    height: '100%',
  },

  callText: {
    alignItems: 'center',
    marginTop: '35%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 40,
    color: '#a00037',
  },


  cardItem: {
    margin: 0,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderWidth: 0,
    flexDirection: 'row',
    borderRadius: 4,
  },

  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  }
});

export default styles;