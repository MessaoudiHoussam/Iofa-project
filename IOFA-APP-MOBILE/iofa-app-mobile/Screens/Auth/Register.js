import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native';
import Icone from "react-native-vector-icons/Octicons";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from '../../style/RegisterStyle';
import Colors from '../../src/depen/Colors'


const Register = ({ navigation }) => {
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [isSecure, setIsSecure] = useState(true)
  const [isProgressing, setIsProgressing] = useState(false)
  const [err, setError] = useState(null);

  const handleSubmit = () => {
    setIsProgressing(true)
    const PhoneValidation = new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, 'g')
    if (!PhoneValidation.test(PhoneNumber)) {
      setIsProgressing(false)
      setError('Phone number not valid')
    }
    else {
      setIsProgressing(true)
      setError(null)
      auth()
        .createUserWithEmailAndPassword(email, pswd)
        .then((response) => {
          const uid = response.user.uid;
          const data = {
            id: uid,
            email,
            PhoneNumber,
            password: pswd,
          };
          const usersRef = database().ref(`users/${uid}`);
          usersRef
            .set(data)
          setIsProgressing(false);
        })
        .catch((err) => {
          setIsProgressing(false)
          setError(err.message);
        });
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.textbox}>
          <Text style={styles.heading}>Create an account </Text>
          <Text style={styles.subHeading}>and Start Controle </Text>
        </View>
        <View>
          <TextInput
            name="Phone number"
            placeholder="Phone number"
            autoCompleteType="tel"
            required={true}
            keyboardType="phone-pad"
            style={styles.input}
            placeholderTextColor="#121212"
            onChangeText={(text) => setPhoneNumber(text)}
            value={PhoneNumber}
          />
          <TextInput
            name="email"
            required={true}
            placeholder="Email"
            autoCompleteType="email"
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor="#121212"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <View style={styles.secureEntry}>
            <TextInput
              name="pswd"
              placeholder="Password"
              secureTextEntry={isSecure}
              style={styles.input}
              placeholderTextColor="#121212"
              onChangeText={(text) => setPswd(text)}
              value={pswd}
            />
            <View style={styles.btnHandler}>
              {isSecure ?
                <Icone.Button
                  name="eye"
                  onPress={() => setIsSecure(!isSecure)}
                  size={22}
                  backgroundColor="transparent"
                  color={Colors.Black}
                >
                </Icone.Button>
                :
                <Icone.Button
                  name="eye-closed"
                  onPress={() => setIsSecure(!isSecure)}
                  size={22}
                  backgroundColor="transparent"
                  color={Colors.Black}
                >
                </Icone.Button>
              }
            </View>
          </View>
        </View>
        <Text style={err !== null ? styles.error : styles.hide}>{err}</Text>
        {isProgressing ?
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            disabled={true}>
            <ActivityIndicator size="small" color={Colors.dark} />
          </TouchableOpacity>
          :
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        }

        <Text style={[styles.link, { color: Colors.dark }]}>
          Already have an account ?
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
            Log in
        </Text>
        </Text>
      </View>
    </View >
  );
};
export default Register;