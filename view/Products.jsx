

import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native"
import { ProductsContext } from "../controller/ProductsController";
import { useContext, useEffect, useState } from 'react';
import Table from "./Table";

export default function Products() {

  const { state, dispatch } = useContext(ProductsContext);

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
    dispatch({ type: "read", payload: { productId: id } })
  }

  const updateProduct = (product) => {
    dispatch({ type: "update", payload: { product: product } })
  }

  return (<SafeAreaView>
    {console.log(state)}
    <Text>hello</Text>
  </SafeAreaView>


    //<Table products={state.result} getDescription={getDescription} viewProduct={viewProduct} updateProduct={updateProduct} styles={styles}></Table>
  )
}
