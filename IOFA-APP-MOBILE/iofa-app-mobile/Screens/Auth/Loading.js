import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Colors from '../../src/depen/Colors';

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        {
          // Our Brand Image Goes here  
        }
        <Text style={styles.Text}>Please wait ..</Text>
      </View>
      <ActivityIndicator size="large" color={Colors.green} />
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  Text: {
    color: Colors.dark,
    marginTop: 20,
    fontSize: 16,
  }
})
export default Loading;