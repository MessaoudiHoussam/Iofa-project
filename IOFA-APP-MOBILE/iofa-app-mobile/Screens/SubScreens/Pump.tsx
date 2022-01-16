import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Switch,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import RNSpeedometer from "react-native-speedometer";
import database from '@react-native-firebase/database';
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../src/depen/Colors";
import DonutChartComponentR_N_S from "../../src/Svg/DonutChartComponentR_N_S";
import LineChart from "../../src/Svg/LineChart ";
import styles from '../../style/PumpStyle'

const getRemaining = (time) => {
  const mins = Math.floor((time % 3600) / 60);
  const secs = Math.floor((time % 3600) % 60);
  const heures = Math.floor(time / 3600);
  return { mins, secs, heures };
};

const Pump = ({ navigation, route }) => {
  const [startPumb, setStartPumb] = useState(false);
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [Pump, setTogglePump] = useState(false);
  const [meterValue, setMetreValue] = useState(0);
  const [meterValue02, setMetreValue02] = useState(0);
  const [meterValue03, setMetreValue03] = useState(0);

  const setStartPumbFun = () => {
    setMetreValue(0);
    setMetreValue02(90);
    setMetreValue03(110);
  };
  useEffect(() => {
    const Dbref = database().ref('IGDwxERNDjZ7qKQS4Zb9QMKcLod2');
    Dbref.on("value", snapshot => {
      const data = snapshot.val();
      console.log({data})
      setMetreValue(data.motor.amp1)
      setMetreValue02(data.motor.amp2)
      setMetreValue03(data.motor.amp3)


 
    })
  }, [meterValue])

  const setEdnPumbFun = () => {
    setMetreValue(0);
    setMetreValue02(0);
    setMetreValue03(0);
  };

  const { mins, secs, heures } = getRemaining(remainingSecs);

  useEffect(() => {
    let interval = null;
    if (startPumb) {
      interval = setInterval(() => {
        setRemainingSecs((remainingSecs) => remainingSecs + 1);
      }, 1000);
    } else {
      //clearInterval(interval)
      setRemainingSecs(0);
    }

    return () => clearInterval(interval);
  }, [startPumb, remainingSecs]);

  useEffect(() => {
    const Dbref = database().ref('pump');
    Dbref.on("value", snapshot => {
      const data = snapshot.val();
      console.log({data})
      setStartPumb(data.status || false)
     
    })
  }, [])
  const TestEvent = () => {
    setTogglePump(!Pump)
    const Dbref = database().ref('pump');
    // Dbref.once("value").then(data => {
    //   console.log(data)
    // })
    Dbref.on("value", snapshot => {
      const data = snapshot.val();
      console.log({data})
    })
    Dbref.update({ cmd: Pump })
  }
  const turnPumpOn = () => {
    const Dbref = database().ref('pump');
    Dbref.update({ cmd: true })
    Dbref.update({ status: true })
    


  }
  const turnPumpOff = () => {
    const Dbref = database().ref('pump');
    Dbref.update({ cmd: false })
    Dbref.update({ status: false })
      setMetreValue(0)
      setMetreValue02(0)
      setMetreValue03(0)

 

  }

  
  /* SVG */
  const LineCharpDataEx01 = [
    { month: "Jan", value: 70 },
    { month: "Feb", value: 180 },
    { month: "Mar", value: 52 },
    { month: "Apr", value: 80 },
    { month: "May", value: 180 },
    { month: "Jun", value: 10 },
    { month: "Jul", value: 60 },
    { month: "Aug", value: 189 },
    { month: "Sep", value: 119 },
    { month: "Oct", value: 10 },
    { month: "Nov", value: 170 },
    { month: "Dec", value: 200 },
  ];

  /*doNuT chart */

  const DataDonutChart = [
    {
      percentageDonutChartData: 8,
      colorDonutChartData: "green",
      maxDonutChartData: "100",
    },
    {
      percentageDonutChartData: 24,
      colorDonutChartData: "#3bceb3",
      maxDonutChartData: "100",
    },
    {
      percentageDonutChartData: 45,
      colorDonutChartData: "blue",
      maxDonutChartData: "100",
    },
    {
      percentageDonutChartData: 80,
      colorDonutChartData: "orange",
      maxDonutChartData: "100",
    },
    {
      percentageDonutChartData: 17,
      colorDonutChartData: "#d2ab99",
      maxDonutChartData: "100",
    },
  ];
  

  const itemService = route.params;

  return (
    <SafeAreaView style={styles.DetailsScreen}>
      <ScrollView nestedScrollEnabled={false}>
        <View style={styles.DetailsScreenHeader}>
          <Icon
            name="arrow-left"
            size={26}
            color={Colors.green}
            onPress={() => navigation.navigate("Home")}



            
          />
        </View>
        <View style={styles.DetailsScreenImageConatiner}>
          <Image source={itemService.img} style={styles.DetailsScreenImg} />
        </View>
        {/* <Switch
          value={Pump}
          onValueChange={TestEvent} /> */}

        <View style={styles.DetailsScreenInfo}>
          <View style={styles.DetailsScreenInfoTitle}>
            <Text style={styles.DetailsScreenInfoTitleTxt}>Pumb</Text>

            {startPumb ? (
              <View style={styles.DetailsScreenInfoTitleChape}>
                <Text style={styles.DetailsScreenInfoTitleChapetEXT}>On</Text>
              </View>
            ) : (
                <View style={styles.DetailsScreenInfoTitleChapeRed}>
                  <Text style={styles.DetailsScreenInfoTitleChapetEXT}>OFF</Text>
                </View>
              )}
          </View>

          <View style={styles.DetailsScreenInfoDescription}>
            <Text style={styles.DetailsScreenInfoDescriptionText}>
              {itemService.description}
            </Text>
          </View>

          <View style={styles.LineShape}></View>

          <View style={styles.DetailsScreenInfoTitle}>
            <Text style={styles.DetailsScreenInfoTitleTxt}>Pumb Controle</Text>
          </View>

          <View style={styles.ActionStyle}>
            <TouchableOpacity onPress={turnPumpOn}>
              <View style={styles.ActionStyleBtnGreen}>
                <Text style={styles.ActionStyleBtnTxt}>ON</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={turnPumpOff}>
              <View style={styles.ActionStyleBtnRed}>
                <Text style={styles.ActionStyleBtnTxt}>OFF</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.ActionStyleTemp}>
              <Text style={styles.ActionStyleTempAbs}> Timer</Text>
              <Text style={styles.ActionStyleBtnTxt}>
                {`${heures > 9 ? "" : "0"}${heures}:${
                  mins > 9 ? "" : "0"
                  }${mins}:${secs > 9 ? "" : "0"}${secs}`}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            Pump frequency(Volt)
          </Text>
          <Text style={styles.DetailsScreenInfoTitleTxt02}>
            0v - 400v
          </Text>
        </View>

        <View style={styles.RNSpeedometerContainer}>
          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={meterValue}
              minValue={0}
              maxValue={400}
              allowedDecimals={0}
              labels={[
                {
                  name: "PH1",
                  labelColor: "red",
                  activeBarColor: "green",
                },

                {
                  name: "PH2",
                  labelColor: "red",
                  activeBarColor: "orange",
                },
                {
                  name: "PH3",
                  labelColor: "red",
                  activeBarColor: "red",
                },
              ]}
              needleImage={require("../../src/Uploads/sppedometreRed02.png")}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
              labelStyle={{
                color: "red",
                position: "absolute",
                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                // display:'none'
                width: 72,
                textAlign: "center",
              }}
            />
          </View>

          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={meterValue02}

              minValue={0}
              maxValue={400}
              allowedDecimals={0}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              labels={[
                {
                  name: "P1",
                  labelColor: "green",
                  activeBarColor: "transparent",
                },

                {
                  name: "PH11",
                  labelColor: "green",
                  activeBarColor: "transparent",
                },
                {
                  name: "PH01",
                  labelColor: "green",
                  activeBarColor: "transparent",
                },
              ]}
              imageStyle={{
                backgroundColor: "transparent",
              }}
              wrapperStyle={{
                backgroundColor: "transparent",
              }}
              outerCircleStyle={{
                backgroundColor: "transparent",
              }}
              halfCircleStyle={{}}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "center",
              }}
              needleImage={require("../../src/Uploads/speedometreGreen.png")}
              labelStyle={{
                color: "green",
                position: "absolute",
                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
            />
          </View>

          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={meterValue03}
              minValue={0}
              maxValue={400}
              allowedDecimals={0}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              labels={[
                {
                  name: "PH12",
                  labelColor: "blue",
                  activeBarColor: "transparent",
                },

                {
                  name: "PH52",
                  labelColor: "blue",
                  activeBarColor: "transparent",
                },
                {
                  name: "PH62",
                  labelColor: "blue",
                  activeBarColor: "transparent",
                },
              ]}
              imageStyle={{
                backgroundColor: "transparent",
              }}
              wrapperStyle={{
                backgroundColor: "transparent",
              }}
              outerCircleStyle={{
                backgroundColor: "transparent",
              }}
              halfCircleStyle={{
                backgroundColor: "transparent",
              }}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
              labelStyle={{
                color: "blue",
                position: "absolute",
                right: 0,
                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                width: 72,
                textAlign: "center",
              }}
            />
          </View>
        </View>
        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            electric current(Amp)
          </Text>
          <Text style={styles.DetailsScreenInfoTitleTxt02}>
            0A - 100A
          </Text>
        </View>

        <View style={styles.RNSpeedometerContainer}>
          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={meterValue}
              minValue={0}
              maxValue={100}
              allowedDecimals={0}
              labels={[
                {
                  name: "P00",
                  labelColor: "red",
                  activeBarColor: "green",
                },


                {
                  name: "P0",
                  labelColor: "red",
                  activeBarColor: "orange",
                },
              ]}
              needleImage={require("../../src/Uploads/sppedometreRed02.png")}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
              labelStyle={{
                color: "red",
                position: "absolute",

                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                width: 72,
                textAlign: "center",
              }}
            />
          </View>

          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={meterValue02}
              minValue={0}
              maxValue={100}
              allowedDecimals={0}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              labels={[
                {
                  name: "P12",
                  labelColor: "green",
                  activeBarColor: "transparent",
                },

                {
                  name: "P1222",
                  labelColor: "green",
                  activeBarColor: "transparent",
                },
                {
                  name: "P45",
                  labelColor: "green",
                  activeBarColor: "transparent",
                },
              ]}
              imageStyle={{
                backgroundColor: "transparent",
              }}
              wrapperStyle={{
                backgroundColor: "transparent",
              }}
              outerCircleStyle={{
                backgroundColor: "transparent",
              }}
              halfCircleStyle={{}}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "center",
              }}
              needleImage={require("../../src/Uploads/speedometreGreen.png")}
              labelStyle={{
                color: "green",
                position: "absolute",
                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={
                {
                  // display:'none'
                }
              }
            />
          </View>

          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={meterValue03}
              minValue={0}
              maxValue={100}
              allowedDecimals={0}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              labels={[
                {
                  name: "P2",
                  labelColor: "blue",
                  activeBarColor: "transparent",
                },

                {
                  name: "P22",
                  labelColor: "blue",
                  activeBarColor: "transparent",
                },
                {
                  name: "P222",
                  labelColor: "blue",
                  activeBarColor: "transparent",
                },
              ]}
              imageStyle={{
                backgroundColor: "transparent",
              }}
              wrapperStyle={{
                backgroundColor: "transparent",
              }}
              outerCircleStyle={{
                backgroundColor: "transparent",
              }}
              halfCircleStyle={{
                backgroundColor: "transparent",
              }}
              labelWrapperStyle={{
                flexDirection: "row",

                justifyContent: "flex-end",
              }}
              labelStyle={{
                color: "blue",
                position: "absolute",
                right: 0,
                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                width: 72,
                textAlign: "center",
              }}
            />
          </View>
        </View>


        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            Pumpb capacity(watt)
          </Text>
          <Text style={styles.DetailsScreenInfoTitleTxt02}>
            0w - 100w
          </Text>
        </View>

        <View style={styles.RNSpeedometerContainer}>
          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={50}
              minValue={0}
              maxValue={100}
              allowedDecimals={0}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              labels={[
                {
                  name: "PH0",
                  labelColor: "red",
                  activeBarColor: "orange",
                },
              ]}
              needleImage={require("../../src/Uploads/sppedometreRed02.png")}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "center",
              }}
              labelStyle={{
                color: "red",
                position: "absolute",
                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                width: 72,
                textAlign: "center",
              }}
            />
          </View>
        </View>
        <View style={styles.DetailsScreenInfoTitle}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            Electricity Consumption (Kw)
          </Text>
        </View>

        <View style={styles.GraphLineContainer}>
          <LineChart
            CharpSvgColor={Colors.light}
            CharpSvgVerticalLinesColor={Colors.grey}
            CharpSvgPointsColor={Colors.green}
            CharpSvgPointsLnesColor={Colors.green}
            LineCharpData={LineCharpDataEx01}
          />
        </View>

        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            pump working ratio %
          </Text>
        </View>

        <View style={styles.DanutChartSvgContainer}>
          <DonutChartComponentR_N_S
            key="00 Dounet"
            percentageDonutChart={98}
            colorDonutChart={"red"}
            delayDonutChart={500 + 10}
            maxDonutChart={120}
            radiusDonutChart={80}
          />
        </View>

        {/* <View style={styles.TestDataCpm}>
          {DataDonutChart.map((item, index) => {
            return (
              <DonutChartComponentR_N_S
                key={index}
                percentageDonutChart={item.percentageDonutChartData}
                colorDonutChart={item.colorDonutChartData}
                delayDonutChart={500 + 100 * index}
                maxDonutChart={100}
              />
            );
          })}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pump;

