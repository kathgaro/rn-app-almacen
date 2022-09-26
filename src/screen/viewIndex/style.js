import { StyleSheet } from "react-native";
import {colors} from '../../../constants/colors'

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
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:'center',
    },
    image:{
        height: 65,
        width: 65,
        borderRadius: 100,
        
    },
    //Imagen principal
    ContImagePrinc:{
        width: '90%',
        paddingTop: '2%',
        paddingBottom: '2%',
    },
    imagePrinc:{
        width: '100%',
        height: 200,
        borderRadius: 6,
    },
    //banner
    banner:{
        borderColor: colors.primary,
        borderWidth:1,
        width: '90%',
        borderRadius: 6,
        height: 25,
        padding: '1%',
    },
    bannerText:{
        color: colors.primary,
        fontFamily: 'u-regular',
        fontSize: 13,
        textAlign: 'center'
    },
    //Cards
    card:{
        width: '90%',
        //backgroundColor: 'red',
        borderWidth: 1,
        borderColor: colors.primary,
        height: '20%',
        borderRadius: 6,
        padding: '4%',
        margin:'2%',
    },
    cardTitle:{
        fontFamily: 'u-regular',
        fontSize: 18,
    },
    cardText:{
        fontFamily: 'u-light',
        fontSize: 14,
        paddingBottom: '6%',
    },
    containerTitle:{
        fontFamily: 'u-bold',
        fontSize: 24,
    },
    containerText:{
        fontFamily: 'u-regular',
        fontSize: 16,
    },
    button:{
        paddingBottom: '5%',
    }
})