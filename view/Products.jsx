

import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native"
import { ProductsContext } from "../controller/ProductsController";
import { useContext, useEffect, useState } from 'react';
import Table from "./Table";
import { useNavigation } from "@react-navigation/native";

export default function Products() {
  const { state, dispatch } = useContext(ProductsContext);
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      borderWidth: 1,
    },
    textTag: {
      fontSize: "20px"
    },
    tableData: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      borderWidth: 1,
    },
    cell: {
      paddingTop: "1em",
      fontSize: "20px",
    },
    actionBtn: {
      color: "blue",
      fontSize: "20px"
    }
  })

  const getDescription = (details) => {
    if (details.length > 5) {
      return `${details.slice(0, 10)}..`
    } else {
      return details;
    }
  }

  const viewProduct = (id) => {
    navigation.navigate("readProduct");
    dispatch({ type: "read", payload: { productId: id } })
  }

  const updateProduct = (product) => {
    dispatch({ type: "update", payload: { product: product } })
  }

  useEffect(() => {
    dispatch({ type: 'list' });
    // Check if the state.result is a promise and handle it
    if (state instanceof Promise) {
      state.then((resolvedResult) => {
        // Perform actions with the resolved result
        setProducts(resolvedResult.result);
      });
    } else {
      setProducts(state.result);
    }
  }, [state.result]);
  return (
    <Table products={products} getDescription={getDescription} viewProduct={viewProduct} updateProduct={updateProduct} styles={styles}></Table>
  )
}
