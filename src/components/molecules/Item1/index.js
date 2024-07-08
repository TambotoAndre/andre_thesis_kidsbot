import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Item1 = ({}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>andre</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item1;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#4D4D4D',
    width: 250,
    height: 110,
  },
  text: {
    color: 'white',
    left: 20,
  },
});
