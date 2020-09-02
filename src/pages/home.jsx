import React, { useState } from "react";
import CharactersList from "../components/characters-list";
import { DivStyled, StyledSelec } from "../components/styled-components";
import { notification, TreeSelect } from "antd";

const treeData = [
  {
    title: "All Collection",
    value: "ALL",
  },
  {
    title: "Rick and Morty",
    value: "rick and morty",
  },
  {
    title: "Pokemon",
    value: "pokemon",
  },
];

const Home = ({ collections, setCollections }) => {
  const [filterCollection, setFilterCollection] = useState([]);
  const handleOnSelect = (characterSelected) => {
    setCollections(
      collections.filter((character) => {
        return !(character.name === characterSelected.name);
      })
    );
    notification.success({
      placement: "bottomRight",
      duration: 2.5,
      key: characterSelected.name,
      message: "Sucess!",
      description: `${characterSelected.name} was deleted from the collection!`,
    });
    setFilterCollection(
      filterCollection.filter((character) => {
        return !(character.name === characterSelected.name);
      })
    );
  };

  const onChange = (value) => {
    if (value === "ALL") {
      return setFilterCollection(collections);
    }
    return setFilterCollection(
      collections.filter((character) => {
        return character.type === value;
      })
    );
  };

  return (
    <DivStyled>
      <StyledSelec>
        <TreeSelect
          style={{ width: "200px" }}
          dropdownStyle={{ maxHeight: 400, minWidth: 200, overflow: "auto" }}
          treeData={treeData}
          placeholder="Please select"
          treeDefaultExpandAll
          onChange={onChange}
        />
      </StyledSelec>

      <CharactersList characters={filterCollection} onSelect={handleOnSelect} />
    </DivStyled>
  );
};

export default Home;
