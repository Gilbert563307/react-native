import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from "../../assets/css/ListCss";
import { useNounsContext } from '../../controller/NounsController';

export default function ListNounsView() {

  const { state, dispatch } = useNounsContext();

  const readUser = (user) => {
    dispatch({ type: "READNOUN", payload: user });
  }

  const Item = ({ user, name, photo }) => {
    return (
      <View style={styles.listcontainer}>
        <View style={styles.listtextcontainer}>
          <Image style={styles.listlead} source={{ uri: photo }} />
          <Text style={styles.listhead}>{name}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {
          readUser(user)
        }} ><Text>read</Text></TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        //sorting on alafabet
        data={state.nouns.sort((a, b) => a.name.localeCompare(b.name))}
        renderItem={({ item }) => <Item
          user={item}
          name={item.name}
          photo={item.photo}
        />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}
