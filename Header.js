import React, { useState, Component } from 'react';
import { Text, AppRegistry, TextInput, Image, Button, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faArrowRight, faHandPeace , faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../Styles';

import logo from '../assets/logo.png';
import logo_inv from '../assets/logo_inv.png';
import typo_horizontal from '../assets/typo_horizontal.png';
import typo_vertical from '../assets/typo_vertical.png';
import typo_inv_horizontal from '../assets/typo_inv_horizontal.png';
import typo_inv_vertical from '../assets/typo_inv_vertical.png';

export default function Header(){
    return(
      <View style={styles.header}>
        <View style={styles.logosHeader}>
          <Image source={logo_inv} style={styles.headerImage}/>
          <Image source={typo_inv_horizontal} style={styles.headerImage2}/>
        </View>
        <FontAwesomeIcon style={styles.iconSearch} icon={ faSearch } />
      </View>
    )
}