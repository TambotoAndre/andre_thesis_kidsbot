import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
  Button,
  Text,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {ButtonAT, TextInputAT, Header, Gap} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {uklogo, kidsbot, name} from '../../assets';

// import logo from '../../assets/screenImg/Logo.png';
import LinearGradient from 'react-native-linear-gradient';

const SignIn = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [fullname, setFullname] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      loadRememberedCredentials();
    }, []),
  );

  useEffect(() => {
    if (rememberMe) {
      saveRememberedCredentials();
    } else {
      removeRememberedCredentials();
    }
  }, [email, password, rememberMe]);

  const loadRememberedCredentials = async () => {
    try {
      const rememberedEmail = await AsyncStorage.getItem('rememberedEmail');
      const rememberedPassword = await AsyncStorage.getItem(
        'rememberedPassword',
      );
      if (rememberedEmail) {
        setEmail(rememberedEmail);
        setPassword(rememberedPassword);
        setRememberMe(true);
      }
    } catch (error) {
      console.error('Error loading remembered credentials:', error);
    }
  };

  const saveRememberedCredentials = async () => {
    try {
      await AsyncStorage.setItem('rememberedEmail', email);
      await AsyncStorage.setItem('rememberedPassword', password);
    } catch (error) {
      console.error('Error saving remembered credentials:', error);
    }
  };

  const removeRememberedCredentials = async () => {
    try {
      await AsyncStorage.removeItem('rememberedEmail');
      await AsyncStorage.removeItem('rememberedPassword');
    } catch (error) {
      console.error('Error removing remembered credentials:', error);
    }
  };

  const handleSignIn = () => {
    if (!email.trim() && !password.trim()) {
      showAlert(
        'Error Message',
        'Input email and password fields cannot be empty or contain only spaces.',
      );
      return;
    }

    if (!email.trim()) {
      showAlert(
        'Error Message',
        'Input email field cannot be empty or contain only spaces.',
      );
      return;
    }

    if (!password.trim()) {
      showAlert(
        'Error Message',
        'Input password field cannot be empty or contain only spaces.',
      );
      return;
    }

    const requestBody = {
      'input-email': email,
      'input-password': password,
    };

    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Request timed out'));
      }, 10000);
    });

    Promise.race([
      fetch('https://kidsbot.online/admin/loginmobile.php', {
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
        console.log(textData);

        if (textData.includes('ERROR')) {
          showAlert('Error Message', 'Sorry, login failed. Please Sign Up!!');
          return;
        }

        if (textData.includes('SUCCESS')) {
          const dataArray = textData.split('SUCCESS');
          const jsonString = dataArray[1];

          const jsonData = JSON.parse(jsonString);

          navigation.navigate('Home', {
            jsonData,
            fullName: fullname,
            email: email,
          });
        }
      })
      .catch(error => {
        showAlert('Error Message', error.message);
        return;
      });
    navigation.navigate('Home', {fullName: fullname});
  };

  const showAlert = (title, message) => {
    Alert.alert(title, message);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#00dbde', '#B2FEFA', '#FFFFFF']}
        style={styles.gradient}>
        <Image style={styles.cs} source={name} />
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Type your email"
            placeholderTextColor="#525252"
            value={email}
            onChangeText={setEmail}
          />
          <Gap height={16} />

          <TextInput
            style={styles.input}
            placeholder="Type your password"
            placeholderTextColor="#525252"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />

          <Gap height={40} />
          <TouchableOpacity>
            <ButtonAT
              text="Sign In"
              textColor="#FFFFFF"
              onPress={handleSignIn}
            />
          </TouchableOpacity>
          <Gap height={25} />
          <TouchableOpacity>
            <ButtonAT
              text="Create Account"
              textColor="#FFFFFF"
              onPress={() => navigation.navigate('Su')}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  card: {
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: '#B2FEFA',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    top: -200,
  },
  input: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    fontSize: 16,
    color: '#525252',
    marginBottom: 16,
  },
  cs: {
    top: 40,
    width: 400,
    height: 400,
    marginBottom: 1,
    alignContent: 'center',
    alignItems: 'center',
    left: 13,
  },
});
