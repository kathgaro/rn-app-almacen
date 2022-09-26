import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, Gallery, Product } from "../screen";

const Stack = createNativeStackNavigator();

const NavGallery= () => {
    return(
       <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name='Inicio' component={Welcome} />
            <Stack.Screen name='Galeria' component={Gallery} />
            <Stack.Screen name='Mi Producto' component={Product} />
       </Stack.Navigator> 
    )
}

export default NavGallery;