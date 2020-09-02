import styled from "styled-components";

export const StyledControl = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 500) {
    min-width: 250px;
  }

  span {
    color: blue;
  }
`;
