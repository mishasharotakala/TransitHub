import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { CheckBox } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/Ionicons';

const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);

    const handleSignUp = () => {
        //  Implement sign up logic here
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Phone: ", phone);
        console.log("Password, ", password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.titleInput}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Eg. John Doe"
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.titleInput}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Eg. johndoe@gmail.com"
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.titleInput}>Phone</Text>
            <TextInput
                style={styles.input}
                placeholder="Eg. 1234567890"
                value={phone}
                onChangeText={setPhone}
            />
            <Text style={styles.titleInput}>Password</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Eg. Password123"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={hidePassword}
                />
                {/* <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                    <Icon name={hidePassword ? 'eye-off' : 'eye'} size={20} color="gray"/>
                </TouchableOpacity> */}
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    checked={termsAccepted}
                    onPress={() => setTermsAccepted(!termsAccepted)}
                />
                <Text style={styles.checkboxText}>
                    I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
                </Text>
            </View>
            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

                <Text style={styles.loginLink}>
                    <Text>Have an account? </Text>
                    <Text style={{color: 'steelblue', fontWeight: 'bold'}}>Log In</Text>
                </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6e6e6",
        // padding: wp('5%'),
        justifyContent: "space-between",
    },
    title: {
        fontSize: wp('5%'),
        fontWeight: "bold",
        marginBottom: hp('5%'),
        alignSelf: "center",
        color: "steelblue",
    },
    titleInput: {
        fontSize: 14,
        marginBottom: hp('1%'),
        left: wp('3%'),
        color: "steelblue",
        fontWeight: "bold",
    },
    input: {
        flexDirection: 'row',
        borderColor: "transparent",
        borderRadius: wp('1%'),
        marginBottom: hp('2%'),
        width: wp('60%'),
        alignSelf: "center",
        backgroundColor: "#fff",
        alignItems: "center",
        position: "relative",
        // flex: 1,
        padding: wp('3%'),
        color: "gray",
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,  // Adjust this value as needed
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: hp('2%'),
        width: wp('65%'),
        alignSelf: "center",
        // marginHorizontal: wp('1%'),
    },
    checkboxText: {
        marginLeft: wp('0.001%'),
        fontSize: RFValue(13),
    },
    signUpButton: {
        backgroundColor: "steelblue",
        padding: wp('2%'),
        alignItems: "center",
        borderRadius: wp('1%'),
        marginBottom: hp('2%'),
        width: wp('25%'),
        alignSelf: "center",
    },
    signUpButtonText: {
        color: "#fff",
        fontSize: wp('2.5%'),
        fontWeight: "bold",
    },
    loginLink: {
        textAlign: "center",
        fontSize: RFValue(18),
        color: "black",
        marginBottom: hp('2%'),
    },
});

export default SignUpForm;