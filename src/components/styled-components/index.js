import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionMenu = motion.div;

export const MenuStyled = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;

  @media (max-width: 500) {
    min-width: 250px;
  }
`;

export const DivStyled = styled.div`
  min-height: 100vh;
  @media (max-width: 500) {
    min-width: 250px;

    .chartjs-render-monitor {
      width: 100px;
      height: 100px;
    }
  }
`;

export const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  padding-top: 50px;
  font-size: calc(10px + 2vmin);

  @media (max-width: 500px) {
    min-width: 250px;
    Button {
      min-width: 200px;
    }
  }
`;

export const StyledButton = styled.button`
  margin: 30px;
  border-radius: 10px;
  outline: none;
  text-align: center;
  width: 200px;
`;

export const StyledSelec = styled.div`
  margin: 30px;
  text-align: center;
`;
