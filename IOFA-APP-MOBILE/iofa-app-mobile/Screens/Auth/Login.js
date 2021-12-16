import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native';
import Icone from 'react-native-vector-icons/Octicons'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from '../../style/LoginStyle';
import Colors from '../../src/depen/Colors'

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [isSecure, setIsSecure] = useState(true)
  const [isProgressing, setIsProgressing] = useState(false);
  const [err, setError] = useState(null);



  const handleSubmit = () => {
    if (email === '') {
      setIsProgressing(false)
      setError('Email is empty');
    }
    else {
      setIsProgressing(true)
      auth()
        .signInWithEmailAndPassword(email, pswd)
        .then((res) => {
          const uid = res.user.uid;
          const usersRef = database().ref(`users/${uid}`);
          usersRef
            .once('value')
            .then((snapShot) => {
              if (!snapShot.exists) {
                setError('User does not exist !');
                return;
              }
              const user = snapShot.val();
              setIsProgressing(false);
            })
            .catch((err) => {
              setIsProgressing(false)
              setError(err.message);
            });
        })
        .catch((err) => {
          setIsProgressing(false)
          setError(err.message);
        });
      if (err !== null) {
        setError(err.message);
      };
    }

  };
  return (
    <View style={styles.footer}>
      <View style={styles.textbox}>
        <Text style={styles.heading}>Welcome Back !</Text>
        <Text style={styles.subHeading}>Thanks For having you</Text>
      </View>
      <View>
        <TextInput
          name="email"
          placeholder="e-mail"
          keyboardType="email-address"
          style={styles.input}
          placeholderTextColor="#121212"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <View style={styles.secureEntry}>
          <TextInput
            name="pswd"
            placeholder="password"
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
          <ActivityIndicator size="small" color={Colors.Black} />
        </TouchableOpacity>
        :
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      }
      <Text style={[styles.link, { color: Colors.dark }]}>
        If you don't have an account ?
          <Text style={[styles.link, { marginHorizontal: 5 }]} onPress={() => props.navigation.navigate('Register')}>
          Register
          </Text>
      </Text>
      <Text style={[styles.link, { alignSelf: 'center' }]} onPress={() => props.navigation.navigate('Reset')}>
        Forget password ?
          </Text>
    </View>
  );
};
export default Login;