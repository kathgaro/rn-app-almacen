import React from "react";

import { View, Text, Button, Image,  } from "react-native";
import { styles } from "./style";
import {colors} from '../../../constants/colors'

const Welcome = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View>
                    <Text style={styles.containerTitle}>Bienvenido/a!</Text>
                    <Text style={styles.containerText}>¿Que estabas buscando?</Text>
                </View>
               
            </View>
            <View style={styles.ContImagePrinc}>
                <Image source={require('../../../assets/img/image-prin.jpg')} style={styles.imagePrinc} />
            </View>
            <View style={styles.banner}>
                <Text style={styles.bannerText}>¡Envio a todo el pais!</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Conoce nuestros productos!</Text>
                <Text style={styles.cardText}>Hace clic en el boton</Text>
                <Button 
                    style={styles.button}
                    title="Ver galeria"
                    onPress={() => navigation.navigate('Galeria')}
                    color={colors.primary}
                />
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>#New</Text>
                <Text style={styles.cardText}>Lo nuevo de la semana</Text>
                <Button 
                title="New Products"
                onPress={() => navigation.navigate('Mi Producto')}
                color={colors.primary}
                />
            </View>
            
        </View>
    )
}

export default Welcome;