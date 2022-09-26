import React from "react";

import { View, Text } from "react-native";
import { styles } from "./style";


const Welcome = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.containerText}>Welcome!</Text>
        </View>
    )
}

export default Welcome;