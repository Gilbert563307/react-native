import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#fff",
    },

    label: {
        fontSize: "16px",
        marginLeft: 10,
        fontWeight: "bold"
    },

    inputDiv: {
        display: "flex"
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
      },
      alert: {
        backgroundColor: "#D1E7DD",
        padding: 15,
        margin: 5,
        borderRadius: "5px",
      }
  });
export default styles;