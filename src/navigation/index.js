//Lista de raiz de navegacion
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import NavGallery from './navGallery'

const AppNav = () => {
    return(
        <NavigationContainer>
            <NavGallery />
        </NavigationContainer>
    )
}

export default AppNav;