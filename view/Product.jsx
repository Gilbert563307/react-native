import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Product({ product }) {
    const styles = StyleSheet.create({
        titleText: {
            fontSize: 20,
            fontWeight: "bold",
        }
    });
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
