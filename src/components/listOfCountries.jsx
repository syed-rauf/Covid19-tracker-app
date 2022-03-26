import React, { useContext, useState, useEffect } from "react";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import { globalContext } from "../GlobalContext/GlobalContext";

export default function ListOfCountries() {
  const [country, setCountry] = useState("Pakistan");
  const { countries, getCountry } = useContext(globalContext);

  useEffect(() => {
    getCountry(country);
  }, [country]);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  let listOf = countries.map((item, i) => (
    <MenuItem key={i} value={item}>
      {item}
    </MenuItem>
  ));

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={country}
          onChange={handleChange}
          label="Country"
        >
          {listOf}
        </Select>
      </FormControl>
    </>
  );
}
