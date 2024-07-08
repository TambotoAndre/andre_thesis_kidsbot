import {
  StyleSheet,
  View,
  Linking,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Header, Footer, Slider, HomeButton} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {profile, pp, gif, bot, chatbt, logout, cp} from '../../assets';
import {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const Profile = ({navigation}) => {
  // navigation.navigate('Chat', {jsonData});

  // const goToProfile = () => {
  //   navigation.navigate('Profile', {jsonData: jsonData});
  // };

  const route = useRoute();
  const fullName = route.params?.fullName;
  const email = route.params?.email;
  const {jsonData} = route.params;
  return (
    <View style={styles.bodyView}>
      <LinearGradient
        colors={['#000000', '#3c1053']}
        style={styles.areaView}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0.3}}></LinearGradient>
      <Header title="Profile" onBack={() => navigation.goBack()} />

      <View style={styles.centeredView}>
        {/* <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>
              Nama: {fullName}, Email: {email}
            </Text>
          </TouchableOpacity>
        </View> */}
        {/* <View style={styles.container}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Chat', {jsonData: jsonData})}>
                <Image source={chatbt} style={styles.buttonImage} />
                <Text style={styles.buttonText}>Chat</Text>
              </TouchableOpacity>
            </View> */}

        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Changepas', {jsonData: jsonData})
            }>
            <Image source={cp} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container3}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignIn', {jsonData: jsonData})}>
            <Image source={logout} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={styles.bot}>
            <Image source={bot} style={styles.botimg} />
            <Text style={styles.texthome}>Hallo</Text>
          </View> */}
      {/* <Footer
            OnPress={() => navigation.navigate('Home')}
            OnPress2={() => navigation.navigate('Chat')}
            OnPress3={() => navigation.navigate('History')}
          /> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  bodyView: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },

  ATView: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },

  btnView: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  smView: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  botimg: {
    width: 200,
    height: 200,
    left: 100,
    top: -150,
  },
  texthome: {
    top: -90,
    color: '#FFFFFF',
    left: 140,
    fontSize: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  container: {
    padding: 10,
    borderRadius: 40, // Mengatur sudut container
    marginBottom: 10,
    backgroundColor: '#00dbde',
    width: 370,
  },
  container2: {
    padding: 10,
    borderRadius: 40, // Mengatur sudut container
    marginBottom: 20,
    backgroundColor: '#fc00ff',
    width: 170,
  },
  container3: {
    padding: 10,
    borderRadius: 40, // Mengatur sudut container
    marginBottom: 20,
    backgroundColor: '#00dbde',
    width: 170,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: 5,
    textAlign: 'center',
  },
});

// import React from 'react';
// import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
// import Svg, {Path} from 'react-native-svg';

// export default function Profile() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.bottom}>
//         <View style={styles.box}>
//           <Svg
//             height={200}
//             width={Dimensions.get('screen').width}
//             viewBox="0 0 1440 320"
//             style={styles.bottomWavy}>
//             <Path
//               fill="#2471A3"
//               d="M0,64L40,96C80,128,160,192,240,202.7C320,213,400,171,480,149.3C560,128,640,128,720,154.7C800,181,880,235,960,218.7C1040,203,1120,117,1200,74.7C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
//             />
//           </Svg>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   top: {},
//   bottom: {
//     position: 'absolute',
//     width: Dimensions.get('screen').width,
//     bottom: 0,
//   },
//   box: {
//     backgroundColor: '#2471A3',
//     height: 80,
//   },
//   bottomWavy: {
//     position: 'absolute',
//     bottom: 20,
//   },
// });
