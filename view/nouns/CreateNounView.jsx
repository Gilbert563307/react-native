import React, { useRef, useState } from 'react'
import { SafeAreaView, Text, TextInput, View, StyleSheet, Button, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { useNounsContext } from '../../controller/NounsController';


export default function CreateNounView() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const { state, dispatch } = useNounsContext();

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
      setImage(imageUrl);
    }
  };

  const createNoun = async () => {
    if (image && name && lastName) {
      const payload = { id: state.nouns.length + 1, name: name, bornAt: bornAt, photo: image }
      dispatch({ type: "CREATENOUN", payload: payload })
    }
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });


  return (
    <SafeAreaView>
      <View>
        <Text>{image && name && lastName ? "Image name and lastname are filled in " : ""}</Text>

      </View>
      <View>
        <Text>Firstname</Text>
        <TextInput onChangeText={e => setName(e)} style={styles.input} />
      </View>

      <View>
        <Text>Lastname</Text>
        <TextInput onChangeText={e => setLastname(e)} style={styles.input} />
      </View>

      <View>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {state.noun.image && <Image source={{ uri: state.noun.image }} style={{ width: 200, height: 200 }} />}
      </View>
      <Button title='create' onPress={createNoun}></Button>

    </SafeAreaView>

  )
}
