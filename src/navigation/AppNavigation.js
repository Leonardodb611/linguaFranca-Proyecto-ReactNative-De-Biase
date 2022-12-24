import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs'



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
            <Tab.Screen name='Inicio' component={IndexScreen}  />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{ title: 'Perfil' }} />
            <Tab.Screen name='Game' component={GameScreen} options={{ title: 'Games' }} />
            <Tab.Screen name='location' component={LocationSelector} options={{ title: 'location' }} />
        </Tab.Navigator>
        
    </NavigationContainer>
)

export default AppNavigation

const styles = StyleSheet.create({
   
})