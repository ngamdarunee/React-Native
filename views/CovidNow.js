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
        <Text>{CovidData.Hospitalized}</Text>
        <Text>Now</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
export default CovidNow;
