import { StyleSheet, Text, View, KeyboardAvoidingView, Pressable, TextInput } from 'react-native'
import React, {useState} from 'react'


//Screen en proceso



const LoginScreen = () => {

  const [usuario, onChangeUser] = useState('')
  const [contrasenia, onChangePass] = useState('')


  const handleLogin= (usuario, password) =>{
    
    const auth = getAuth();

    signInWithEmailAndPassword(auth, usuario, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }


 

  return (
      <View
       style={styles.container}>

        <View style={styles.screen}>
              <Text>
                formulario
              </Text>
          <View style={styles.form}>
              <Text>email</Text>
              <TextInput 
              keyboardType='email-address'
              autoCapitalize='none'  style={styles.centerText}
              onChangeText={onChangeUser}
              value={usuario}/>
          </View>
          <View style={styles.form}>
              <Text>password</Text>
              <TextInput 
              secureTextEntry
              autoCapitalize='none' style={styles.centerText}
              onChangeText={onChangePass}
              value={contrasenia}/>
          </View>
              <Pressable style={styles.Buttons} onPress={()=>handleLogin}>
                <Text>holaaaa</Text>
              </Pressable>
        </View>
        

      </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efb6d6',
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
  screen:{
    width: '80%',
    maxWidth: 400,
    padding:12,
    margin:12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10
  },
  form:{
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 2,
    marginTop: 2,
    alignItems: 'center',
    width: 250
  },
  centerText:{
    textAlign:'center'
  }
})