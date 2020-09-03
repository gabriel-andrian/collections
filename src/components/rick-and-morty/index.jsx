import React, { useState, useEffect } from "react";
import axios from "axios";
import CharactersList from "../characters-list";
import { useParams, useHistory, Link } from "react-router-dom";
import { StyledControl } from "./styled";
import { notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../redux/actions";

const CharactersRickMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [nextURL, setNextURL] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  const collections = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const history = useHistory();
  const { page } = useParams();

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
    if (page < 1) {
      return history.push("/characters/1");
    }
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(({ data }) => {
        setCharacters(
          data.results.map((character) => ({
            name: character.name,
            type: "rick and morty",
            image: character.image,
          }))
        );
        setNextURL(data.info.next);
      })
      .catch(() => {
        return history.push("/characters/1");
      });
  }, [page, history, nextURL]);

  return (
    <StyledControl>
      {parseInt(page) === 1 ? (
        <div>{"< "}Voltar </div>
      ) : (
        <Link to={`/characters/${page - 1}`}>{"< "}Voltar</Link>
      )}
      <span>Page: {page}</span>
      {nextURL === null ? (
        <div>Próxima {" >"} </div>
      ) : (
        <Link to={`/characters/${parseInt(page) + 1}`}>Próxima {" >"}</Link>
      )}
      <CharactersList characters={characters} onSelect={handleOnSelect} />
    </StyledControl>
  );
};

export default CharactersRickMorty;
