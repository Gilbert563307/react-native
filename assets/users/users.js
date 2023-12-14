import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 1,
    },

    readUserContainer: {
      display: "flex",
      justifyContent: "center",
    },

    item: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: "5px",
      marginVertical: 8,
      marginHorizontal: 16,
      shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },

    readUserItem: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: "5px",
    },

    contact: {
       display: "flex",
       marginTop: 25,
    },

    buttonsContainer :{
      display: "flex",
      flexDirection: "row",
      gap: "5em",
    },

    h1Text: {
      fontSize: "20px",
      fontWeight: "bold",
    },

    h2Text: {
      fontSize: "18px",
      fontWeight: "bold",
    },

    textCenter: {
      textAlign: "center",
    },

    button: {
      borderRadius: "3px",
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },

    updateButton: {
      backgroundColor:  "#3742FA",
    },
    colorWhite: {
      color: "white"
    }

  });
export default styles;