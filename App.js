import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faArrowRight, faHandPeace , faTrash } from '@fortawesome/free-solid-svg-icons';
import BlinkView from 'react-native-blink-view';
import styles from './Styles';
import { Card, CheckBox } from 'react-native-elements';

const item = {
  'content': 'Novo item',
  'date': '',
  'check': false,
}

export default function App() {
  const [itemsList, setItemsList] = useState([]);
  
  function cards(){
    if(itemsList.length === 0){
      return(
        <View style={styles.alert}>
          <Text style={styles.alertText}>Não há itens na sua lista de afazeres</Text>
          <FontAwesomeIcon style={styles.iconAlert} size={ 32 } icon={ faHandPeace } />
          <BlinkView blinking={true} delay={300} style={styles.alertBox}>
            <Text style={styles.alertText2}>Adicione um item</Text>
            <FontAwesomeIcon style={styles.iconAlert2} icon={ faArrowRight } />
          </BlinkView>
        </View>
      )
    } else {
      return(
      <ScrollView style={styles.cardList}>
        {
          itemsList.map((u, i) => {
            return (
              <Card containerStyle={styles.card} key={i}>
                <View style={styles.cardItem}>
                  <CheckBox
                    style={styles.cardItem}
                    checked={u.check}
                    containerStyle={styles.cardItem}
                  />
                  <Text
                    onChangeText={value => u.content = value}
                    style={styles.cardText}
                    value>
                      {u.content}
                  </Text>
                  <FontAwesomeIcon style={styles.iconTrash} onPress={() => {setItemsList(itemsList => itemsList.splice(i,1))}} icon={ faTrash } />
                </View>
              </Card>
            )
          })
        }
      </ScrollView>
      )
    }
  }

  return (
    <View style={styles.all}>
      <View style={styles.decoration}>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          placeholderTextColor="black"
          placeholderAlign="left"
        />
        <FontAwesomeIcon style={styles.iconSearch} icon={ faSearch } />
      </View>
      {cards()}
      <TouchableOpacity onPress={() => {let a = item; setItemsList(itemsList => [...itemsList, a]);} } style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}