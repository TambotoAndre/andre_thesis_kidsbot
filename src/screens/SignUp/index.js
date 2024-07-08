import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Alert,
  Button,
  Image,
} from 'react-native';
import {Header, Gap, TextInputAT, ButtonAT} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {uklogo, name} from '../../assets';

const SignUp = ({navigation}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleCreateAccount = () => {
    // check if input fields are not empty or only spaces
    if (!fullname.trim() || !email.trim() || !password.trim()) {
      Alert.alert(
        'Empty Input Field',
        'Check again, all fields cannot be empty or contain only spaces.',
      );
      return;
    }

    // check if email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error Message', 'Invalid email format.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Password', 'Password length must be at least 8 characters.');
      return;
    }

    // create request body with email and password input values
    const requestBody = {
      fullname: fullname,
      email: email,
      password: password,
    };

    // Time out request data
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Request timed out.'));
      }, 5000); // 5000 (5 detik)
    });

    Promise.race([
      fetch('https://kidsbot.online/admin/signupmobile.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: Object.keys(requestBody)
          .map(
            key =>
              `${encodeURIComponent(key)}=${encodeURIComponent(
                requestBody[key],
              )}`,
          )
          .join('&'),
      }),
      timeoutPromise,
    ])
      .then(response => response.text())
      .then(textData => {
        // handle response data
        console.log(textData);

        // check if textData contains "ERROR"
        if (textData.includes('ERROR')) {
          // handle error case
          Alert.alert(
            'Error Message',
            'Sorry, create a new account failed. Please try again.',
          );
          return;
        }

        // check if textData contains "DUPLICATE"
        if (textData.includes('DUPLICATE')) {
          // handle DUPLICATE case
          Alert.alert(
            'Error Message',
            'Sorry, duplicate email was found in the database. Please contact the administrator.',
          );
          return;
        }

        if (textData.includes('SUCCESS')) {
          // message
          Alert.alert('User Account', 'New account was created successfully.', [
            {
              text: 'OK',
              onPress: () => {
                // Navigate to the Sign-In screen after successful account creation
                navigation.navigate('SignIn', {
                  email: email,
                  fullName: fullname,
                });

                // Clear input fields
                setFullname('');
                setEmail('');
                setPassword('');
              },
            },
          ]);
        }
      })
      .catch(error => {
        Alert.alert('Error Message', error.message);
        return;
      });

    navigation.navigate('SignIn', {
      signUpData: {fullName: fullname, email: email},
    });
  };

  return (
    <View style={styles.View}>
      <LinearGradient
        colors={['#00dbde', '#B2FEFA', '#FFFFFF']}
        style={styles.View}
        // start={{x: 1, y: 1}}
        // end={{x: 1, y: 0}}
      />
      {/* <Header title="Sign Up" onBack={() => navigation.goBack()} /> */}

      <View style={styles.bodyView}>
        {/* <View style={styles.addPhotoView}>
          <View style={styles.border}>
            <View style={styles.addPhoto}>
              <Text style={styles.addPhototxt}>Add Photo</Text>
            </View>
          </View>
        </View> */}

        <Image style={styles.logo} source={name} />
        <View style={styles.card}>
          <TextInput
            style={styles.txtinputBorderrs}
            label="Full Name"
            placeholder="Type your full name"
            placeholderTextColor={'#525252'}
            value={fullname}
            onChangeText={setFullname}
            autoCapitalize="none"
          />
          <Gap height={16} />
          <TextInput
            style={styles.txtinputBorderrs2}
            label="Email"
            placeholder="Type your email"
            placeholderTextColor={'#525252'}
            value={email}
            autoCapitalize="none"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCompleteType="email"
          />

          <Gap height={16} />
          <TextInput
            style={styles.txtinputBorderrs3}
            label="Password"
            placeholder="Type your password"
            placeholderTextColor={'#525252'}
            value={password}
            onChangeText={setPassword}
            autoCompleteType="password"
            secureTextEntry={!showPassword}
          />
          <Gap height={24} />
          <ButtonAT
            text="Continue"
            textColor="#FFFFFF"
            onPress={handleCreateAccount}
          />
          {/* <Button
          title="Continue"
          onPress={handleCreateAccount}
          color="#3c1053"
        /> */}
          <Gap height={25} />
          <ButtonAT
            text="Sign In"
            textColor="#FFFFFF"
            onPress={() => navigation.navigate('SignIn')}
            position="center"
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  View: {
    flex: 1,
  },
  bodyView: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: -980,
    height: 9,
    top: 240,
  },
  addPhotoView: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  border: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 110,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },

  addPhoto: {
    width: 90,
    height: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },

  addPhototxt: {
    fontSize: 14,
    fontFamily: 'Poppins',
    maxWidth: 40,
    textAlign: 'center',
  },
  View: {
    flex: 1,
    backgroundColor: 'black',
  },
  txtinputBorderrs: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    color: '#525252',
    elevation: 9,
    shadowColor: '#FFFFFF',
  },
  txtinputBorderrs2: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    color: '#525252',
    elevation: 9,
    shadowColor: '#FFFFFF',
  },
  txtinputBorderrs3: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    color: '#525252',
    elevation: 9,
    shadowColor: '#FFFFFF',
  },
  card: {
    marginTop: 100,
    marginHorizontal: -5,
    backgroundColor: '#B2FEFA',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    top: -350,
  },
  logo: {
    top: -120,
    width: 400,
    height: 400,
    marginBottom: 1,
    alignContent: 'center',
    alignItems: 'center',
    left: -12,
  },
});
