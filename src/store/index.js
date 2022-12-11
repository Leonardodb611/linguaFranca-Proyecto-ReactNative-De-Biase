import {createStore, combineReducers} from 'redux'

import CategoryReducer from './reducers/category.reducer.js'


const RootReducer = combineReducers ({
    categories: CategoryReducer
})


export default createStore(RootReducer)