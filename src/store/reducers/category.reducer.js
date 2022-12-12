import CATEGORIES from '../../data/questions.js'
import { SELECTED_CATEGORY } from '../actions/category.actions.js'


const initialState = {
    categories: CATEGORIES,
    selected: null
}



const CategoryReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case SELECTED_CATEGORY:
            const question = state.categories.filter((x) => x.id === SELECTED_CATEGORY.categoryID)
            
            return {...state, categories: question}
            
        default:
            return state
    }
}



export default CategoryReducer