import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
       // justifyContent: 'center',
       backgroundColor: 'white',
       
    },
    containerHeader:{
        width: '85%',
        height: 100,
        paddingTop: '5%',
       
        alignItems:'center',
    },
    containerTitle:{
        fontFamily: 'u-bold',
        fontSize: 24,
    },
    containerText:{
        fontFamily: 'u-regular',
        fontSize: 16,
    },
    containerButton:{
        paddingBottom: '5%',
    }
})