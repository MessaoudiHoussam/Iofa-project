import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon02 from "react-native-vector-icons/FontAwesome5";

export default function WeatherStation() {
  return (
    <SafeAreaView>
      <View style={styles.safeAreaContainer}>
        <View style={styles.safeAreaHeader}>
          <Icon name="sun-o" size={35} color="#dd5"></Icon>
          <View>
            <Text style={styles.TitelHeader}>31C°</Text>
          </View>
          <View>
            <Text style={styles.desHeader}>Algeria, Djelfa, 12:12</Text>
          </View>
        </View>
        <View style={styles.weatheStationMain}>
          <View style={Object.assign({}, styles.morning, styles.Card)}>
            <Text style={styles.TitelHeader}>Morning</Text>
            <Icon name="sun-o" size={35} color="#dd5"></Icon>
            <Text style={styles.TitelHeader}>31C°</Text>
          </View>

          <View style={Object.assign({}, styles.afternone, styles.Card)}>
            <Text style={styles.TitelHeader}>Afernone</Text>
            <Icon name="cloud" size={35} color="#dd5"></Icon>
            <Text style={styles.TitelHeader}>31C°</Text>
          </View>

          <View style={Object.assign({}, styles.night, styles.Card)}>
            <Text style={styles.TitelHeader}>Night</Text>
            <Icon02 name="cloud-sun-rain" size={35} color="#dd5"></Icon02>

            <Text style={styles.TitelHeader}>31C°</Text>
          </View>
        </View>
        <View style={styles.Footer}>
          <View style={styles.FooterHeader}>
              <Text style= {styles.TextW}>Lorem ipsum</Text>
          </View>
          <View style={styles.FooterMain}>
            <View style={styles.FooterMainCard}>
              <Text style= {styles.TextW}>vito</Text>
              <Text style= {styles.TextW}>7</Text>
            </View>
            <View style={styles.FooterMainCard}>
              <Text style= {styles.TextW}>vito</Text>
              <Text style= {styles.TextW}>7</Text>
            </View>
            <View style={styles.FooterMainCard}>
              <Text style= {styles.TextW}>vito</Text>
              <Text style= {styles.TextW} >7</Text>
            </View>
            <View style={styles.FooterMainCard}>
              <Text style= {styles.TextW} >vito</Text>
              <Text style= {styles.TextW}>7</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    height: "100%",
    backgroundColor: "#222",
  },
  safeAreaHeader: {
    height: 200,
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  TitelHeader: {
    color: "#eee",
  },
  desHeader: {
    color: "#eee",
  },
  weatheStationMain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  Card: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: 200,
    borderRadius: 15,
    width: "30%",
  },

  morning: {
    backgroundColor: "orange",
  },
  afternone: {
    backgroundColor: "green",
  },
  night: {
    backgroundColor: "blue",
  },


  Footer: {
      backgroundColor:'rgba(255, 255, 255, 0.11)',
    height:'40%',
    marginTop:20,
  },
  FooterHeader:
   {
    height: '20%',
    // backgroundColor:'rgba(255, 255, 255, 0.11)',
    justifyContent:"center",
    alignItems:"center",


   },
  FooterMain: {
      height: '80%',
    display: "flex",
    flexDirection:'row',
    flexWrap:'wrap',
    
  },
  FooterMainCard: {
      width: '50%',
      height: '50%',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      

  },
  TextW:{
      fontSize:20,
      fontWeight:'700',
      color: 'white',
  },


  
});
