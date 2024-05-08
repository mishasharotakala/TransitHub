import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper}>
        <IonIcons name={"arrow-back-circle-outline"} size={30} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
      </View>
      {/*  */}
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  backButtonWrapper: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  textContainer: {
    marginVertical: 100,
    left: 20,
    // fontSize: 20,
    // fontWeight: 'bold',
  },
  headingText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'gray',
  },
})