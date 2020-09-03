import React from "react";
import { Pie } from "react-chartjs-2";
import { DivStyled } from "../components/styled-components";
import { useSelector } from "react-redux";

const Chart = () => {
  const collections = useSelector((state) => state.characters);
  const colletionsData = collections.reduce((current, { type }) => {
    current[type] ? (current[type] += 1) : (current[type] = 1);
    return current;
  }, {});

  const data = {
    labels: Object.keys(colletionsData),
    datasets: [
      {
        data: Object.values(colletionsData),
        backgroundColor: ["#0000ff", "#ff0000"],
      },
    ],
  };
  return (
    <DivStyled>
      <Pie
        data={data}
        width={400}
        height={350}
        options={{ maintainAspectRatio: false }}
      />
    </DivStyled>
  );
};

export default Chart;
