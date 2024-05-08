import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { Icon } from 'react-native-vector-icons/Icon';
import { CgProfile } from "react-icons/cg";
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/name-removebg.png")} 
      style={styles.logo}
      resizeMode="contain"
      />
    <CgProfile color="black" style={styles.profileIcon}/>
    <Text style={styles.title}>Book. Ride.{'\n'}Go!</Text>
    <Text style={styles.subtitle}>
        Effortless journeys at your fingertips.{'\n'}Explore destinations with ease.
    </Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={[
          styles.loginButtonWrapper, 
          { backgroundColor: colors.primary },
        ]}
        onPress={handleLogin}
        >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.loginButtonWrapper]} >
        <Text style={styles.signUpButton}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

export default HomeScreen

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // 'center
        backgroundColor: 'transparent',
        // flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        height: hp('20%'),
        width: wp('65%'),
        marginBottom: hp('1%'),
  },
    profileIcon: {
        height: hp('15%'),
        width: wp('30%'),
        marginBottom: hp('2%'),
      },
    //   profileIcon: {
    //     height: Platform.OS === 'web' ? hp('5%') : hp('10%'),
    //     width: Platform.OS === 'web' ? wp('15%') : wp('30%'),
    //     marginBottom: Platform.OS === 'web' ? hp('2%') : hp('5%'),
    //   },
      title: {
        fontSize: Platform.OS === 'web' ? 30 : RFValue(40),
        paddingHorizontal: wp('1%'),
        textAlign: 'center',
        color: 'gray',
        marginBottom: hp('3%'),
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'bold',
      },
      subtitle: {
        fontSize: Platform.OS === 'web' ? 15 : RFValue(25),
        textAlign: 'center',
        color: 'steelblue',
        fontWeight: 'medium',
        paddingHorizontal: wp('1%'),
        marginVertical: hp('5%'),
      },
      buttonContainer: {
        marginTop: hp('5%'),
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'black',
        width: wp('30%'),
        minWidth: 350, 
        // width: screenWidth <= 320 ? wp('80%') : wp('30%'),
        // width: Platform.OS === 'web' ? wp('30%') : wp('80%'),
        height: hp('10%'),
        borderRadius: 100,
      },
      loginButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        borderRadius: 100,
      },
      loginButtonText: {
        color: 'white',
        fontSize: Platform.OS === 'web' ? 15 : RFValue(20),
        fontWeight: 'bold',
      },
      signUpButton: {
        color: 'black',
        fontSize: Platform.OS === 'web' ? 15 : RFValue(20),
        fontWeight: 'bold',
      },
});