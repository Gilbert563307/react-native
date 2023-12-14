import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useUsersContext } from '../../controller/UsersController';
import styles from '../../assets/users/users';

export default function CollectReadUser() {

  const { state } = useUsersContext();
  const user = state.user[0];



  return (

    <SafeAreaView style={styles.readUserContainer}>
      <View style={styles.readUserItem}>
        <View>
          <Text style={{ ...styles.h1Text, ...styles.textCenter }}>{user.name}</Text>
          <Text style={{ ...styles.textCenter }}>{user.email}, {user.address.suite}</Text>
        </View>
        <View style={styles.contact}>
          <Text style={styles.h2Text}>Contact info</Text>
          <Text>Street: {user.address.street}</Text>
          <Text>Zipcode: {user.address.zipcode}</Text>
          <Text>Phone: {user.phone}</Text>
        </View>
      </View>
    </SafeAreaView >
  )
}
