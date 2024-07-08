import React, {useEffect} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {logo, intro, kidsbot} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 1800);
  }, [navigation]);
  return <ImageBackground source={kidsbot} style={styles.bg}></ImageBackground>;
};

export default Splash;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
