import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView, Animated} from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%', //for full screen
        height: '100%', //for full screen
        backgroundColor: 'rgba(31, 31, 31, 1)',
        alignContent:'center'
    }, 
    smallcontainer: {
        flex:1,
        alignContent:'center'
    },
    logoWithTextTop:{
        position: 'absolute',
        width: '70%',
        height: '22%',
        top: -160,
        left: 100,
        resizeMode: 'contain',
        width: '70%',
    },
    textStyle0: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'mistyrose',
    },
    textStyle1: {
     fontSize: 12,
     fontWeight: 'bold',
     color: 'mistyrose',
     },
     randoWorkouts:{
        width: '100.1%',
        height: 270,
        borderWidth: 1,
        borderRadius:10,
        position:'absolute',
        marginTop:-4,
        opacity:0.7
    },
    customWorkouts:{
      width: '100.1%',
      height: 275,
      borderWidth: 1,
      borderRadius:10,
      position:'relative',
      marginTop:269,
      opacity:0.7
    },
    cardio:{
        width: '100.1%',
        height: 260,
        borderWidth: 1,
        borderRadius:10,
        position:'relative',
        marginTop:3,
        opacity:0.68,
        resizeMode:'center'
    },
    challenges:{
        width: '49.7%',
        height: 270.5,
        borderWidth: 1,
        marginTop:2,
        right:-.2,
        borderRadius:10,
        position:'relative',
        opacity:0.7,
    },
    stretching:{
        width: '49.7%',
        height: 270,
        borderWidth: 1,
        marginTop:2,
        borderRadius:10,
        position:'relative',
        opacity:0.6,
    },
 })

const MainScreen = () =>{
    return (
        <View style={styles.container} >
            <ScrollView scrollEventThrottle={16}>
                <Image source = {require('../img/logoWithText.png')} style = {styles.logoWithTextTop}/>
                <Image blurRadius = {2} source = {require('../img/randoWorkouts.jpg')} style = {styles.randoWorkouts}/>
                <View style={{position: 'absolute', top: 115, left: 20, right: 0, bottom: 0, alignItems: 'center'}}>
                     <Text style={styles.textStyle0}>Random Workouts</Text>
                     <Text style={styles.textStyle1}>Personalized training based on your preferences</Text>
                     </View>
                 <Image blurRadius = {1} source = {require('../img/customWorkouts.jpg')} style = {styles.customWorkouts}/>
                 <View style={{position: 'absolute', top: 405, left: 10, right: 0, bottom: 0, alignItems: 'center'}}>
                     <Text style ={styles.textStyle0}>Customized Workouts</Text>
                     <Text style = {styles.textStyle1}>Work out how you want when you want</Text>
                </View>
                <Image blurRadius = {1} source = {require('../img/lifestyle.jpg')} style = {styles.cardio}/>
                <View style={{position: 'absolute', top: 650, left: 0, right: 0, bottom: 0, alignItems: 'center'}}>
                        <Text style ={styles.textStyle0}>Cardio</Text>
                        <Text style = {styles.textStyle1}>Whenever, wherever</Text>
                </View>
                <View style ={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Image blurRadius = {1} source = {require('../img/stretching.jpeg')} style = {styles.stretching}/>
                    <Image blurRadius = {1} source = {require('../img/challenges.jpg') } style = {styles.challenges}/>
                </View>
                <View style={{position: 'absolute', top: 910, left: 0, right: 210, bottom: 0, alignItems: 'center'}}>
                        <Text style ={styles.textStyle0}>Stretches</Text>
                        <Text style = {styles.textStyle1}>Improve your flexibility</Text>
                </View>
                <View style={{position: 'absolute', top: 910, left: 210, right: 0, bottom: 0, alignItems: 'center'}}>
                        <Text style ={styles.textStyle0}>Challenges</Text>
                        <Text style = {styles.textStyle1}>Test your abilites</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default MainScreen;