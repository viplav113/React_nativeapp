import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { loginUserAPI } from '../../utils/api'; // Update the correct path

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await loginUserAPI(username, password);
      // On success, navigate to ProductDetailsScreen
      navigation.navigate('ProductDetails', {
        productName: 'Default Product', // Provide default product details or fetch from API
        price: '$0.00',
        availability: 'In stock',
      });
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
    }
  };

  const handleAddNewUser = () => {
    navigation.navigate('Register'); // Navigate to the registration screen
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Add New User" onPress={handleAddNewUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
