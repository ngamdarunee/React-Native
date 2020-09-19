import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ZipCodeScreen from "./components/ZipCodeScreen";
import WeatherScreen from "./components/WeatherScreen";
import CovidNow from "./views/CovidNow";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="Covid" component={CovidNow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
