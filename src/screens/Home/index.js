import {
  StyleSheet,
  View,
  Linking,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
  AnimatedPath,
} from 'react-native';
import React from 'react';
import {Header, Footer, Slider, HomeButton} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {
  profile,
  pp,
  gif,
  bot,
  chatbt,
  logout,
  cp,
  bot1,
  icProfile,
  pf,
  dbot,
  dbot2,
  dbot3,
  bubble,
  set,
} from '../../assets';
import {useState, useEffect, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import Svg, {Path} from 'react-native-svg';
// import * as Animatable from 'react-native-animatable';

const Home = ({navigation, route}) => {
  // const route = useRoute();
  // const fullName = route.params?.fullName;
  // const email = route.params?.email;
  // const {jsonData} = route.params;
  const {email, fullName, jsonData} = route.params;

  const goToProfile = () => {
    navigation.navigate('Profile', {
      jsonData: jsonData,
      fullName: fullName,
      email: email,
    });
  };
  // Animated value for floating animation
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startFloatingAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    startFloatingAnimation();
  }, []);

  const floatingInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  return (
    <View style={styles.bodyView}>
      <LinearGradient
        colors={['#00dbde', '#FFFFFF', '#00dbde']}
        style={styles.bodyView}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}></LinearGradient>

      <View style={styles.profileIconContainer}>
        <TouchableOpacity style={styles.profileIcon} onPress={goToProfile}>
          <Image source={set} style={styles.profileIconImage} />
        </TouchableOpacity>
      </View>

      <Animated.View
        style={[
          styles.botContainer,
          {
            transform: [{translateY: floatingInterpolation}],
          },
        ]}>
        <Image source={dbot} style={styles.botImage} />
      </Animated.View>
      {/* <Animated.View
        style={[
          styles.bubContainer,
          {
            transform: [{translateY: floatingInterpolation}],
          },
        ]}>
        <Image source={bubble} style={styles.bubImage} />
      </Animated.View> */}

      {/* <Text style={styles.text}>
        Halo, Perkenalkan Saya KidsBot Penyedia Informasi Kesehatan dan Gizi
        Bayi <Text style={styles.boldText}>{fullName}</Text>
      </Text> */}
      <View style={styles.centeredView}>
        {/* <View style={styles.container0}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>
              Halo, Perkenalkan Saya KidsBot Penyedia Informasi Kesehatan dan
              Gizi Bayi
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <Text style={styles.welcomeText}>
        Welcome, {email}
        <Text style={styles.welcomeText}></Text>
      </Text>
      <View style={styles.body2}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Chat', {jsonData: jsonData})}>
            <Image source={chatbt} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.box}>
          <Svg
            height={200}
            width={Dimensions.get('screen').width}
            viewBox="0 0 1440 320"
            style={styles.bottomWavy}>
            <Path
              fill="#00dbde"
              d="M0,64L40,96C80,128,160,192,240,202.7C320,213,400,171,480,149.3C560,128,640,128,720,154.7C800,181,880,235,960,218.7C1040,203,1120,117,1200,74.7C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bodyView: {
    flexGrow: 1,
    justifyContent: 'space-between',
    height: 590,
  },

  profileIconContainer: {
    position: 'absolute',
    top: 15,
    right: 20,
    zIndex: 999,
    alignItems: 'center',
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    // backgroundColor: '#fc00ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconImage: {
    width: 190,
    height: 190,
    borderRadius: 15,
  },
  botContainer: {
    position: 'absolute',
    top: '-2%',
    zIndex: 999,
    transform: [{translateX: 25}, {translateY: -25}],
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
    elevation: 20,
  },
  bubContainer: {
    position: 'absolute',
    top: '-35%',
    zIndex: 999,
    transform: [{translateX: 25}, {translateY: -25}],
    justifyContent: 'center',
    alignItems: 'center',
    right: -173,
    elevation: 20,
  },
  botImage: {
    width: 330,
    height: 330,
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 10,
    // shadowColor: '#000',
    // shadowOpacity: 9,
    // shadowRadius: 9,
    // shadowOffset: {
    //   width: 9,
    //   height: 9,
    // },
  },
  bubImage: {
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 10,
    // shadowColor: '#000',
    // shadowOpacity: 9,
    // shadowRadius: 9,
    // shadowOffset: {
    //   width: 9,
    //   height: 9,
    // },
    top: 120,
  },

  welcomeText: {
    color: '#FFFFFF',
    fontSize: 0.02 * windowHeight,
    textAlign: 'left',
    top: -580,
    marginLeft: '5%',
    fontWeight: 'bold',
  },
  text: {
    color: '#000000',
    fontSize: 0.04 * windowHeight,
    textAlign: 'center',
    fontWeight: 'bold',
    top: 370,
    fontSize: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -150,
  },
  container0: {
    padding: 10,
    borderRadius: 40,
    marginBottom: -10,
    marginRight: 40,
    marginLeft: 40,
    backgroundColor: '#fc00ff',
    width: 380,
    top: -65,
  },
  container: {
    padding: 10,
    borderRadius: 40,
    marginBottom: 10,
    backgroundColor: '#00dbde',
    width: 170,
    bottom: -90,
    right: -115,
  },
  button: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: 100,
    height: 100,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  waveContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  wave: {
    width: '100%',
    height: 80,
    backgroundColor: '#00dbde', // Warna biru
    borderRadius: 20,
  },
  bottom: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    bottom: 0,
  },
  box: {
    backgroundColor: '#00dbde',
    height: 80,
  },
  bottomWavy: {
    position: 'absolute',
    bottom: 20,
  },
  body2: {
    backgroundColor: '#eef2f3',
    top: -360,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingBottom: 350,
    // elevation: 40,
  },
});

export default Home;

// import {
//   StyleSheet,
//   View,
//   Linking,
//   Image,
//   Text,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';
// import React from 'react';
// import {Header, Footer, Slider, HomeButton} from '../../components';
// import LinearGradient from 'react-native-linear-gradient';
// import {
//   profile,
//   pp,
//   gif,
//   bot,
//   chatbt,
//   logout,
//   cp,
//   bot1,
//   icProfile,
// } from '../../assets';
// import {useState, useEffect} from 'react';
// import {useFocusEffect} from '@react-navigation/native';
// import {useRoute} from '@react-navigation/native';

// const Home = ({navigation}) => {
//   // navigation.navigate('Chat', {jsonData});

//   const goToProfile = () => {
//     navigation.navigate('Profile', {jsonData: jsonData});
//   };

//   const route = useRoute();
//   const fullName = route.params?.fullName;
//   const {jsonData} = route.params;
//   return (
//     <View style={styles.bodyView}>
//       <LinearGradient
//         colors={['#000000', '#3c1053']}
//         style={styles.areaView}
//         start={{x: 1, y: 1}}
//         end={{x: 1, y: 0.3}}></LinearGradient>
//       {/* <Header
//         title={'Welcome'}
//         name={fullName} // Gunakan nama pengguna di sini
//         isProfile={true}
//         IcProf={pp}
//         toSignIn={goToProfile}
//       /> */}

