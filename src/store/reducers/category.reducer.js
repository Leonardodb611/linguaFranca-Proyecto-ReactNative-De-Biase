import CATEGORIES from '../../data/questions'
import { SELECTED_CATEGORY } from '../actions/category.actions'


const hola = ['hola']

const initialState = {
    categories: CATEGORIES,
    selected: null
}




const CategoryReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case SELECTED_CATEGORY:
            const question = state.categories
            
            return {...state, selected: question}
            
        default:
            return state
    }
}

export default CategoryReducer