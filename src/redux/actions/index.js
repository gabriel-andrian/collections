import { ADD, REMOVE } from "./action-type";

export const add = (character) => ({
  type: ADD,
  characterSelected: character,
});

export const remove = (character) => ({
  type: REMOVE,
  characterSelected: character,
});
