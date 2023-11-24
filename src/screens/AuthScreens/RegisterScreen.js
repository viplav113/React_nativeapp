// src/screens/AuthScreens/RegisterScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { addUserAPI } from '../../utils/api'; // Import your API functions

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await addUserAPI(username, password);
      Alert.alert('Registration Successful', 'You can now log in.');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Registration Failed', 'Please try again.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
