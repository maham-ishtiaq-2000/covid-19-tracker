import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["United State", "India", "Brazil" , "France" , "Germany"],
  datasets: [
    {
      data: [89533825, 43518564, 32502469 , 31208925,28394995],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56" , "#FF0038" , "#4A4B4B"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56" , "#FF0038" , "#4A4B4B"],
      borderWidth: 1
    }
  ]
};
export default function LineGraph() {
  const onClick = (e) => {
    console.log(e);
  };
  return <Doughnut data={data} onClick={(e) => onClick(e)} />;
}
