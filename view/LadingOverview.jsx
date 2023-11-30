import React from 'react'
import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native'
import { useNounsContext } from "../controller/NounsController";

export default function LadingOverview() {

    const { dispatch } = useNounsContext();

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            gap: "1em",
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
        },
    });

    const buttons = [
        { name: "create", action: "CREATENOUN", payload: null },
        { name: "read", action: "READNOUN", payload: 1 },
        { name: "update", action: "UPDATENOUN", payload: { id: 1 } },
        { name: "delete", action: "DELETENOUN", payload: 1 },
        { name: "list", action: "LISTNOUN", payload: null },
    ];

    const handleNavigate = (action, payload) => {
        dispatch({ type: action, payload: payload });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Nouns overview </Text>
            {buttons.map((obj, key) => {
                return <TouchableOpacity style={styles.button} key={key} onPress={() => handleNavigate(obj.action, obj.payload)} >
                    <Text>{obj.name}</Text>
                </TouchableOpacity>
            })}
        </SafeAreaView>
    )
}
