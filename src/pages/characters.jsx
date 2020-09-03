import React, { useState } from "react";
import CharactersRickMorty from "../components/rick-and-morty";
import CharactersPokemon from "../components/pokemon";
import { StyledButton, DivStyled } from "../components/styled-components";

const CharactersPage = () => {
  const [buttonState, setButtonState] = useState(false);
  return (
    <DivStyled>
      <StyledButton onClick={() => setButtonState(!buttonState)}>
        {buttonState ? "Rick and Morty" : "Pokemon"}
      </StyledButton>
      {buttonState ? <CharactersPokemon /> : <CharactersRickMorty />}
    </DivStyled>
  );
};

export default CharactersPage;
