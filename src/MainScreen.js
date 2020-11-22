import React, { useState } from 'react';
import { Text, Input } from 'react-native-elements';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const MainScreen = (props) => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const clearFields = () => {
        setEmail("");
        setPassword("");
        setErrorMessage("");
    }


    return (
        <View style={styles.viewContainer}>
            <LinearGradient
                style={styles.viewContainer}
                start={{ x: 0.1, y: 0.2 }}
                end={{ x: 0.9, y: 0.9 }}
                colors={['#b02e46', '#d55d73']}
            >
                <View style={styles.viewSignupText}>
                    <Text style={styles.textSignup}> SIGN IN</Text>
                </View>

                <View style={styles.viewSigin}>
                    <View style={styles.viewInner}>
                        <Input
                            rightIcon={
                                <MaterialCommunityIcons name="email-variant" size={20} />}
                            placeholder='  Email'
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={Email}
                            onChangeText={(newemail) => { setEmail(newemail) }}
                        />
                        <Input
                            rightIcon={
                                <SimpleLineIcons name="lock" size={20} />
                            }
                            secureTextEntry
                            placeholder='  Password '
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={Password}
                            onChangeText={(newpassword) => { setPassword(newpassword) }}
                            errorMessage={errorMessage} />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.opacityForget}>
                            <Text style={styles.opacityForgetText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.opacityView}>


                        <LinearGradient
                            style={styles.gradientStyle}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0.7, y: 0.9 }}
                            colors={['#b02e46', '#d55d73']}
                        >


                            <TouchableOpacity
                                style={styles.opacityLogin}
                                onPress={() => {
                                    clearFields()
                                    props.navigation.navigate('Home')
                                }}
                            >

                                <AntDesign name="arrowright" size={30} color="white" />

                            </TouchableOpacity>

                        </LinearGradient>
                    </View>



                </View>
                <View style={styles.viewSecond}>
                    <View>
                        <Text style={{ fontWeight: "bold" }, { color: 'white' }}>
                            or Sign in with
                        </Text>
                    </View>
                    <View style={styles.viewGoogle}>
                        <Image
                            style={styles.stretch}
                            source={require('../assets/google.jpg')}
                        />

                        <TouchableOpacity>
                            <Text style={{ fontSize: 16 }, { fontWeight: "bold" }, { color: '#b02e46' }}> Sign in With Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewAccount}>
                        <Text style={{ fontSize: 16 }, { fontWeight: "bold" }, { color: 'white' }}>Don't have account?</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16 }, { fontWeight: "bold" }, { color: 'white' }}> Click Here</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </LinearGradient>

        </View>
    );
};

MainScreen.navigationOptions = () => {
    return {
        header: null
    }
};

const styles = StyleSheet.create({
    viewContainer: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: 'red'
    },

    viewSignupText: {
        marginTop: 50,
        height: 50,
        width: 180,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 10,
        marginBottom: 30,
    },
    viewSigin: {
        height: hp('40%'),
        width: wp('90%'),
        marginTop: hp('1%'),
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 30
    },
    viewInner: {
        marginTop: 10,
        height: hp('15%'),
        width: wp('90%'),

    },
    opacityView: {
        height: 80,
        width: wp('80%'),
        marginTop: hp('5%'),
        borderRadius: 25,
        alignItems: 'flex-end',
        alignSelf: 'center',
        justifyContent: 'center',

    },
    gradientStyle: {
        height: 60,
        width: 60,
        borderRadius: 50,
        elevation: 10,
        alignContent: 'center',
        justifyContent: 'center',

    },
    viewSecond: {
        marginTop: 10,
        height: hp('40%'),
        width: wp('80%'),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    viewGoogle: {
        backgroundColor: 'white',
        marginTop: 10,
        height: 40,
        width: wp('70%'),
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    viewAccount: {
        marginTop: 10,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    opacityLogin: {
        height: 70,
        width: 70,
        borderRadius: 50,
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',

    },


    opacityForget: {
        alignItems: 'flex-end',
        width: wp('80%')
    },
    opacityForgetText: {
        color: "#747474"
    },

    textSignup: {
        fontSize: 20,

        color: 'white'
    },

});


export default MainScreen; 
