import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.centerText}>BIENVENIDO A LINGUA FRANCA</Text>
      </View>
      <View >
        <Text style={styles.centerText}>Que deseas aprender hoy?</Text>
      </View>
    
      <View style={styles.elements}>
        <Image style={styles.imagen} source={require('../assets/images/logo.png')}/>
        <View style={styles.whatDoYouWant} >
          <Pressable style={styles.Buttons}>
            <Text style={styles.text}>Listening</Text>
          </Pressable>
          <Pressable style={styles.Buttons}>
            <Text style={styles.text}>Writting</Text>
          </Pressable>
        </View>
      </View>

    </View>
  )
}

export default IndexScreen

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#efb6d6',
    justifyContent:'center',
    marginTop: '10%'
  },

  centerText: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25
},
  
  imagen: {
    marginTop: 10,
    marginLeft: -30,
    marginRight: 20
  },

  elements: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '2%'
  },

  Buttons: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 2,
    marginTop: 2,
    alignItems: 'center'
  },

  text: {
    fontSize: 25
  },

  whatDoYouWant:{
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    
  }
  

    
})