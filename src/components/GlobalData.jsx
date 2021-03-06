import React, { useContext } from "react";
import CountUp from "react-countup";
import { Paper, Box, Typography } from "@mui/material";
//components
import { globalContext } from "../GlobalContext/GlobalContext";

export default function GlobalData() {
  const { statistics, current_country } = useContext(globalContext);

  let selectedCountry = statistics
    ? statistics.filter((country) => country.country === current_country)
    : false;

  let currentDate = new Date().toDateString();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#5885AF",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 160,
            height: 160,
          },
        }}
      >
        <Paper elevation={2} sx={{ bgcolor: "#274472", color: "#C3E0E5" }}>
          <Typography variant="h6">Active Cases</Typography>
          <Typography variant="h5" color="rgba(55, 105, 240, 1)">
            {selectedCountry ? "" : "Loading"}
            {selectedCountry && (
              <CountUp
                start={0}
                end={selectedCountry[0].cases.active}
                duration={2.5}
                separator=","
              />
            )}
          </Typography>
          <Typography variant="Subtitle2">{currentDate}</Typography>
        </Paper>

        <Paper elevation={2} sx={{ bgcolor: "#274472", color: "#C3E0E5" }}>
          <Typography variant="h6">Total Recoverd</Typography>
          <Typography variant="h5" color="orange">
            {selectedCountry ? "" : "Loading"}
            {selectedCountry && (
              <CountUp
                start={0}
                end={selectedCountry[0].cases.recovered}
                duration={2.5}
                separator=","
              />
            )}
          </Typography>
          <Typography variant="Subtitle2">{currentDate}</Typography>
        </Paper>

        <Paper elevation={2} sx={{ bgcolor: "#274472", color: "#C3E0E5" }}>
          <Typography variant="h6">Total Deaths</Typography>
          <Typography variant="h5" color="error">
            {selectedCountry ? "" : "Loading"}
            {selectedCountry && (
              <CountUp
                start={0}
                end={selectedCountry[0].deaths.total}
                duration={2.5}
                separator=","
              />
            )}
          </Typography>
          <Typography variant="Subtitle2">{currentDate}</Typography>
        </Paper>

        <Paper elevation={2} sx={{ bgcolor: "#274472", color: "#C3E0E5" }}>
          <Typography variant="h6">Total Cases</Typography>
          <Typography variant="h5" color="rgba(75, 192, 92, 1)">
            {selectedCountry ? "" : "Loading"}
            {selectedCountry && (
              <CountUp
                start={0}
                end={selectedCountry[0].cases.total}
                duration={2.5}
                separator=","
              />
            )}
          </Typography>
          <Typography variant="Subtitle2">{currentDate}</Typography>
        </Paper>
      </Box>
    </>
  );
}