//       <View style={styles.centeredView}>
//         <View style={styles.container}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => navigation.navigate('Chat', {jsonData: jsonData})}>
//             <Image source={chatbt} style={styles.buttonImage} />
//             <Text style={styles.buttonText}>Chat</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Home;
// const windowWidth = Dimensions.get('window').width;
// const styles = StyleSheet.create({
//   bodyView: {
//     flexGrow: 1,
//     justifyContent: 'space-between',
//     backgroundColor: 'white',
//   },

//   ATView: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 50,
//   },

//   btnView: {
//     flexDirection: 'row',
//     flexGrow: 1,
//     justifyContent: 'space-between',
//     marginVertical: 10,
//   },

//   smView: {
//     flexDirection: 'row',
//     flexGrow: 1,
//     justifyContent: 'space-between',
//     marginVertical: 10,
//   },
//   botimg: {
//     width: 200,
//     height: 200,
//     left: 100,
//     top: -150,
//   },
//   texthome: {
//     top: -90,
//     color: '#FFFFFF',
//     left: 140,
//     fontSize: 50,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     marginBottom: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonImage: {
//     width: 100,
//     height: 100,
//   },
//   container: {
//     padding: 10,
//     borderRadius: 40, // Mengatur sudut container
//     marginBottom: 20,
//     backgroundColor: '#00dbde',
//     width: 170,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 30,
//     marginTop: 5,
//     textAlign: 'center',
//   },
//   containertext: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//   },
//   textintro: {
//     fontSize: windowWidth * 0.07, // Responsif: ukuran teks disesuaikan dengan lebar layar
//     color: 'white',
//     textAlign: 'center',
//     fontFamily: 'Poppins-Regular',
//     fontWeight: 'bold', // Ganti dengan font yang Anda inginkan
//   },
//   purpleText: {
//     color: 'purple',
//     fontWeight: 'bold',
//     fontFamily: 'Poppins-Regular',
//   },
// });

