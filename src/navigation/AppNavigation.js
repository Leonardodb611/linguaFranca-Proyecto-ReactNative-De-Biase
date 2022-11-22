import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import IndexScreen from '../screens/IndexScreen.js'
import ProfileScreen from '../screens/ProfileScreen.js'
import GameScreen from '../screens/GameScreen.js'
import Footer from '../components/Footer.js'

const Stack = createNativeStackNavigator()

const AppNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
                headerShown: false
        }}>
            <Stack.Screen name='Index' component={IndexScreen} options={{ title: 'Inicio' }} />
            <Stack.Screen name='Profile' component={ProfileScreen} options={{ title: 'Perfil' }} />
            <Stack.Screen name='Game' component={GameScreen} options={{ title: 'Games' }} />
        </Stack.Navigator>
        <Footer />
    </NavigationContainer>
)

export default AppNavigation

const styles = StyleSheet.create({
   
})