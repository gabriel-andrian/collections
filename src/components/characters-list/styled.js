import styled from "styled-components";
import { Card } from "antd";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledCard = styled(Card)`
  width: 240px;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid black;
  :hover{
    cursor: pointer;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }

  img {
    border-radius: 5px;
  }

  @media (max-width: 500px) {
    width: 100px;
    padding: 5px;
    border-radius: 7.5px;
    border: 1px solid black;
    img {
      border-radius: 2.5px;
    }
    .ant-card-meta-title {
      font-size: 8px;
    }
  }
`;

export const MotionDiv = motion.div;
