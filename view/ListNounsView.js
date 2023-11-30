import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView,View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { useNounsContext } from '../controller/NounsController'
import styles from "../assets/css/ListCss";

export default function ListNounsView() {

  const {state, dispatch} = useNounsContext();
  const [data, setData] = useState(state.nouns);


  const Item = (props) => {
    const { firstname,   photo } = props;
    return (
      <View style={styles.listcontainer}>
        <Image style={styles.listlead} source={{ uri: photo }} />
        <View style={styles.listtextcontainer}>
          <Text style={styles.listhead}>{firstname}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}>
          {/* <Image style={styles.listtrail} source={{ uri: photo }} /> */}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={data}
      renderItem={({item}) => <Item 
      firstname={item.firstname} 
      photo= {item.photo}
      />}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
  )
}
