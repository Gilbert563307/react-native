import React, { useEffect } from 'react'
import { SafeAreaView, Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useNounsContext } from '../../controller/NounsController';

export default function ReadNounView() {

  const { state, dispatch } = useNounsContext();

  const windowWidth = Dimensions.get("window").width;

  const updateNoun = () => {
    const noun = state.noun;
    dispatch({ type: "UPDATENOUN", payload: noun });
  }

  const deleteNoun = () => {
    const noun = state.noun;
    dispatch({ type: "DELETENOUN", payload: noun });
  }

  const styles = StyleSheet.create({
    container: {
      top: 0,
      position: "relative",
      backgroundColor: "#fff",
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    infoContainer: {
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "row",
      height: 100,
      position: "absolute",
      top: 350,
      width: windowWidth,
    },
    readinfo: {
      paddingLeft: 20,
      paddingTop: -20,
    },
    actions: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "gray",
      height: 40,
      width: 40,
      borderRadius: 50
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          style={{ width: '100%', height: 280 }}
          source={{
            uri: state.noun.photo
          }}
        >
          <LinearGradient
            colors={['#00000000', '#fff']}
            style={{ height: '100%', width: '100%' }}
          />
        </ImageBackground>
      </View>

      <View style={{ ...styles.infoContainer, ...styles.shadow }}>
        <View style={styles.readinfo}>
          <Text style={styles.titleText}>{state.noun.name}</Text>
          <Text>{state.noun.bornAt}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button} onPress={updateNoun}>
            <Icon name='pencil' size={30}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={deleteNoun}>
            <Icon name="trash" size={30} color="#900" />
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  )
}
