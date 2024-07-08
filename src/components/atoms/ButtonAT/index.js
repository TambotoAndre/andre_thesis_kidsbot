import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ButtonAT = ({text, color = '', textColor = '#FFFFFF', onPress}) => {
  return (
    <View style={styles.view}>
      <LinearGradient
        colors={['#B2FEFA', '#00dbde']}
        style={styles.view}
        start={{x: 0.1, y: 1}}
        end={{x: 0.1, y: 0.1}}>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.appButtonContainer(color), styles.shadowProp]}
          activeOpacity={0.7}>
          <Text style={styles.appButtonText(textColor)}>{text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ButtonAT;

const styles = StyleSheet.create({
  appButtonContainer: color => ({
    // elevation: 1,
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 8,
  }),
  view: {
    borderRadius: 30,
    elevation: 3,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  appButtonText: textColor => ({
    fontSize: 18,
    color: textColor,
    alignSelf: 'center',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 18,
  }),
});
