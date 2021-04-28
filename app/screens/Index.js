import React, {Component} from "react";
import {View, Text, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from "react-native";
import Svg,{Image,Circle,ClipPath} from "react-native-svg";

import Animated, {Easing} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
 
const DismissKeyboard= ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)
const {Value,event,block,cond,eq,set,Clock,startClock,stopClock,debug,timing,clockRunning,interpolate,Extrapolate, concat} = Animated
const {width,height} = Dimensions.get('window');

Keyboard.dismiss();
 
function runTiming(clock, value, dest) {
   const state = {
     finished: new Value(0),
     position: new Value(0),
     time: new Value(0),
     frameTime: new Value(0)
   };
    const config = {
     duration: 1000,
     toValue: new Value(0),
     easing: Easing.inOut(Easing.ease)
   };
    return block([
     cond(clockRunning(clock), 0, [
       set(state.finished, 0),
       set(state.time, 0),
       set(state.position, value),
       set(state.frameTime, 0),
       set(config.toValue, dest),
       startClock(clock)
     ]),
     timing(clock, state, config),
     cond(state.finished, debug('stop clock', stopClock(clock))),
     state.position
   ]);
 }
 
class LoginScreen extends Component {
   constructor(){
       super()
 
       this.buttonOpacity = new Value(1)
 
       this.onStateChange = event([
           {
               nativeEvent:({state})=>block([
                   cond(eq(state,State.END),set(this.buttonOpacity,runTiming(new Clock(), 1, 0)))])
           }
       ]);
 
       this.onCloseState = event([
           {
               nativeEvent:({state})=>block([
                   cond(eq(state,State.END),set(this.buttonOpacity,runTiming(new Clock(), 0, 1)))])
           }
       ]);
 
       this.buttonY = interpolate(this.buttonOpacity,{
           inputRange:[0,1],
           outputRange:[100,0],
           extrapolate: Extrapolate.CLAMP
       });
 
       this.bgY = interpolate(this.buttonOpacity,{
           inputRange:[0,1],
           outputRange:[-height/3 - 50,0],
           extrapolate: Extrapolate.CLAMP
       });
 
       this.textInputZindex = interpolate(this.buttonOpacity,{
           inputRange:[0,1],
           outputRange:[1,-1],
           extrapolate: Extrapolate.CLAMP
       });
 
       this.textInputY = interpolate(this.buttonOpacity,{
           inputRange:[0,1],
           outputRange:[0,100],
           extrapolate: Extrapolate.CLAMP
       });
 
       this.textInputOpacity = interpolate(this.buttonOpacity,{
           inputRange:[0,1],
           outputRange:[1,0],
           extrapolate: Extrapolate.CLAMP
       });
 
       this.rotateCross = interpolate(this.buttonOpacity,{
           inputRange:[0,1],
           outputRange:[0,360],
           extrapolate: Extrapolate.CLAMP
       });
 
   }
   render() {
       return (
       <DismissKeyboard>
        <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}} behavior="padding" enabled>
            <Animated.View style={{...StyleSheet.absoluteFill, transform:[{translateY: this.bgY}]}}>
                <Svg height={height+50} width={width}>
                <ClipPath id="clip">
                    <Circle
                        r={height+50}
                        cx={width / 2}
                    />
                </ClipPath>
                <Image
                href={require('../img/login.jpg')}
                width={width}
                height={height+50}
                preserveAspectRatio="none"
                clipPath='url(#clip)'
                />
                <Image href={require('../img/LogoWhite.png')}
                width={width}
                height={height-440}
                clipPath='url(#clip)'/>
                </Svg>
            </Animated.View>
            <View style={{height:height/3}}>
  
                <TapGestureHandler onHandlerStateChange={this.onStateChange} >
                <Animated.View
                style={{...indexStyle.button, opacity:this.buttonOpacity, transform: [{translateY: this.buttonY}] }}>
                    <Text style={indexStyle.label}>LOGIN</Text>
                </Animated.View>
                </TapGestureHandler>
  
