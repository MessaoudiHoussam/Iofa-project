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

const Stack = createNativeStackNavigator();





export default function App() {
  return (
    
    <NavigationContainer>

      <Stack.Navigator>

       <Stack.Screen name="Home" component= {HomeScreen} options={{headerShown: false}} />
       <Stack.Screen name="PumbScreen" component= {Pump}  options={{headerShown: false}} />
       <Stack.Screen name="PumpWatering" component= {PumpWatering} options={{headerShown: false}} />
       <Stack.Screen name="DashbardAndMap" component= {DashbardAndMap} options={{headerShown: false}} />
       <Stack.Screen name="WeatherTank" component= {WeatherTank} options={{headerShown: false}} />
       <Stack.Screen name="SoilCondition" component= {SoilCondition} options={{headerShown: false}} />
       <Stack.Screen name="Maintenance" component= {Maintenance} options={{headerShown: false}} />
       <Stack.Screen name="AerialSurvey" component= {AerialSurvey} options={{headerShown: false}} />
       <Stack.Screen name="Surveillance" component= {Surveillance} options={{headerShown: false}} />
       <Stack.Screen name="Aquaculture" component= {Aquaculture} options={{headerShown: false}} />


      </Stack.Navigator>
    
  </NavigationContainer>
  // <HomeScreen/>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
