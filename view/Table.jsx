import React from 'react'
import { View, Text, FlatList, SafeAreaView, Button} from "react-native"

export default function Table({ products, styles, getDescription, viewProduct, updateProduct }) {

    const createProduct = ({ item }) => {
        return (
            <View style={styles.tableData}>
                <Text style={styles.cell}>{item.id}</Text>
                <Text style={styles.cell}>{getDescription(item.name)}</Text>
                <Text style={styles.cell}>${item.price}</Text>
                <Button title="Read" onPress={() => viewProduct(item.id)} />
                <Button title="Update" onPress={() => updateProduct(item)} />
            </View>
        );
    };

    return (
        <SafeAreaView >
            <View style={styles.header}>
                <Text style={styles.textTag}>Id</Text>
                <Text style={styles.textTag}>Name</Text>
                <Text style={styles.textTag}>Price</Text>
                <Text style={styles.textTag}>Actions</Text>
            </View>
            <View>
                {products.length === 0 ? (
                    <Text >loading...</Text>
                ) : (
                    <FlatList
                        data={products}
                        renderItem={createProduct}
                        keyExtractor={(product) => product.id.toString()}
                    ></FlatList>
                )}
            </View>
        </SafeAreaView>
    )
}
