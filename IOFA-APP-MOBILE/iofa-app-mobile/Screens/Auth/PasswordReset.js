import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from '../../style/PasswordResetStyle';

const Reset = ({ navigation }) => {
  const [isSended, setIsSended] = useState(false);
  const [email, setEmail] = useState('');
  const [active, setActive] = useState(false)
  const [err, setError] = useState(null);

  const resetPassword = () => {

    setActive(true)
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setActive(false)
        setIsSended(true);
      })
      .catch((error) => {
        setActive(false)
        setError(error.message);
      });
    if (err != null) {
      setActive(false)
    }
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.brand}>IOFA</Text>
      </View>
      <View>
        <TextInput
          value={email}
          keyboardType="email-address"
          onChangeText={(val) => setEmail(val)}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#121212"
        />
        <TouchableOpacity
          disabled={isSended}
          activeOpacity={0.8}
          style={isSended ? styles.disabled : styles.button}
          onPress={resetPassword}>
          {active ?
            <ActivityIndicator size="large" color="#fff" />
            :
            <Text style={styles.buttonText}>Change password</Text>
          }
        </TouchableOpacity>

      </View>
      <View style={isSended ? styles.popup : styles.hide}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Reset;