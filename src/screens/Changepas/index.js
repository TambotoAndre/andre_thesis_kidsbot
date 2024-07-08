import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {ButtonAT, TextInputAT, Header, Gap} from '../../components';
// import logo from '../../assets/screenImg/Logo.png';
import LinearGradient from 'react-native-linear-gradient';
import {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';

const Changepas = ({navigation, route}) => {
  const {jsonData} = route.params;
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');

  // set oldPass and newPass to empty string on screen focus
  useFocusEffect(
    React.useCallback(() => {
      setOldPass('');
      setNewPass('');
    }, []),
  );

  const handleChangePass = () => {
    // check if old pass and new pass are not empty or only spaces
    if (!oldPass.trim() && !newPass.trim()) {
      Alert.alert(
        'Error Message',
        'Input old password and new password fields cannot be empty or contain only spaces.',
      );
      return;
    }

    if (oldPass === newPass) {
      Alert.alert(
        'Error Message',
        'Input password fields must be different from the previous one.',
      );
      return;
    }

    if (!oldPass.trim()) {
      Alert.alert(
        'Error Message',
        'Input old password field cannot be empty or contain only spaces.',
      );
      return;
    }

    if (!newPass.trim()) {
      Alert.alert(
        'Error Message',
        'Input new password field cannot be empty or contain only spaces.',
      );
      return;
    }

    // create request body with email and password input values
    const requestBody = {
      'input-old-password': oldPass,
      'input-new-password': newPass,
      'email-user': jsonData[0].email,
    };

    // Time out request data
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Request timed out.'));
      }, 5000); // 5000 (5 detik)
    });

    Promise.race([
      fetch('https://kidsbot.online/admin/changepassword.php', {
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
          //console.error("Login failed:", textData);
          Alert.alert(
            'Error Message',
            'Sorry, change password failed. Please try again.',
          );
          return;
        }

        // check if textData contains "INCORRECT"
        if (textData.includes('INCORRECT')) {
          // handle INCORRECT case
          Alert.alert(
            'Error Message',
            'Sorry, you put incorrect old password. Please try again.',
          );
          return;
        }

        if (textData.includes('SUCCESS')) {
          Alert.alert(
            'Password Changed',
            'Password has been changed successfully. Please sign in with the new password.',
          );
          // redirect to SignInScreen on successful change password
          navigation.navigate('SignIn');
        }
      })
      .catch(error => {
        //console.error(error);
        Alert.alert('Error Message', error.message);
        return;
      });
  };
  return (
    <View style={styles.cs}>
      <Header title="Change Password" onBack={() => navigation.goBack()} />
      <LinearGradient
        colors={['#B2FEFA', '#FFFFFF', '#00dbde']}
        style={styles.cs}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}
      />
      {/* <Header title="Sign In" onBack={() => navigation.goBack()} /> */}
      <View style={styles.bodyView}>
        <TextInput
          style={styles.border}
          label="Old Password"
          placeholder="Type your old password"
          placeholderTextColor={'#525252'}
          secureTextEntry={true}
          value={oldPass}
          onChangeText={setOldPass}
        />
        <Gap height={16} />
        <TextInput
          style={styles.border}
          label="New Password"
          placeholder="Type your new password"
          placeholderTextColor={'#525252'}
          secureTextEntry={true}
          value={newPass}
          onChangeText={setNewPass}
        />
        <Gap height={40} />
        <TouchableOpacity>
          <ButtonAT
            text="Confirm"
            textColor="#FFFFFF"
            onPress={handleChangePass}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Changepas;

const styles = StyleSheet.create({
  cs: {
    flex: 1,
    top: -10,
    backgroundColor: '#00dbde',
  },
  bodyView: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
    marginTop: -840,
    top: 250,
  },

  logoView: {
    alignItems: 'center',
  },

  logo: {
    width: 155,
    height: 155,
    borderRadius: 155,
  },
  border: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    elevation: 9,
    shadowColor: '#FFFFFF',
  },
});
