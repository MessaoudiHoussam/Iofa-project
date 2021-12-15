import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './Screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pump from './Screens/SubScreens/Pump';
import PumpWatering from './Screens/SubScreens/PumpWatering';
import DashbardAndMap from './Screens/SubScreens/DashbardAndMap';
import WeatherTank from './Screens/SubScreens/WeatherTank';
import SoilCondition from './Screens/SubScreens/SoilCondition';
import Maintenance from './Screens/SubScreens/Maintenance';
import AerialSurvey from './Screens/SubScreens/AerialSurvey';
import Surveillance from './Screens/SubScreens/Surveillance';
import Aquaculture from './Screens/SubScreens/Aquaculture';
import Loading from './Screens/Auth/Loading';

const Stack = createNativeStackNavigator();

export default function App() {

  const globalHeaderOptions = {
    headerShown: false,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={globalHeaderOptions} />
        <Stack.Screen name="PumbScreen" component={Pump} options={globalHeaderOptions} />
        <Stack.Screen name="PumpWatering" component={PumpWatering} options={globalHeaderOptions} />
        <Stack.Screen name="DashbardAndMap" component={DashbardAndMap} options={globalHeaderOptions} />
        <Stack.Screen name="WeatherTank" component={WeatherTank} options={globalHeaderOptions} />
        <Stack.Screen name="SoilCondition" component={SoilCondition} options={globalHeaderOptions} />
        <Stack.Screen name="Maintenance" component={Maintenance} options={globalHeaderOptions} />
        <Stack.Screen name="AerialSurvey" component={AerialSurvey} options={globalHeaderOptions} />
        <Stack.Screen name="Surveillance" component={Surveillance} options={globalHeaderOptions} />
        <Stack.Screen name="Aquaculture" component={Aquaculture} options={globalHeaderOptions} />
        <Stack.Screen name="Loading" component={Loading} options={globalHeaderOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}