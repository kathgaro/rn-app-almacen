import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        marginHorizontal:20,
        marginVertical:10,
        borderRadius:10,
        borderColor: colors.primary,
        borderWidth:1,
        height: 120,
    },
    item:{
        flex:1,
        justifyContent: 'space-around',
    },
    title:{
        fontFamily: 'u-bold',
        fontSize: 18,
    },
    price:{
        fontFamily: 'u-bold',
        fontSize: 14,
    },
    detail:{
        fontFamily: 'u-bold',
        fontSize: 12,
    },
    detailsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})