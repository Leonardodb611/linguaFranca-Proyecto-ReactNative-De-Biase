import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import IndexScreen from '../screens/IndexScreen.js'
import ProfileScreen from '../screens/ProfileScreen.js'
import GameScreen from '../screens/GameScreen.js'
import LocationSelector from '../screens/LocationSelector'
import Footer from '../components/Footer.js'

const Tab = createBottomTabNavigator()

const AppNavigation = () => (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name='Inicio' component={IndexScreen} 
            options={{
                
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="home"  size={30} />
                ),
              }}/> 
            
            <Tab.Screen name='Game' component={GameScreen} options={{
                
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="gamepad-square"  size={30} />
                ),
              }} />
            <Tab.Screen name='location' component={LocationSelector} options={{
                
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="map"  size={30} />
                ),
              }} />
        </Tab.Navigator>
        
    </NavigationContainer>
)

export default AppNavigation

const styles = StyleSheet.create({
   
})

/* <Tab.Screen name='Profile' component={ProfileScreen} options={{
                
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="face-man-profile"  size={30} />
                ),
              }} />
*/