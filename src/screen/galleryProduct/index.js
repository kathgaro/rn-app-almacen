import React from "react";

import { View, Text, Button } from "react-native";
import { styles } from "./style";

const Gallery = ({navigation}) =>{
    return(
        <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Text style={styles.containerTitle}>Mira Todos nuestros productos</Text>
            <Text style={styles.containerText}>¿Que estabas buscando?</Text>
        </View>
        <View style={styles.containerButton}>
            <Button 
                style={styles.button}
                title="Volver a Inicio"
                onPress={() => navigation.navigate('Inicio')}
                color='#EF6461'
            />
        </View>
        <Button 
            title="New Products"
            onPress={() => navigation.navigate('Mi Producto')}
            color='#EF6461'
        />
    </View>
    )
}

export default Gallery;