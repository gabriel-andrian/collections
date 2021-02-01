import React from "react";
import { Card } from "antd";
import { Container, StyledCard, MotionDiv } from "./styled";

const { Meta } = Card;

const CharactersList = ({ characters, onSelect = () => {} }) => {
  return (
    <Container>
      {characters.map(({ name, type, image }, key) => (
        <MotionDiv
          initial={{ scale: 0 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0 }}
        >
          <StyledCard
            onClick={() => {
              onSelect({ name: name, type: type, image: image });
            }}
            key={key}
            cover={<img alt={name} src={image} />}
          >
            <Meta title={name} />
          </StyledCard>
        </MotionDiv>
      ))}
    </Container>
  );
};

export default CharactersList;
