import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import question from '../data/questions'

import { collection, addDoc } from "firebase/firestore";
import {db} from '../services/firestore';
  

 function handleSubmit(evt) {

  const opcionesTotales = []
  question.forEach((categoria) =>{

    const preguntas = {
      id: categoria.id,
      question: categoria.question,
      category: categoria.category,
      options: categoria.options
    }

   
    
    const colecctionref = collection(db, "preguntas")
    const docRef = addDoc(colecctionref, preguntas)
  }
  )
}

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={handleSubmit}> 
      <Text>
        holaaa
        </Text> 
      </Pressable>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efb6d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})