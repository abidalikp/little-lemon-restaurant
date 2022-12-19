import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import 'react-native-gesture-handler'

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import WelcomeScreen from './components/Welcome';
import LoginScreen from './components/LoginScreen';

// const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

//<LittleLemonHeader />
export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator
          initialRouteName='Login'
          screenOptions={
            ({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name == 'Welcome') {
                  iconName = focused
                  ? 'home'
                  : 'home-outline'
                } else if (route.name == 'Menu') iconName = 'ios-list'
                else if (route.name == 'Login') {
                  iconName = focused
                  ? 'person'
                  : 'person-outline'
                }
                return <Ionicons name={iconName} color={color} size={size}/>
              },
              tabBarActiveTintColor: 'tomato',
              tabBarShowLabel: false,
              tabBarInactiveTintColor: 'grey',
              headerStyle: { backgroundColor: 'yellow' },
              headerTitleAlign: 'center', 
            })}
          style={styles.container}>
          <Tab.Screen 
            name='Menu'
            component={MenuItems}
          />
          <Tab.Screen 
            name='Welcome'
            component={WelcomeScreen}
            options={{ title: 'Home' }}
          />
          <Tab.Screen 
            name='Login'
            component={LoginScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
/* 
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
});
