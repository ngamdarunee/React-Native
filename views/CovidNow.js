import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const CovidNow = () => {
  const [CovidData, setCovidData] = useState({
    Confirmed: 1,
    Recovered: 0,
    Hospitalized: 0,
    Deaths: 0,
    NewConfirmed: 0,
    NewRecovered: 0,
    NewDeaths: 0,
  });
  useEffect(() => {
    fetch("https://covid19.th-stat.com/api/open/today")
      .then((response) => response.json())
      .then((json) => {
        setCovidData({
          Confirmed: json.Confirmed,
          Recovered: json.Recovered,
          Hospitalized: json.Hospitalized,
          Deaths: json.Deaths,
          NewConfirmed: json.NewConfirmed,
          NewRecovered: json.NewRecovered,
          NewDeaths: json.NewDeaths,
        });
      });
  }, []);
  return (
    <View>
      <ImageBackground source={require("../covid.jpg")} style={style.backdrop}>
        <View style={style.container}>
          <View style={style.circle}>
            <Text style={{ fontSize: 50, color: "white" }}>
              {CovidData.NewConfirmed}
            </Text>
          </View>
          <Text style={{ fontSize: 30, color: "white" }}>NewConfirmed</Text>
          <View style={style.box}>
            <Text style={style.font}>Confirmed: {CovidData.Confirmed} </Text>
            <Text style={style.font}>Recovered: {CovidData.Recovered}</Text>
            <Text style={style.font}>
              Hospitalized: {CovidData.Hospitalized}
            </Text>
            <Text style={style.font}>Deaths: {CovidData.Deaths}</Text>
            <Text style={style.font}>
              NewRecovered: {CovidData.NewRecovered}
            </Text>
            <Text style={style.font}>NewDeaths: {CovidData.NewDeaths}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  backdrop: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: "#b50f09",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  box: {
    backgroundColor: "#960d03",
    height: 200,
    width: 250,
    padding: 22,
    borderRadius: 20,
    justifyContent: "space-evenly",
  },
  font: {
    fontSize: 20,
    color: "white",
  },
});
export default CovidNow;
