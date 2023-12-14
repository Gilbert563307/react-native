import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, Text, TextInput, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { useNounsContext } from '../../controller/NounsController'
export default function UpdateNounView() {

  const { state } = useNounsContext();
  const [name, setName] = useState(state.noun.name);
  const [bornAt, setBornAt] = useState(state.noun.bornAt);
  const [photo, setPhoto] = useState(null);

  const [notification, setNotification] = useState("");

  const { dispatch } = useNounsContext();

  const updateNoun = () => {
    if (name == "" && bornAt == "" && photo != null) {
      return setNotification("Alle velden zijn verplicht");
    }
    dispatch({
      type: "UPDATENOUN",
      payload: {
        id: state.noun.id,
        name: name,
        bornAt: bornAt,
        photo: photo,
      },
      sub: "updatenoun"
    });
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUrl = result.assets[0].uri;
      setPhoto(imageUrl);
    }
  };

  useEffect(() => {
    console.log(state.noun)
  }, [])

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    alert: {
      margin: 5,
      padding: 10,
      display: "flex",
      borderRadius: "5px",
      backgroundColor: "rgb(248,215,218)"
    },
    alertText: {
      color: "#58151C",
    }
  });

  return (
    <SafeAreaView>
      {
        notification && (
          <View style={styles.alert}>
            <Text style={styles.alertText}>{notification} </Text>
          </View>
        )
      }
      <View>
        <Text>Firstname</Text>
        <TextInput style={styles.input}
          value={name}
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View>
        <Text>Lastname</Text>
        <TextInput style={styles.input}
          value={bornAt}
          onChangeText={(bornAt) => setBornAt(bornAt)}
        />
      </View>


      <View>
        <Text>Photo</Text>
        <Image source={{ uri: photo != null ? photo : state.noun.photo }} style={{ width: 200, height: 200 }}></Image>
      </View>
      <View>
        <TouchableOpacity onPress={pickImage}>
          <Text>Choose image</Text>
        </TouchableOpacity>
      </View>

      <Button title='update' onPress={updateNoun} />
    </SafeAreaView>
  )
}
