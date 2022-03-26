import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Container, Skeleton } from "@mui/material";
import { globalContext } from "../GlobalContext/GlobalContext";

const bgColor = [
  "rgba(55, 105, 240, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(255, 40, 0, 1)",
  "rgba(75, 192, 92, 1)",
];

const labels = ["Active", "Recovered", "Deaths", "Total Cases"];

function CovidChart() {
  const { statistics, current_country } = useContext(globalContext);

  let selectedCountry = statistics
    ? statistics.filter((country) => country.country === current_country)
    : false;

  const barChart = selectedCountry ? (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            label: "My First Dataset",
            data: [
              selectedCountry[0].cases.active,
              selectedCountry[0].cases.recovered,
              selectedCountry[0].deaths.total,
              selectedCountry[0].cases.total,
            ],
            backgroundColor: bgColor,
          },
        ],
      }}
    />
  ) : (
    <Skeleton
      sx={{ bgcolor: "rgb(240,240,240)" }}
      variant="rectangular"
      width="100%"
      height={230}
    />
  );

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          width: "100%",
          bgcolor: "#5885AF",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {barChart}
      </Container>
    </>
  );
}

export default CovidChart;
