
import React, { useState, createRef } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    SafeAreaView,

} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Loader from './Components/Loader';

const LoginScreen = ({ navigation }) => {
    const [Username, setUsername] = useState('true');
    const [Password, setPassword] = useState('true');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');


    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!Username) {
            alert('Please fill Name');
            return;
        }
        if (!Password) {
            alert('Please fill Password');
            return;
        }
        setLoading(true);


    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.mainBody}>

                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        flex: 2,
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}>
                    <View>
                        <KeyboardAvoidingView enabled>

                            <View>
                                <Image
                                    source={require('./Pay2mate/Userss.png')}
                                    style={{
                                        width: '50%',
                                        height: 100,
                                        resizeMode: 'contain',
                                        marginTop: 30,
                                        marginLeft: 100,
                                    }} />
                            </View>

                            <Text style={{ fontWeight: 'bold', fontSize: 27, textAlign: 'center', marginTop: 15 }}>Signup</Text>
                            <Text>{'\n'}</Text>
                            <View style={{
                                flexDirection: 'row',
                                marginLeft: 30,
                                marginTop: 40,
                                borderWidth: 1,
                                borderRadius: 6,
                                textAlign: 'center',
                                height: 70,
                                width: 330,
                                borderColor: '#ddd',
                                alignItems: 'center'
                            }}>

                                <View style={{ marginLeft: 10 }}>
                                    <Icon
                                        name='user'
                                        size={30}
                                        color={'black'}
                                        marginLeft={40}
                                        align
                                    />
                                </View>

                                <View>
                                    <Text style={{ marginLeft: 15, color: '#dcdcdc', fontSize: 14, fontWeight: 'bold' }}>USER NAME</Text>
                                    <Text style={{ marginLeft: 15, fontSize: 15, fontWeight: 'bold' }}>Jane Doe</Text>
                                </View>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                marginLeft: 30,
                                // marginTop: 0,
                                borderWidth: 1,
                                borderRadius: 6,
                                textAlign: 'center',
                                height: 70,
                                width: 330,
                                borderColor: '#ddd',
                                alignItems: 'center'
                            }}>

                                <View style={{ marginLeft: 10 }}>
                                    <Icon
                                        name='mobile'
                                        size={40}
                                        color={'black'}
                                        marginLeft={40}
                                        align
                                    />
                                </View>

                                <View>
                                    <Text style={{ marginLeft: 16, color: '#dcdcdc', fontSize: 14, fontWeight: 'bold' }}>Phone Number</Text>

                                    <Text style={{ marginLeft: 16, fontSize: 15, color: 'black', fontWeight: 'normal' }}>+01</Text>

                                </View>
                                <Text style={{ marginLeft: 15, fontSize: 15, marginTop: 18, marginLeft: -65, color: 'black', fontWeight: '100' }}>(900) 123 45 67</Text>

                                <View style={{ marginLeft: 105 }}>
                                    <Icon
                                        name='check'
                                        size={25}
                                        color={'#3cb371'}
                                        alignItems = {'center'}
                                    />
                                </View>
                            </View>

                            <TouchableOpacity
                                style={styles.button2Style}
                                activeOpacity={0.5}
                                onPress={handleSubmitPress}
                                onPress={() => navigation.navigate('RequestScreen')}>
                                <Text style={{
                                    color: 'black',
                                    paddingVertical: 7,
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}>
                                    Create Your Account</Text>
                            </TouchableOpacity>


                            <Text style={{ textAlign: 'left', marginLeft: 35, marginTop: 150 }} >By creating an account, you agree to our Terms and Conditions.</Text>


                            <View style={{
                                flexDirection: 'row',
                                height: 15,
                                // marginTop: 0,
                                marginLeft: 35,
                                marginRight: 35,
                            }}>
                                <TextInput
                                    style={{
                                        flex: 1,
                                        color: '#000',
                                        paddingLeft: 0,
                                        paddingRight: 15,
                                        borderBottomWidth: 1,
                                        borderRadius: 0,
                                        borderColor: '#dadae8',
                                        // marginBottom: 5,
                                        // marginTop: 0,
                                        // marginBottom: -5
                                    }}
                                    placeholderTextColor="grey"

                                />
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 15, }}>
                                <Text style={{
                                    color: 'grey',
                                    // textAlign: 'center',
                                    fontWeight: 'normal',
                                    fontSize: 14,
                                    marginLeft: 35,

                                }}>Already have an account?</Text>
                                <Text
                                    style={styles.registerTextStyle}
                                    onPress={() => navigation.navigate('RegisterScreen')}>
                                    Sign in
                                </Text>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        alignContent: 'center',
        textAlign: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    button2Style: {
        backgroundColor: '#ffd700',
        borderWidth: 1,
        // color: 'black',
        borderColor: '#ffd700',
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 65,
        marginBottom: 15,
    },
    inputStyle: {
        flex: 1,
        color: '#000',
        paddingLeft: 0,
        paddingRight: 15,
        borderBottomWidth: 1,
        borderRadius: 0,
        borderColor: '#dadae8',
        marginBottom: 1,
        marginTop: -40,
        marginBottom: -5

    },
    registerTextStyle: {
        color: '#66cdaa',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 5,
        // textDecoration: 'underline'   // question 
        textDecorationLine: 'underline'
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});


