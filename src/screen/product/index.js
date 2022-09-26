import React from "react";

import { View, Text, Button } from "react-native";
import { styles } from "./style";

const Product = ({navigation}) =>{
    return(
        <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Text style={styles.containerTitle}>Este producto elegiste</Text>
            <Text style={styles.containerText}>¿Deseas seguir mirando?</Text>
        </View>
        <View style={styles.containerButton}>
            <Button 
                style={styles.button}
                title="Volver a Inicio"
                onPress={() => navigation.navigate('Inicio')}
                color='#B6D369'
            />
        </View>
        <Button 
            title="Ver galeria"
            onPress={() => navigation.navigate('Galeria')}
            color='#B6D369'
        />
    </View>
    )
}

export default Product;