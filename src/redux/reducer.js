import { ADD_FAVORITE } from './actions.js'

export const OPERATIONS = {
    ADD_FAVORITE : "addFavorite",
    REMOVE_FAVORITE : "RemoveFavorite"
}

const INITIAL_STATE = {
    favorites : []
}

export const reducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case ADD_FAVORITE:
            console.log("favorite")
            return {
                ...state,favorites: [...state.favorites, action.todo]
            }

        default: return state
    }
}

// export const getFavorites = state => state.todos
// export const getFavorites = createSelector(getFavorites)