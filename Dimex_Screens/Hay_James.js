
import * as React from 'react';
import { useState, createRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Dimensions,
    Image,
    StatusBar,
    SafeAreaView,
} from 'react-native';

import 'react-native-gesture-handler';
import TabNav from './Screen/TabNav';


var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;



export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#ffffff',
                }}>

                    <View style={{
                        width: deviceWidth, height: deviceHeight / 5,
                        backgroundColor: '#FFD700',
                    }}>

                        <View style={{ flexDirection: 'row', }}>

                            <View style={{ marginLeft: 20, marginTop: 15 }}>
                                <TouchableOpacity>
                                    {/* <Icon
                                        name='bars'
                                        size={30}
                                        color={'black'}
                                        // backgroundColor={'white'}
                                    /> */}

                                    <Image
                                        source={require('./Pay2mate/dot.png')}
                                        style={{ width: 24, height: 24, resizeMode: 'cover', marginTop: 5, marginStart: 5, backgroundColor: '#ffebcd' }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View>
                                <Text style={{ fontSize: 19, marginLeft: 25, color: 'black', fontWeight: 'bold', marginTop: 15 }}>Hay, James!</Text>
                            </View>

                            <View style={{}}>
                                <TouchableOpacity>
                                    {/* <Icon
                                        name='bell'
                                        size={25}
                                        color={'black'}
                                    /> */}

                                    <Image source={require('./Pay2mate/notification.png')}
                                        style={{
                                            width: 25,
                                            borderRadius: 100,
                                            resizeMode: 'contain',
                                            justifyContent: 'center',
                                            marginTop: -28,
                                            marginLeft: 160,
                                        }}
                                    />
                                </TouchableOpacity>

                            </View>

                            <View style={{
                                marginLeft: -12,
                                marginTop: 20,
                                borderWidth: 1,
                                borderRadius: 100,
                                height: 15,
                                width: 20,
                                borderColor: 'red',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'red'
                            }}>
                                <Text style={{
                                    fontSize: 10,
                                    color: 'white',
                                    fontWeight: '900'
                                }}>10</Text>
                            </View>
                        </View>

                        <TouchableOpacity>
                            <View>
                                <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -30, fontWeight: 'bold' }}>Create</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: 20, }}>

                            <TouchableOpacity>
                                <View>
                                    <Text style={{ fontSize: 21, marginLeft: 20, color: 'grey', fontWeight: 'bold' }}>Space</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View>
                                    <Text style={{ fontSize: 21, marginLeft: 85, color: 'black', fontWeight: 'bold', borderBottomWidth: 3, borderRadius: 9 }}>Time</Text>
                                </View>
                            </TouchableOpacity>

                            <View>
                                <Text style={{ fontSize: 21, marginLeft: 80, color: 'grey', fontWeight: 'bold' }}>Contact</Text>
                            </View>


                        </View>
                    </View>
                    <ScrollView style={{ flex: 2 }}>

<View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 20 }}>

    <View>
        <Text style={{ color: '#b4b4b4', fontWeight: 'bold', fontSize: 17 }}>Name Your Dimension</Text>
    </View>

    <View>
        <Text style={{ color: 'red', fontWeight: 'bold', marginLeft: 4 }}>*</Text>
    </View>

