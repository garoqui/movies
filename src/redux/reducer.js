import { ADD_FAVORITE, REMOVE_FAVORITE } from './actions.js';

export const OPERATIONS = {
  ADD_FAVORITE: 'addFavorite',
  REMOVE_FAVORITE: 'RemoveFavorite',
};

const INITIAL_STATE = {
  favorites: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      console.log(state);
      return {
        ...state,
        favorites: [...state.favorites, action.todo],
      };

    case REMOVE_FAVORITE:
      const { id } = action.todo.task;

      return {
        ...state,
        favorites: state.favorites.filter(res => res.task.id !== id),
      };

    default:
      return state;
  }
};
