import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useUsersContext } from '../../controller/UsersController';
import styles from '../../assets/users/users';
export default function CollectListUsersView() {

  const { state, dispatch } = useUsersContext();

  const viewUser = (userId) => {
    dispatch({ type: "READUSER", payload: { id: userId } });
  }

  const updateUser = (user) => {
    dispatch({ type: "COLLECTUPDATEUSER", payload: { user: user } });
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.phone}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => viewUser(item.id)}>
            <Text>Read</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.button, ...styles.updateButton }} onPress={() => updateUser(item)}>
            <Text style={styles.colorWhite}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={state.users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView >
  )
}
