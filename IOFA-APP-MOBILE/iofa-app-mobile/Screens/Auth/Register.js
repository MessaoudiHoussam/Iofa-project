import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Colors from '../../src/depen/Colors';

const Register = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.Text}>Register</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})
export default Register;