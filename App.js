import React from "react";

import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

import AppNav from "./src/navigation";

export default function App() {
  //fonts
  const [loaded] = useFonts({
    'u-bold' : require('./assets/fonts/Ubuntu-Bold.ttf'),
    'u-italic' : require('./assets/fonts/Ubuntu-Italic.ttf'),
    'u-light' : require('./assets/fonts/Ubuntu-Light.ttf'),
    'u-regular' : require('./assets/fonts/Ubuntu-Regular.ttf')
  });

  //spinner load
  if(!loaded){
    return <ActivityIndicator />
  }

  return (
    <AppNav />
  );
}

