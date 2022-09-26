import React from "react";

import { View, Text, Button } from "react-native";
import { styles } from "./style";


const Welcome = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.containerTitle}>Bienvenido!</Text>
                <Text style={styles.containerText}>¿Que estabas buscando?</Text>
            </View>
            <View style={styles.containerButton}>
                <Button 
                    style={styles.button}
                    title="Ver galeria"
                    onPress={() => navigation.navigate('Galeria')}
                    color='#02C39A'
                />
                </View>
            <Button 
                title="New Products"
                onPress={() => navigation.navigate('Mi Producto')}
                color='#02C39A'
            />
        </View>
    )
}

export default Welcome;