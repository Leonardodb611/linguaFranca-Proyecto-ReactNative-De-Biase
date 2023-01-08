import { StyleSheet, Text, View, Pressable, FlatList, Image } from 'react-native'
import { useState } from 'react';
import questions from '../data/questions'
import answer from '../data/answers'
import { useSelector, useDispatch, connect } from 'react-redux'
import { selectedCategory } from '../store/actions/category.actions';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../services/firestore';
// Math.ceil(Math.random()*10)

const GameScreen = () => {

  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()

  console.log(pregunta, 'pregunta')
  const [isStarted, setIsStarted] = useState(false)
  const [game, setGame] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [incorrect, setIncorrect] = useState(false)
  const [pregunta, setPregunta] = useState([])
  const [respuestas, setRespuestas] = useState([])
  let randomNumer = Math.ceil(Math.random()*2)
  
  let content = <View></View>
  let result = <View></View>
  let startScreen = <Pressable style={styles.Buttons} onPress={()=> randomQuestion()}>
                      <Text>Empezar juego</Text>
                    </Pressable>

  const randomQuestion = async () => {
    
    
    console.log(randomNumer)
    dispatch(selectedCategory(randomNumer))
    const question = categories.find(element => element.id == randomNumer)
    let words = answer.find((x) => x.id === randomNumer)
    setPregunta(question)
    setGame(true)
    setIsStarted(true)


    const q = query(collection(db, "preguntas"), where("id", "==", randomNumer));

      const querySnapshot = await getDocs(q);

      
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setRespuestas(doc.data().options)
        console.log(doc.id, " => ", doc.data().question);
      });
}
  const resetGame = () => {
    setCorrect(false)
    setIncorrect(false)
    setGame(false)
    setIsStarted(false)
  }

  const isCorrect = (finalAnswer) => {
    
    if(finalAnswer == 'correct' ){
      setCorrect(true)
      setIncorrect(false)
    }
    else{
      setCorrect(false)
      setIncorrect(true)
    }

  }

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Pressable style={styles.Buttons} onPress={() => isCorrect(item.isValid)} >
              <Text>{item.word}</Text>
      </Pressable>
    </View>
  );

  if(isStarted){
    startScreen = <View></View>
  }

  if(game){
    content =<View style={styles.preguntas}>
          
          <Text>{pregunta.question}</Text>
          <FlatList
            data={respuestas}
            renderItem={Item}
            
          />
          
          </View>
  }

  if(incorrect){
    content =<View>
          
          <Text>Perdiste :c</Text>
          <Pressable style={styles.Buttons} onPress={()=>resetGame()}>
            <Text>Volver a jugar</Text>
          </Pressable>
          </View>
          
          
  }

  if(correct){
    content =
          <View>
          <Text>Ganaste</Text>
          <Pressable style={styles.Buttons} onPress={()=>resetGame()}>
            <Text>Volver a jugar</Text>
            
          </Pressable>
          <Image style={styles.imagen} source={require('../assets/images/winGame.png')}/>
          </View>
          
  }

  return (
    <View style={styles.container}>
      
      {startScreen}
      {content}
      {result}
      
    </View>
  )
}

export default connect()(GameScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efb6d6',
        justifyContent:'center',
        alignItems:'center',
        marginTop: '10%'
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
    preguntas: {
      
      marginTop: '50%'
    }
})