import React, { Component } from 'react';
import {View,} from 'react-native';
import styles from './Styles';

import Header from './src/Header';
import ItemsList from './src/ItemsList';

export default function App() {  
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}/>
      <Header/>
      <ItemsList/>
    </View>
  );
}