               <View style={{flexDirection: 'row'}}>
               <Animated.View style={{...indexStyle.subButton, backgroundColor: '#e6e6fa', opacity: this.buttonOpacity, transform:[{
                        translateY: this.buttonY}] }}>
                    <Text style={indexStyle.subLabel1}>G</Text>
                    <Text style={indexStyle.subLabel3}>o</Text>
                    <Text style={indexStyle.subLabel2}>o</Text>
                    <Text style={indexStyle.subLabel1}>g</Text>
                    <Text style={indexStyle.subLabel4}>l</Text>
                    <Text style={indexStyle.subLabel3}>e</Text>
                </Animated.View>
                  
                     <Animated.View style={{...indexStyle.subButton, backgroundColor: '#2E71DC', opacity: this.buttonOpacity, transform:[{
                        translateY: this.buttonY}] }}>
                         <Text style={indexStyle.subLabel}>FACEBOOK</Text>
                     </Animated.View>
               </View>
               <Animated.View style={{ zIndex: this.textInputZindex, opacity: this.textInputOpacity, transform:[{translateY:this.textInputY}], height:height/3,...StyleSheet.absoluteFill, top:null,justifyContent: 'center', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30,}}>
                    <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                        <Animated.View style={indexStyle.closeButton}>
                            <Animated.Text style={{ fontSize: 15, transform:[{rotate:concat(this.rotateCross,'deg')}]  }}>
                                X
                            </Animated.Text>
                        </Animated.View>
                    </TapGestureHandler>
                    <TextInput
                        placeholder="Email"
                        style={indexStyle.input}
                        placeholderTextColor="black"/>
                    <TextInput
                        placeholder="Password"
                        style={indexStyle.input}
                        placeholderTextColor="black"
                        secureTextEntry/>
                    <Animated.View style={indexStyle.secondButton}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>LOGIN</Text>
                    </Animated.View>
               </Animated.View>
            </View>
            </KeyboardAvoidingView>
            </DismissKeyboard> 
            )
   }
}
export default LoginScreen;
 
const indexStyle = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   },
 
   body: {
       fontWeight: 'bold',
       fontSize: 13,
       color: 'white',
   },
 
   button: {
       backgroundColor: 'transparent',
       borderColor:'white',
       borderWidth: 2.25,
       height: 70,
       marginHorizontal: 20,
       borderRadius: 40,
       alignItems: 'center',
       justifyContent: 'center',
       marginVertical: 10,
       shadowOffset:{width:2,height:2},
       shadowColor: 'black',
       shadowOpacity: 0.2,
   },
 
   subButton: {
       flexDirection: 'row',
       backgroundColor: 'white',
       height: 70,
       marginHorizontal: 10,
       borderRadius: 40,
       alignItems: 'center',
       justifyContent: 'center',
       width: '45%',
       shadowOffset:{width:2,height:2},
       shadowColor: 'black',
       shadowOpacity: 0.2,
   },
 
   label: {
       fontSize: 20,
       fontWeight: 'bold',
       color:'white',
   },
 
   subLabel: {
       fontSize: 20,
       fontWeight: 'bold',
       color: 'white',
   },
 
   subLabel1: {
       fontSize: 23,
       fontWeight: 'bold',
       color: '#4285f4',
   },
 
   subLabel2: {
       fontSize: 23,
       fontWeight: 'bold',
       color: '#fbbc05',
   },
 
   subLabel3: {
       fontSize: 23,
       fontWeight: 'bold',
       color: '#ea4335',
   },
 
   subLabel4: {
       fontSize: 23,
       fontWeight: 'bold',
       color: '#34a853',
   },
 
   input: {
       height: 50,
       borderRadius: 25,
       borderWidth: 1.5,
       marginHorizontal: 20,
       paddingLeft: 10,
       marginVertical: 5,
       borderColor: 'rgba(0,0,0,0.2)',
   },
 
   secondButton: {
       backgroundColor: '#fff',
       height: 70,
       marginHorizontal: 20,
       borderRadius: 40,
       alignItems: 'center',
       justifyContent: 'center',
       marginVertical: 10,
       shadowOffset:{width:2,height:2},
       shadowColor: 'black',
       shadowOpacity: 0.2,
   },
 
   closeButton: {
       height: 40,
       width: 40,
       backgroundColor: 'white',
       borderRadius: 20, 
       backgroundColor: 'white',
       alignItems: 'center',
       justifyContent: 'center',
       position: 'absolute',
       top: -20,
       left: width / 2 - 20,
       shadowOffset:{width:2,height:2},
       shadowColor: 'black',
       shadowOpacity: 0.2,
   }
 
})