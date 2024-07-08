import {View, StyleSheet, TouchableOpacity, Text, Button} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {historybt, cw, hw, homebt, chatbt} from '../../../assets/';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = ({OnPress, OnPress2, OnPress3}) => {
  return (
    <View style={styles.areaView}>
      <LinearGradient
        colors={['#000000', '#3c1053']}
        style={styles.areaView}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0.3}}></LinearGradient>

      <TouchableOpacity>
        <View>
          <TouchableOpacity onPress={OnPress}>
            <Image style={styles.btn} source={homebt} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={OnPress2}>
        <Image style={styles.tombol} source={chatbt} />
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={OnPress3}>
        <Image style={styles.button2} source={historybt} />
      </TouchableOpacity> */}
    </View>
  );
};
export default Footer;
// <Footer onPress={() => navigation.navigate('OrderSummary')} />

styles = StyleSheet.create({
  areaView: {
    height: 60,
    width: 395,
    flexDirection: 'column',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    bottom: 20,
    right: 2,
  },

  textView: {
    right: 140,
    fontSize: 'normal',
    // fontWeight: 800,
    fontSize: 17,
    color: '#222222',
    marginVertical: 5,
  },

  button2: {
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    right: -133,
    bottom: 7,
  },

  tombol: {
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    right: -120,
    bottom: 7,
  },
  btn: {
    width: 40,
    height: 40,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    position: 'absolute',
    bottom: 8,
    right: 80,
  },
  icons: {
    width: 100,
    height: 100,
    right: 40,
    borderRadius: 40,
  },
});

// // BottomTabNavigator.js
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from '../../../screens';
// import {View, StyleSheet} from 'react-native';

// const Tab = createBottomTabNavigator();

// const Footer = () => {
//   return (
//     <View style={styles.bt}>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//       </Tab.Navigator>
//     </View>
//   );
// };

// export default Footer;
// const styles = StyleSheet.create({
//   bt: {
//     flex: 1,
//     height: 100,
//     backgroundColor: 'white',
//   },
// });
