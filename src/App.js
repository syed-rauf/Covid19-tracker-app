import React from "react";
import "./App.css";
import { Grid } from "@mui/material";
//components
import CovidChart from "./components/covidchart";
//import Example from './components/example1';
import ListOfCountries from "./components/listOfCountries";
import GlobalData from "./components/GlobalData";
import { GlobalProvider } from "./GlobalContext/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <h1>Covid-19-Tracker</h1>

        <Grid
          container
          justifyContent="center"
          rowSpacing={1}
          sx={{ m: "auto" }}
        >
          <Grid item xs={12}>
            <GlobalData />
          </Grid>
          <Grid item xs={12}>
            <ListOfCountries />
          </Grid>
          <Grid item xs={12}>
            <CovidChart />
          </Grid>
        </Grid>
      </div>
    </GlobalProvider>
  );
}

export default App;
