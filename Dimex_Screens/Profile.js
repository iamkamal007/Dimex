
import React, { useState, createRef } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Dimensions,
} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Loader from './Components/Loader';


var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const RegisterScreen = (props) => {
    const [userLastName, setUserLastName] = useState('');
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const [userPassword, setUserPassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [
        isRegistraionSuccess,
        setIsRegistraionSuccess
    ] = useState(false);

    const UsernameInputRef = createRef();
    const PasswordInputRef = createRef();
    const ConfirmPasswordInputRef = createRef();
    const EmailInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!userLastName) {
            alert('Please fill Last Name');
            return;
        }
        if (!username) {
            alert('Please fill name');
            return;
        }
        if (!userPassword) {
            alert('Please fill password');
            return;
        }
        if (!userConfirmPassword) {
            alert('Please fill confirm password');
            return;
        }
        if (!userEmail) {
            alert('Please fill Password');
            return;
        }
        //Show Loader
        setLoading(true);

    };
    if (isRegistraionSuccess) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                }}>

                <Text style={styles.successTextStyle}>
                    Registration Successful
        </Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('LoginScreen')}>
                    <Text style={styles.buttonTextStyle}>Login Now</Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                {/* <Loader loading={loading} /> */}

                <View style={{
                    width: deviceWidth, height: deviceHeight / 6,
                    // width: '100%', height: '21%', 
                    backgroundColor: '#FFD700',
                    // borderBottomStartRadius: 90, borderBottomEndRadius: 90,
                }} >

                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, marginLeft: 20, marginTop: 15, }}>My Profile</Text>


                        <View>
                            <Image source={require('./Pay2mate/Ellipse32.jpg')}
                                style={{
                                    width: 165, height: 165,
                                    resizeMode: 'contain', marginTop: 70,
                                    marginLeft: -40,
                                }} />

                            <Icon
                                name='camera'
                                size={20}
                                color={'black'}
                                style={{ marginTop: -160, marginLeft: -10 }}
                            />
                        </View>


                    </View>
                    <View style={{ marginTop: 0, marginLeft: 0 }}>


                    </View>

                </View>
                <View style={{ alignItems: 'center' }}>

                </View>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        flex: 2
                    }}>
                    <KeyboardAvoidingView enabled>

                        <View style={{ flexDirection: 'row', marginLeft: 35, marginTop: 180 }}>

                            <View>
                                <Image source={require('./Pay2mate/names.png')}
                                    style={{
                                        width: 20, height: 20,
                                        resizeMode: 'contain',
                                    }} />
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>First Name</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <TextInput
                                    style={{
                                        color: '#000',
                                        borderBottomWidth: 1,
                                        borderRadius: 0,
                                        borderColor: '#dadae8',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        marginStart: 30
                                    }}
                                    onChangeText={(Username) => setUsername(Username)}
                                    underlineColorAndroid="#f000"
                                    placeholder="Enter Your Name                                              "
                                    placeholderTextColor="#b4b4b4"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 35, marginTop: 20 }}>
                            <View>
                                <Image source={require('./Pay2mate/names.png')}
                                    style={{
                                        width: 20, height: 20,
                                        resizeMode: 'contain',
                                    }} />
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>Last Name</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <TextInput
                                    style={{
                                        color: '#000',
                                        borderBottomWidth: 1,
                                        borderRadius: 0,
                                        borderColor: '#dadae8',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        marginStart: 30
                                    }}
                                    onChangeText={(Username) => setUsername(Username)}
                                    underlineColorAndroid="#f000"
                                    placeholder="Enter Your Last Name                                     "
                                    placeholderTextColor="#b4b4b4"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 35, marginTop: 20 }}>
                            <View>
                                <Icon
                                    name='envelope-square'
                                    size={20}
                                    color={'black'}
                                />
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>Email Address</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <TextInput
                                    style={{
                                        color: '#000',
                                        borderBottomWidth: 1,
                                        borderRadius: 0,
                                        borderColor: '#dadae8',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        marginStart: 30
                                    }}
                                    onChangeText={(Username) => setUsername(Username)}
                                    underlineColorAndroid="#f000"
                                    placeholder="Enter Your Email                                               "
                                    placeholderTextColor="#b4b4b4"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                />
                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', marginLeft: 35, marginTop: 20 }}>
                            <View>
                                <Icon
                                    name='calendar'
                                    size={20}
                                    color={'black'}
                                />
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>Date of Birth</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <TextInput
                                    style={{
                                        color: '#000',
                                        borderBottomWidth: 1,
                                        borderRadius: 0,
                                        borderColor: '#dadae8',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        marginStart: 30
                                    }}
                                    onChangeText={(Username) => setUsername(Username)}
                                    underlineColorAndroid="#f000"
                                    placeholder="Enter Your DOB                                                 "
                                    placeholderTextColor="#b4b4b4"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 35, marginTop: 20 }}>

                            <View style={{ marginLeft: 0 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>Gender</Text>
                            </View>
                            <View style={{ marginStart: 240 }}>
                                <Icon
                                    name='caret-down'
                                    size={20}
                                    color={'black'}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <TextInput
                                    style={{
                                        color: '#000',
                                        borderBottomWidth: 1,
                                        borderRadius: 0,
                                        borderColor: '#dadae8',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        marginStart: 30
                                    }}
                                    onChangeText={(Username) => setUsername(Username)}
                                    underlineColorAndroid="#f000"
                                    placeholder="Enter Your Gender                                            "
                                    placeholderTextColor="#b4b4b4"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                />
                            </View>
                        </View>

                        {errortext != '' ? (
                            <Text style={styles.errorTextStyle}>
                                {errortext}
                            </Text>
                        ) : null}


                        <TouchableOpacity
                            style={styles.buttonStyle}
                            activeOpacity={0.5}
                            onPress={handleSubmitPress}>
                            <Text style={styles.buttonTextStyle}>LogOut</Text>

                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={handleSubmitPress}
                                onPress={() => props.navigation.navigate('LoginScreen')}>
                                <Text
                                    style={styles.registerTextStyle}
                                    onPress={handleSubmitPress}
                                    onPress={() => navigation.navigate('LoginScreen')}
                                >
                                    Change Password
                                </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
export default RegisterScreen;

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 35,
        marginLeft: 35,
        marginRight: 35,
    },
    buttonStyle: {
        backgroundColor: '#FFD700',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#57d2a5',
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 40,
        marginBottom: 150,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 8,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: '#000',
        paddingLeft: 0,
        paddingRight: 15,
        borderBottomWidth: 1,
        borderRadius: 0,
        borderColor: '#dadae8',
        marginBottom: -10,
        marginTop: -35
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    successTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
    },
    registerTextStyle: {
        color: '#FFD700',
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 14,
        alignSelf: 'center',
        paddingTop: 15,
    },
});

