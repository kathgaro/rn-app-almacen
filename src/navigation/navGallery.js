import React from "react";

import { View, Image, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, Gallery, Product } from "../screen";
import {isAndroid} from '../utils';
import { colors } from  '../constants/themes';
const Stack = createNativeStackNavigator();

export const styles = StyleSheet.create({
    image:{
        height: 65,
        width: 65,
        borderRadius: 100,
        marginBottom:15,
        marginTop:15,
    }, })

const NavGallery= () => {
    return(
       <Stack.Navigator 
        initialRouteName="Inicio"
        screenOptions={{
            headerStyle:{
                backgroundColor: isAndroid ? colors.white : colors.second, 
            },
            //Color de texto de inicio
            headerTintColor: colors.primary,
            headerTitleStyle: {
                fontFamily: 'u-bold',
            },
            headerRight: () =>  
            <View>
                <Image source={require('../../assets/img/user.jpg')} style={styles.image} />
            </View>
        }}
        
        >
            <Stack.Screen 
                name='Inicio' 
                component={Welcome}
                options={{
                    title: 'Inicio',
                }} 
            />
            <Stack.Screen 
                name='Galeria' 
                component={Gallery} 
                
            />
            <Stack.Screen 
                name='Mi Producto' 
                component={Product} 
                options={({route}) => ({
                    title: route.params.name,
                })}
            />
       </Stack.Navigator> 
    )
}

export default NavGallery;