import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import CategoryReducer from './reducers/category.reducer'
import PreguntasReducer from './reducers/preguntas.reducer'


const RootReducer = combineReducers ({
    categories: CategoryReducer, 
    preguntas: PreguntasReducer
})


export default createStore(RootReducer, applyMiddleware(thunk))