</View>


                        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>

                            <View>

                                <TextInput
                                    style={{
                                        color: '#000',
                                        borderBottomWidth: 1,
                                        borderRadius: 0,
                                        borderColor: '#dadae8',
                                        fontSize: 18,
                                        fontWeight: 'bold'

                                    }}
                                    onChangeText={(Username) => setUsername(Username)}
                                    underlineColorAndroid="#f000"
                                    placeholder="Enter Name Your Dimension                       "
                                    placeholderTextColor="black"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                />

                            </View>

                            <View style={{ marginLeft: -20, marginTop: 17 }}>
                                <Icon
                                    name='info-circle'
                                    size={25}
                                    color={'grey'}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>

                            <View>
                                <Text style={{ color: '#b4b4b4', fontWeight: 'bold', fontSize: 17 }}>Create a Time Contact</Text>

                                <TextInput
                                    style={{
                                        color: '#000',
                                        borderBottomWidth: 1,
                                        borderRadius: 0,
                                        borderColor: '#dadae8',
                                        fontWeight: 'bold',
                                        fontSize: 18

                                    }}
                                    onChangeText={(Username) => setUsername(Username)}
                                    underlineColorAndroid="#f000"
                                    placeholder="Select                                                                "
                                    placeholderTextColor="black"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                />
                            </View>
                            <View style={{ marginTop: 20, marginLeft: -10, marginTop: 30 }}>
                                <Icon
                                    name='caret-down'
                                    size={25}
                                    color={'black'}
                                />
                            </View>

                        </View>

                        <View style={{ marginStart: 20, marginTop: 15 }}>
                            <Text style={{ color: '#b4b4b4', fontWeight: 'bold', fontSize: 17 }}>Select Contact</Text>
                        </View>


                        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>

                            <View style={{ justifyContent: 'center',alignItems: 'center',textAlign: 'center',}}>
                                <Text style={{
                                    color: 'white',
                                    marginLeft: 0,
                                    marginTop: 4,
                                    borderWidth: 1,
                                    borderRadius: 100,
                                    height: 35,
                                    width: 35,
                                    borderColor: '#000000',
                                    backgroundColor: '#000000',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 17
                                }}>J</Text>
                            </View>

                            <View>
                                <Text style={{
                                    color: 'white',
                                    marginLeft: -5,
                                    marginTop: 5,
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    height: 35,
                                    width: 35,
                                    borderColor: '#778899',
                                    backgroundColor: '#2f4f4f',
                                    textAlign: 'center',
                                    fontSize: 17

                                }}>A</Text>
                            </View>

                            <View>
                                <Text style={{
                                     color: 'white',
                                     marginLeft: -5,
                                     marginTop: 5,
                                     borderWidth: 1,
                                     borderRadius: 20,
                                     height: 35,
                                     width: 35,
                                     borderColor: '#a9a9a9',
                                     backgroundColor: '#a9a9a9',
                                     textAlign: 'center',
                                     fontSize: 17

                                }}>K</Text>
                            </View>

                            <View>
                                <Text style={{
                                     color: 'white',
                                     marginLeft: -5,
                                     marginTop: 5,
                                     borderWidth: 1,
                                     borderRadius: 20,
                                     height: 35,
                                     width: 35,
                                     borderColor: '#deb887',
                                     backgroundColor: '#deb887',
                                     textAlign: 'center',
                                     fontSize: 17

                                }}>P</Text>
                            </View>

                            <View style={{
                                marginLeft: 130,
                                marginTop: 0,
                                borderWidth: 1,
                                borderRadius: 30,
                                height: 40,
                                width: 95,
                                borderColor: 'black',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 17,
                                    color: 'black',
                                    fontWeight: '900'
                                }}>Contact</Text>
                            </View>
                        </View>
                        <Text style={{ borderBottomWidth: 1, borderColor: '#dadae8', marginTop: -10 , marginEnd: 25, marginStart: 20}}></Text>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginLeft: 20, marginTop: 20 }}>Advanced Settings</Text>

                            <View style={{ marginTop: 20, marginLeft: 180 }}>
                                <Icon
                                    name='caret-down'
                                    size={25}
                                    color={'black'}
                                />
                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>

                            <View>
                                <Text style={{ color: '#b4b4b4', fontWeight: 'bold', fontSize: 17 }}>Date And Time</Text>

                                <TextInput
                                    style={{
                                        color: '#000',
                                        borderBottomWidth: 1,
                                        borderRadius: 0,
                                        borderColor: '#dadae8',
                                        fontWeight: 'bold',
                                        fontSize: 18

                                    }}
                                    onChangeText={(Username) => setUsername(Username)}
                                    underlineColorAndroid="#f000"
                                    placeholder="10:30, Tue 5th Dec                                          "
                                    placeholderTextColor="black"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                />

                            </View>

                            <View style={{ marginTop: 30, marginLeft: -20 }}>
                                <Icon
                                    name='calendar'
                                    size={25}
                                    color={'grey'}
                                />
                            </View>

                        </View>



                        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>

                            <View>
                                <Text style={{ color: '#b4b4b4', fontWeight: 'bold', fontSize: 17 }}>Select Repeat</Text>

                                <TextInput
                                    style={{
                                        color: '#000',
                                        borderBottomWidth: 1,
                                        borderRadius: 0,
                                        borderColor: 'red',
                                        fontWeight: 'bold',
                                        fontSize: 18

                                    }}
                                    onChangeText={(Username) => setUsername(Username)}
                                    underlineColorAndroid="#f000"
                                    placeholder="Select Repeat*                                                 "
                                    placeholderTextColor="red"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                />
                            </View>

                            <View style={{ marginTop: 30, marginLeft: -20 }}>
<Icon
    name='caret-down'
    size={25}
    color={'black'}
/>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 20 }}>
                            <View style={{ marginTop: -5, }}>
                                <Icon
                                    name='caret-up'
                                    size={25}
                                    color={'red'}
                                />
                            </View>
                            <Text style={{ color: 'red', marginLeft: 10, }}>Select repeat required</Text>
                        </View>


                        <View>
                            <Text style={{ color: '#b4b4b4', fontWeight: 'bold', fontSize: 17, marginTop: 25, marginLeft: 20 }}>Select an Option</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>

                            <View style={{
                                marginLeft: 20,
                                marginTop: 20,
                                borderWidth: 1,
                                borderRadius: 30,
                                height: 40,
                                width: 95,
                                borderColor: 'grey',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#b4b4b4'
                            }}>

                                <Text style={{
                                    fontSize: 17,
                                    color: 'white',
                                    fontWeight: '900',
                                    marginLeft: -5
                                }}>
                                    <Icon
                                        name='check'
                                        size={15}
                                        color={'white'}
                                    /> {'\t'}Public</Text>
                            </View>

                            <View style={{
                                marginLeft: 20,
                                marginTop: 20,
                                borderWidth: 1,
                                borderRadius: 30,
                                height: 40,
                                width: 120,
                                borderColor: 'grey',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#ffffff'
                            }}>

                                <Text style={{
                                    fontSize: 17,
                                    color: 'grey',
                                    fontWeight: '900',
                                }}>
                                    In-Networks</Text>
                            </View>

                            <View style={{
                                marginLeft: 20,
                                marginTop: 20,
                                borderWidth: 1,
                                borderRadius: 30,
                                height: 40,
                                width: 95,
                                borderColor: 'grey',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#ffffff'
                            }}>

                                <Text style={{
                                    fontSize: 17,
                                    color: 'grey',
                                    fontWeight: '900',
                                }}>
                                    Private</Text>
                            </View>

                        </View>

                        <TouchableOpacity
                            style={styles.button2Style}
                            activeOpacity={0.5}
                            // onPress={handleSubmitPress}
                            onPress={() => navigation.navigate('RequestScreen')}>
                            <Text style={{
                                color: 'black',
                                paddingVertical: 7,
                                fontSize: 16,
                                fontWeight: 'bold'
                            }}>
                                Save</Text>
                        </TouchableOpacity>

                        <TabNav />
                    </ScrollView>
                </View>
            </SafeAreaView>
        </NavigationContainer>
    );
}





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
    Text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
});
