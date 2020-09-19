import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

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
    <View style={style.container}>
      <View style={style.circle}>
        <Text style={{ fontSize: 50, color: "white" }}>
          {CovidData.NewConfirmed}
        </Text>
      </View>
      <Text style={{ fontSize: 30 }}>NOW</Text>
      <View style={style.box}>
        <Text>Confirmed: {CovidData.Confirmed}</Text>
        <Text>Recovered: {CovidData.Recovered}</Text>
        <Text>Hospitalized: {CovidData.Hospitalized}</Text>
        <Text>Deaths: {CovidData.Deaths}</Text>
        <Text>NewRecovered: {CovidData.NewRecovered}</Text>
        <Text>NewDeaths: {CovidData.NewDeaths}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  box: {
    backgroundColor: "pink",
    height: 200,
    width: 250,
    padding: 22,
    borderRadius: 20,
    justifyContent: "space-evenly",
  },
});
export default CovidNow;
