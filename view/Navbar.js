import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {

    const styles = StyleSheet.create({
        navbar: {
          display: "flex",
          gap: "15em",
          flexDirection: "row",
          backgroundColor: "#55585c",
        },
        button: {
          backgroundColor: 'black',
          paddingTop: 15,
          paddingBottom: 15,
          paddingRight: 15,
          paddingLeft: 15,
        },
        text: {
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        }
      });
    
  
  const routes = {
    routeOne: {name: "Products", url: "Products"},
    routeTwo: {name: "Nouns", url: "LandingView"},
  }

  const navigation = useNavigation();
  function goTo(url) {
    return () => navigation.navigate(url);
  }

  return (
    <View style={styles.navbar}>
        <Pressable style={styles.button}onPress={goTo(routes.routeOne.url)}>
          <Text style={styles.text}>Products</Text>
        </Pressable>
        <Pressable style={styles.button}onPress={goTo(routes.routeTwo.url)}>
          <Text style={styles.text}>Nouns</Text>
        </Pressable>
      </View>
  )
}
