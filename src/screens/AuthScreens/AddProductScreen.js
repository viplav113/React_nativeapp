import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductDetailsScreen = ({ route, navigation }) => {
  // Extract product details from route params
  const { productName, price, availability } = route.params;

  const handleEdit = () => {
    // Navigation to edit screen or functionality
    // Example: navigation.navigate('EditProduct', { productName, price, availability });
  };

  const handleDelete = () => {
    // Logic to delete the product
    // Example: Call an API or delete from state
    console.log('Product deleted:', { productName, price, availability });
    // Navigate back to the previous screen after deletion
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Name: {productName}</Text>
      <Text style={styles.text}>Price: {price}</Text>
      <Text style={styles.text}>Availability: {availability}</Text>
      <Button title="Edit" onPress={handleEdit} />
      <Button title="Delete" onPress={handleDelete} />
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
  text: {
    marginBottom: 10,
  },
});

export default ProductDetailsScreen;
