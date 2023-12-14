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
    

  const routes = [
    {name: "Nouns", url: "LandingView"},
    {name: "Users", url: "LandingUsersView"},
  ]

  const navigation = useNavigation();
  function goTo(url) {
    return () => navigation.navigate(url);
  }

  return (
    <View style={styles.navbar}>
        {
          routes.map((obj, key) => {
            return <Pressable key={key} style={styles.button}onPress={goTo(obj.url)}>
            <Text style={styles.text}>{obj.name}</Text>
          </Pressable>
          })
        }
      </View>
  )
}
