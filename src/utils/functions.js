import { Platform } from "react-native"
//Validacion de plataforma - me retorna donde estoy android/ios
export const isAndroid = Platform.OS == 'android'
export const isIOS = Platform.OS == 'ios'