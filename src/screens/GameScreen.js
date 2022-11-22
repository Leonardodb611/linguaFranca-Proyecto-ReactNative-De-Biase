import { StyleSheet, Text, View, Pressable, FlatList, Image } from 'react-native'
import { useState } from 'react';
import questions from '../data/questions'
import answer from '../data/answers'
// Math.ceil(Math.random()*10)





const GameScreen = () => {

  const [isStarted, setIsStarted] = useState(false)
  const [game, setGame] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [incorrect, setIncorrect] = useState(false)
  const [pregunta, setPregunta] = useState([])
  const [respuestas, setRespuestas] = useState([])
  let content = <View></View>
  let result = <View></View>
  let startScreen = <Pressable style={styles.Buttons} onPress={()=> randomQuestion()}>
                      <Text>Empezar juego</Text>
                    </Pressable>

  const randomQuestion = () => {

    const randomNumer = Math.ceil(Math.random()*2)
    let question = questions.find((x) => x.id === randomNumer)
    let words = answer.find((x) => x.id === randomNumer)
    setPregunta(question)
    setRespuestas(words.options)
    setGame(true)
    setIsStarted(true)
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
    content =<View>
          <Text>{pregunta.category}</Text>
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

export default GameScreen

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
    }
})