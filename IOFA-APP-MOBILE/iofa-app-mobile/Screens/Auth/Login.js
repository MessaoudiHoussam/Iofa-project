import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Colors from '../../src/depen/Colors';

const Login = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.Text}>Login</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})
export default Login;