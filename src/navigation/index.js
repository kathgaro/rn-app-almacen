//Lista de raiz de navegacion
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import NavGallery from './navGallery'

const styles= StyleSheet.create({
   
})
const AppNav = () => {
    return(
        <NavigationContainer style={styles.cont}>
            <NavGallery />
            
        </NavigationContainer>
    )
}

export default AppNav;