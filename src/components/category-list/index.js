import React from "react";

import { View, Text, TouchableOpacity  } from "react-native";
import { styles } from "./style";

const CategoryItem = ({item, onSelected}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={{
                    ...styles.contContainer,
                    borderColor: item.color,
                    borderWidth: 1,

                }}
                onPress={()=>onSelected(item)}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryItem