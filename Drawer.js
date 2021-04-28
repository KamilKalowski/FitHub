import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Block, Text, Button } from 'expo-ui-kit';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack"
import { Ionicons, MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MainScreen from './app/screens/MainScreen';
import Lifestyle from './app/screens/Lifestyle';
import Data from './app/screens/Data';
import UserPrefs from './app/screens/UserPrefs';
import ContactUs from './app/screens/ContactUs'
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({navigation, style}) => {
    return(
    <Animated.View style = {[{flex:1, overflow: 'hidden'}, style]}>
         <Stack.Navigator screenOptions= {{
                headerTransparent : true,
                headerTitle: null,
                 headerLeft:() => (
                <TouchableOpacity hitSlop={{top: 20, left: 20, bottom: 40, right: 40}} 
                    onPress={() => navigation.openDrawer()}>
                    <Image source = {require('./app/img/logoAlone.png')} style = {styles.logoAlone}></Image>
                </TouchableOpacity>
            )
        }}>
            <Stack.Screen name="Home" component={MainScreen} />
            <Stack.Screen name="Lifestyle" component={Lifestyle} />
            <Stack.Screen name="Data" component={Data} />
            <Stack.Screen name="UserPrefs" component={UserPrefs} />
            <Stack.Screen name="Contact" component={ContactUs} />
        </Stack.Navigator>
    </Animated.View>
    );
}

const DrawerContent = props => {
    return (
        <DrawerContentScrollView {...props}>
            <Block flex={0.4} margin={10} >
            <Image source = {require('./app/img/LogoWhite.png')} style = {styles.logo}/>
                <DrawerItem label="Workout"
                    labelStyle={styles.drawerLabel}
                    style={{marginVertical: 5 }}
                    onPress={() => props.navigation.navigate("Home")}
                    icon={() => <MaterialCommunityIcons name="dumbbell" size={24} color="white" />}
                />
                <DrawerItem label="Lifestyle"
                    labelStyle={styles.drawerLabel}
                    style={{marginVertical: 5 }}
                    onPress={() => props.navigation.navigate("Lifestyle")}
                    icon={() => <Ionicons name="leaf-outline" size={24} color="white" />}
                /> 
                <DrawerItem label="Data"
                    labelStyle={styles.drawerLabel}
                    style={{marginVertical: 5 }}
                    onPress={() => props.navigation.navigate("Data")}
                    icon={() => <Feather name="activity" size={24} color="white" />}
                />
                <DrawerItem label="User Preferences"
                    labelStyle={styles.drawerLabel}
                    style={{marginVertical: 5 }}
                    onPress={() => props.navigation.navigate("UserPrefs")}
                    icon={() => <Feather name="user" size={24} color="white" />}
                />
                <DrawerItem
                    label="Contact us"
                    labelStyle={styles.drawerLabel}
                    style={{marginVertical: 6 }}
                    onPress={() => props.navigation.navigate("Contact")}
                    icon={() => <AntDesign name="phone" color="white" size={24} />}
                />

                <Block flex={false}>
                    <DrawerItem
                        label="Logout"
                        labelStyle={styles.drawerLabel}
                        style={{marginVertical: 6 }}
                        icon={() => <AntDesign name="logout" color="white" size={24} />}
                        onPress={() => alert('Are you sure you want to logout?')}
                    />
                </Block>
            </Block>
        </DrawerContentScrollView>
    );
};

export default () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    const scale = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    });
    const borderRadius = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [0, 16],
    });
  
    const animatedStyle = { borderRadius, transform: [{ scale }] };
  
    return (
      <LinearGradient style={{ flex: 1 }} colors={['#E94057', '#4A00E0']}>
        <Drawer.Navigator
          drawerType="slide"
          overlayColor="transparent"
          drawerStyle={styles.drawerStyles}
          sceneContainerStyle={{ backgroundColor: 'transparent' }}
          drawerContent={(props) => {
            setTimeout(() => {
              setProgress(props.progress);
            }, 100);
            return <DrawerContent {...props} />;
          }}>
          <Drawer.Screen name="Screens">
            {props => <Screens {...props} style={animatedStyle} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </LinearGradient>
    );
  };
  
const styles = StyleSheet.create({
    logo:{
        resizeMode: 'contain',
        left: -5,
        marginBottom: 5,
        height: '30%',
        width:'100%'
    },
    logoAlone:{
        height: 50,
        width:90,
        left: 10
    },
        drawerStyles: { flex: 1, width: '63%', backgroundColor: 'transparent' },
        drawerLabel: { color: 'white', marginLeft: -16 },
})