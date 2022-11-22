import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


  

const Footer = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.buttom}>
        <View style={styles.footer}>
        
            <Pressable style={styles.Buttons} onPress={()=> {navigation.navigate('Index')}}>
                <Image style={styles.imagen} source={require('../assets/images/home.png')}/>
                <Text style={styles.centerText} >Inicio</Text>
            </Pressable>
            <Pressable style={styles.Buttons} onPress={()=> {navigation.navigate('Profile')}}>
            <Image style={styles.imagen} source={require('../assets/images/user.png')}/>
                <Text style={styles.centerText}>Perfil</Text>
            </Pressable>
            <Pressable style={styles.Buttons} onPress={()=> {navigation.navigate('Game')}}>
            <Image style={styles.imagen} source={require('../assets/images/user.png')}/>
                <Text style={styles.centerText}>Juego</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    Buttons: {
        padding: 10,
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 2,
        marginTop: 2,
        alignItems: 'center'
    },

    centerText: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 12
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
    },

    buttom: {
        justifyContent: 'center',
        height: '6%',
        backgroundColor: '#c1779c'
        
    },

    
    imagen: {
        height: 15,
        width: 15
    }
    
    
})