import React, {useEffect, useState} from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useContext } from 'react';
import { ProductsContext } from '../controller/ProductsController';

export default function Product() {
    const [product, setProduct] = useState([]);
    const { state, dispatch } = useContext(ProductsContext);
    const styles = StyleSheet.create({
        titleText: {
            fontSize: 20,
            fontWeight: "bold",
        }
    });

    useEffect(() => {
        // Check if the state.result is a promise and handle it
        if (state instanceof Promise) {
          state.then((resolvedResult) => {
            // Perform actions with the resolved result
            setProduct(resolvedResult.result);
          });
        } else {
          setProducts(state.result);
        }
      }, [state.result]);

    return (
        <SafeAreaView>
            <View>
                <View>
                    <Text style={styles.titleText}>Type code</Text>
                    <Text>{product.type_code}</Text>
                </View>

                <View>
                    <Text style={styles.titleText}>Supply id</Text>
                    <Text>{product.supplier_id}</Text>
                </View>

                <View>
                    <Text style={styles.titleText}>Name</Text>
                    <Text>{product.name}</Text>
                </View>

                <View>
                    <Text style={styles.titleText}>Price</Text>
                    <Text>{product.price}</Text>
                </View>

            </View>
            <View>
                <Text style={styles.titleText}>Details</Text>
                <Text>{product.details}</Text>
            </View>
        </SafeAreaView>
    )
}
