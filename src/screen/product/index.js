import React from "react";

import { View, Text, Button, FlatList } from "react-native";
import { styles } from "./style";
import { products } from "../../constants/data";
import { ProductItem } from "../../components";

const Product = ({navigation, route}) =>{
    const {categoryId} = route.params;

    const productsFiltered = products.filter(product => product.categoryId == categoryId)
    const onSelected = (item) =>{
        navigation.navigate('Mi Producto', {name: item.title, categoryId: item.id})
    }
    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected} />
    return(
        <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Text style={styles.containerTitle}>en stock</Text>
            <Text style={styles.containerText}>¿Cual elegis?</Text>
        </View>
        
        <FlatList
            data={productsFiltered}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        >
        </FlatList>
    </View>
    )
}

export default Product;