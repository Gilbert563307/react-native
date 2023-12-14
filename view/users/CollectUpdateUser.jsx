import React, { useState, useEffect, useRef } from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import styles from "../../assets/users/CollectUpdateUserCss";
import { useUsersContext } from '../../controller/UsersController';

export default function CollectUpdateUser() {

    const { state, dispatch } = useUsersContext();
    const user = state.user;

    const [notification, setNotification] = useState("");
    const [username, setUserName] = useState(user.username);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);

    const updateUser = () => {
        let message = "The user has been updated";
        const fields = [username, name, email, phone];
        fields.forEach((input) => {
            if (input === "") {
                setNotification(`The input fields cannot be empty`);
                return
            }
        });

        //change to the controller
        const newUser = {...user, name: name, username: username, email: email, phone: phone}
        dispatch({type: "UPDATEUSER", payload: {user: newUser}});

        //setNotification(username);
    }

    return (
        <View style={styles.container}>

            {notification && (<View style={styles.alert}><Text>{notification}</Text></View>)}

            <View style={styles.inputDiv}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={(username) => setUserName(username)}
                />
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={(name) => setName(name)}
                />
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputDiv}>
                <Text style={styles.label}>Phone</Text>
                <TextInput
                    keyboardType="phone-pad"
                    style={styles.input}
                    value={phone}
                    onChangeText={(phone) => setPhone(phone)}
                />
            </View>

            <View>
                <TouchableOpacity style={{ ...styles.button, ...styles.updateButton }} onPress={updateUser}>
                    <Text style={styles.colorWhite}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
