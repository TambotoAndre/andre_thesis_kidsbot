import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const TextInputAT = props => {
  return (
    <View>
      <Text style={styles.txtView}>{props.label}</Text>
      <TextInput
        style={styles.txtinputBorder}
        placeholder={props.placeholder}
        placeholderTextColor={'#525252'}
      />
    </View>
  );
};

export default TextInputAT;

const styles = StyleSheet.create({
  txtView: {
    marginBottom: 6,
    fontStyle: 'italic',
    // fontWeight : 600,
    fontSize: 15,
    color: '#FFFFFF',
  },

  txtinputBorder: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    color: '#FFFFFF',
  },
});
