import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {icProfile, back, logo2} from '../../../assets';
import {Gap} from '../../atoms';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({
  isProfile,
  onBack,
  toSignIn,
  title,
  name,
  IcProf = {icProfile},
}) => {
  return (
    <View style={styles.hdr}>
      <LinearGradient
        colors={['#B2FEFA', '#00dbde']}
        style={styles.hdr}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}>
        {onBack && (
          <TouchableOpacity onPress={onBack}>
            <View style={styles.back}>
              <Image source={back} style={styles.imageb} />
            </View>
          </TouchableOpacity>
        )}

        <View style={styles.headerView}>
          <Text style={styles.txt}>{title}</Text>
          {isProfile && (
            <View>
              <Text style={styles.subHead}>{name}</Text>
              <TouchableOpacity onPress={toSignIn}>
                <Image style={styles.image} source={IcProf} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  hdr: {
    height: 100,
    width: 435,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 0,
    top: -2,
    right: 5,
  },

  back: {
    marginLeft: 22,
    borderRadius: 10,
  },

  imageb: {width: 40, height: 40, left: 3},

  // header2: {
  //   paddingVertical: 20,
  //   flexDirection: 'row',
  //   flexGrow: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  // logo2: {
  //   width: 90,
  //   height: 90,
  // },

  headerView: {
    paddingLeft: 40,
    paddingTop: -9,
  },

  txt: {
    fontStyle: 'normal',
    // fontWeight: 500,
    fontSize: 20,
    color: 'white',
  },

  subHead: {
    fontStyle: 'normal',
    // fontWeight: 300,
    fontSize: 13,
    lineHeight: 24,
    color: 'white',
  },

  image: {
    position: 'absolute',
    bottom: -7,
    height: 60,
    width: 60,
    borderRadius: 60,
    left: 290,
  },

  // image2: {
  //   width: 60,
  //   height: 60,
  //   borderRadius: 60,
  // },

  // image1: {
  //   width: 60,
  //   height: 60,
  //   borderRadius: 60,
  // },
});

// {isHeader && (
//   <View style={styles.header2}>
//     <Gap width={80} />
//     {/* <Image source={logo2} style={styles.logo2}/> */}
//     <Gap width={170} />
//     <TouchableOpacity onPress={toSignIn}>
//       <Image style={styles.image2} source={IcProf} />
//     </TouchableOpacity>
//   </View>)}

{
  /* <Gap width={90} />
        {isAbout && (
          <View>
            <TouchableOpacity onPress={toSignIn}>
              <Image style={styles.image1} source={IcProf} />
            </TouchableOpacity>
          </View>
        )} */
}

{
  /* <Text style={styles.subHead}>{name}</Text> */
}
