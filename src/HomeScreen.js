import React, { useState } from 'react';
import { Text, Input } from 'react-native-elements';
import { View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {

    return (
        <View style={styles.viewContainer}>
            <LinearGradient
                style={styles.gradiantContainer}
                start={{ x: 0.1, y: 0.2 }}
                end={{ x: 0.9, y: 0.9 }}
                colors={['#b02e46', '#b02e46', '#d55d73']} >
                < View style={{ marginLeft: 10 }}><Text style={styles.textIndex}>INDEX.</Text></View>
                <View style={styles.headericon} >
                    <TouchableOpacity>
                        <FontAwesome5 name="shopping-basket" size={25} color="white" />

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="menu" size={30} color="white" />

                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <View style={styles.viewcategory}>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 18 }}>All Categories</Text>
                </View>

                <View style={styles.viewcatinner}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.viewC}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/meat.png')}
                                />

                            </TouchableOpacity>
                            <Text>Meat</Text>
                        </View>
                        <View style={styles.viewC}>

                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/drink.png')}
                                />

                            </TouchableOpacity>
                            <Text>Drink</Text>
                        </View>
                        <View style={styles.viewC}>

                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/veg.png')}
                                />

                            </TouchableOpacity>
                            <Text>Veges</Text>
                        </View>
                        <View style={styles.viewC}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/eggs.jpg')}
                                />

                            </TouchableOpacity>
                            <Text>Eggs</Text>
                        </View>
                        <View style={styles.viewC}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/fruits.png')}
                                />

                            </TouchableOpacity>
                            <Text>Fruits</Text>
                        </View>
                        <View style={styles.viewC}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/crockery.jpg')}
                                />

                            </TouchableOpacity>
                            <Text>Crockery</Text>
                        </View>

                    </ScrollView>
                </View>
                <View style={styles.viewMore}>
                    <TouchableOpacity>
                        <Text> View More</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.viewtopProduct}>
                <View style={styles.viewtopProductText}>
                    <Text style={styles.headText}>
                        Top Products
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.headText}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewproducts}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.cardproducts}>
                            <Image
                                source={require('../assets/sample.png')}
                            />
                            <Text> RS: 100</Text>

                            <TouchableOpacity>
                                <Text> Buy</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.cardproducts}>
                            <Image
                                source={require('../assets/sample.png')}
                            />
                            <Text> RS: 100</Text>

                            <TouchableOpacity>
                                <Text> Buy</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.cardproducts}>
                            <Image
                                source={require('../assets/sample.png')}
                            />
                            <Text> RS: 100</Text>

                            <TouchableOpacity>
                                <Text > Buy</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.cardproducts}>
                            <Image
                                source={require('../assets/sample.png')}
                            />
                            <Text> RS: 100</Text>

                            <TouchableOpacity>
                                <Text> Buy</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.cardproducts}>
                            <Image
                                source={require('../assets/sample.png')}
                            />
                            <Text> RS: 100</Text>

                            <TouchableOpacity>
                                <Text > Buy</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.cardproducts}>
                            <Image
                                source={require('../assets/sample.png')}
                            />
                            <Text> RS: 100</Text>

                            <TouchableOpacity>
                                <Text> Buy</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>

                </View>

            </View>

            <View style={styles.viewtopProduct}>
                <View style={styles.viewtopProductText}>
                    <Text style={styles.headText}>
                        New Products
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.headText}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewproducts}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.cardproducts}>
                            <Image
                                source={require('../assets/sample.png')}
                            />
                            <Text> RS: 100</Text>

                            <TouchableOpacity>
                                <Text> Buy</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.cardproducts}>
                            <Image
                                source={require('../assets/sample.png')}
                            />
                            <Text> RS: 100</Text>

                            <TouchableOpacity>
                                <Text> Buy</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.cardproducts}>
                            <Image
                                source={require('../assets/sample.png')}
                            />
                            <Text> RS: 100</Text>

                            <TouchableOpacity>
                                <Text > Buy</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.cardproducts}>
                            <Image
                                source={require('../assets/sample.png')}
                            />
                            <Text> RS: 100</Text>

                            <TouchableOpacity>
                                <Text> Buy</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.cardproducts}>
                            <Image
                                source={require('../assets/sample.png')}
                            />
                            <Text> RS: 100</Text>

                            <TouchableOpacity>
                                <Text > Buy</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.cardproducts}>
                            <Image
                                source={require('../assets/sample.png')}
                            />
                            <Text> RS: 100</Text>

                            <TouchableOpacity>
                                <Text> Buy</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>

                </View>

            </View>

        </View >
    );
};

HomeScreen.navigationOptions = () => {
    return {
        header: null
    }
};

const styles = StyleSheet.create({
    viewContainer: {

        height: hp('100 % '),
        width: wp('100%'),
        backgroundColor: '#f4f4f4'

    },
    gradiantContainer: {
        marginTop: 20,
        height: hp('7%'),
        width: wp('100%'),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'

    },
    headericon: {
        flexDirection: 'row',
        width: 150,
        // backgroundColor: 'black',
        justifyContent: 'space-evenly'
    },
    textIndex: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    viewcategory: {
        backgroundColor: '#f5f5f5',
        height: hp('22%'),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 10
    },
    viewC: {
        backgroundColor: 'white',
        height: 70,
        width: 70,
        borderRadius: 50,
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginRight: 10

    },
    viewcatinner: {
        flexDirection: 'row',
        marginTop: 20,
        width: wp('95%'),
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center'

    },
    viewMore: {
        marginTop: 20,
        width: wp('90%'),
        alignItems: 'flex-end',
        alignSelf: 'center',
        alignContent: 'center'
    },
    viewtopProduct: {
        marginTop: 30,
        width: wp('90%'),
        height: hp('30%'),
        alignSelf: 'center',
    },
    viewtopProductText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('80%'),

    },
    viewproducts: {
        flexDirection: 'row',
        height: hp('25%'),
        width: wp('90%'),
        alignSelf: 'center',
        alignContent: 'center'
    },
    cardproducts: {
        marginTop: 1,
        height: hp('20%'),
        width: wp('20%'),
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'white',
        elevation: 10,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    headText: {
        fontSize: 18,
        fontWeight: 'bold'
    }

});


export default HomeScreen;

