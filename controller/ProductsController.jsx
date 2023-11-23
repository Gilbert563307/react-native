
import { Text } from 'react-native'
import ProductsLogic from "../model/ProductsLogic";
import { useState, useReducer, useEffect } from "react";
import { createContext } from 'react';

//import { ProductsContext } from '../model/ProductsContext';

const initialState = {
  product: [],
  id: "",
  products: [],
  result: [],
};

export const ProductsContext = createContext(initialState);

export default function ProductsController({ children }) {

  const ProductsLogicInstance = ProductsLogic();

  const collectReadProducts = async () => {
    const result = await ProductsLogicInstance.getProducts();
    return result;
  }

  const collectGetProduct = async (id) => {
    const result = await ProductsLogicInstance.getProduct(id);
    return result[0];
  }

  const handleRequest = async (state, action) => {
    switch (action.type) {
      case "read":
        const productId = action.payload.productId;
        const read = await collectGetProduct(productId);
        return { ...state, id: state.id, result: read };

      case "update":
        // const update = action.payload.product;
        return { ...state, id: state.id, result: null };

      case "list":
        const list = await collectReadProducts();
        return { ...state, result: list };

      default:
        throw Error('Unknown action.');
    }
  }

  const [state, dispatch] = useReducer(handleRequest, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}
