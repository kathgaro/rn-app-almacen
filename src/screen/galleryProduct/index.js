

import React from "react";

import { View, Text, FlatList } from "react-native";
import { CategoryItem } from "../../components";
import { styles } from "./style";

import { categories } from "../../constants/data";

const Gallery = ({navigation, route}) =>{

    const onSelected = (item) => {
        navigation.navigate('Mi Producto', {name: item.title})
    }
    const renderItem= ({item}) => <CategoryItem item={item} onSelected={onSelected} />

    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.containerTitle}>Mira Todos nuestros productos</Text>
                <Text style={styles.containerText}>¿Que estabas buscando?</Text>
            </View>
        
            <FlatList 
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.containerList}
            />
        </View>
    )
}

export default Gallery;