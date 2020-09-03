import { ADD, REMOVE } from "../actions/action-type";

const defaultState = [];

const characters = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return (state = [...state, ...[action.characterSelected]]);
    case REMOVE:
      debugger;
      const newState = state.filter((character) => {
        return !(character.name === action.characterSelected.name);
      });
      return (state = newState);
    default:
      return state;
  }
};

export default characters;