// import React, {useEffect, useRef} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   Dimensions,
//   Animated,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import {Header} from '../../components';
// import {pp, chatbt} from '../../assets';

// const Home = ({navigation, route}) => {
//   const fullName = route.params?.fullName;

//   // Animation values
//   const waveAnimation = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     const wave = Animated.loop(
//       Animated.sequence([
//         Animated.timing(waveAnimation, {
//           toValue: 1,
//           duration: 1000, // Adjust duration as needed
//           useNativeDriver: true,
//         }),
//         Animated.timing(waveAnimation, {
//           toValue: -1,
//           duration: 1000, // Adjust duration as needed
//           useNativeDriver: true,
//         }),
//       ]),
//     );

//     wave.start();

//     return () => {
//       wave.stop();
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <LinearGradient
//         colors={['#000000', '#3c1053']}
//         style={styles.gradient}
//         start={{x: 1, y: 1}}
//         end={{x: 1, y: 0.3}}></LinearGradient>
//       <Header
//         title="Welcome"
//         name={fullName}
//         isProfile={true}
//         IcProf={pp}
//         toSignIn={() =>
//           navigation.navigate('Profile', {jsonData: route.params.jsonData})
//         }
//       />
//       <View style={styles.centeredView}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() =>
//             navigation.navigate('Chat', {jsonData: route.params.jsonData})
//           }>
//           <Image source={chatbt} style={styles.buttonImage} />
//           <Text style={styles.buttonText}>Chat</Text>
//         </TouchableOpacity>
//       </View>
//       <Animated.View
//         style={[
//           styles.wave,
//           {
//             transform: [
//               {
//                 translateY: waveAnimation.interpolate({
//                   inputRange: [-1, 0, 1],
//                   outputRange: [5, 0, -5], // Adjust amplitude as needed
//                 }),
//               },
//             ],
//           },
//         ]}
//       />
//     </View>
//   );
// };

// export default Home;

// const windowWidth = Dimensions.get('window').width;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000000',
//   },
//   gradient: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     borderBottomLeftRadius: 80,
//     borderBottomRightRadius: 80,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//     // borderRadius: 40, // Mengatur sudut container
//     // marginBottom: 20,
//     // backgroundColor: '#3c1053',
//     // width: 170,
//   },
//   button: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#3c1053',
//     borderRadius: 40,
//     paddingVertical: 20,
//     paddingHorizontal: 30,
//   },
//   buttonImage: {
//     width: 50,
//     height: 50,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   wave: {
//     position: 'absolute',
//     bottom: 0,
//     width: windowWidth,
//     height: 20,
//     backgroundColor: '#3c1053',
//   },
// });
