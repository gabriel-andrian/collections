import React, { useState, useEffect } from "react";
import axios from "axios";
import CharactersList from "../characters-list";
import { useParams, useHistory } from "react-router-dom";
import { notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../redux/actions";

const CharactersPokemon = () => {
  const [characters, setCharacters] = useState([]);
  const { page } = useParams();
  const history = useHistory();

  const collections = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const handleOnSelect = (characterSelected) => {
    if (
      !collections.some(
        (character) => character.name === characterSelected.name
      )
    ) {
      notification.success({
        placement: "bottomRight",
        duration: 2.5,
        key: characterSelected.name,
        message: "Sucess!",
        description: `${characterSelected.name} was added to the collection!`,
      });
      return dispatch(add(characterSelected));
    }
    return notification.error({
      placement: "bottomRight",
      duration: 3,
      key: characterSelected.name,
      message: "Error",
      description: `${characterSelected.name} is already added to the collection!`,
    });
  };

  useEffect(() => {
    if (page !== 1) {
      history.push("/characters/1");
    }
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
      .then(({ data }) => {
        const pokemons = [];
        data.results.map((pokemon) => {
          const brokenUrl = pokemon.url.split("/");
          const id = brokenUrl[brokenUrl.length - 2];
          return pokemons.push({
            name: pokemon.name,
            type: "pokemon",
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          });
        });
        setCharacters(pokemons);
      });
  }, [history, page]);
  return <CharactersList characters={characters} onSelect={handleOnSelect} />;
};
export default CharactersPokemon;
