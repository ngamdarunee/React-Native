import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Forecast from "./Forecast";
const apiKey = "d548c2386d2dbf2c3bf4bcbe543397cb";
export default function Weather(props) {
  const [forecastInfo, setForecastInfo] = useState({
    main: "main",
    description: "description",
    temp: 0,
    city: "",
  });
  useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`);
    if (props.zipCode) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((json) => {
          setForecastInfo({
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp,
            city: json.name,
          });
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [props.zipCode]);

  return (
    <View>
      <ImageBackground source={require("../bg.jpg")} style={styles.backdrop}>
        <View style={styles.cover}>
          <Text style={styles.medium}>Zip Code: {props.zipCode}</Text>
          <Text style={styles.medium}>City: {forecastInfo.city}</Text>
          <Forecast {...forecastInfo} />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  backdrop: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  cover: {
    backgroundColor: "#000",
    width: "100%",
    height: 300,
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  medium: {
    fontSize: 20,
    color: "#FFF",
  },
});
