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
        textAlign: 'center',
    },
    containerText:{
        fontFamily: 'u-regular',
        fontSize: 16,
    },
    containerButton:{
        paddingTop: '5%',
        paddingBottom: '5%',
    }
})