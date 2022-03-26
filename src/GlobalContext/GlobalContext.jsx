import React, { createContext, useReducer, useEffect } from "react";
import { reducerFunction } from "./reducerFunction";

const initialState = {
  countries: [],
};

export const globalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        // API CALL FOR COUNTRIES
        let promiseOne = await fetch(
          "https://covid-193.p.rapidapi.com/countries",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "covid-193.p.rapidapi.com",
              "x-rapidapi-key":
                "7d8c31d6bamshed8f1d0064e70b2p1c7380jsn9f2a70c1600d",
            },
          }
        );

        let responseOne = await promiseOne.json();
        dispatch({ type: "COUNTRIES", payload: responseOne.response });

        //API CALL FOR CASES OF ALL COUNTRIES
        let promiseTwo = await fetch(
          "https://covid-193.p.rapidapi.com/statistics",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "covid-193.p.rapidapi.com",
              "x-rapidapi-key":
                "7d8c31d6bamshed8f1d0064e70b2p1c7380jsn9f2a70c1600d",
            },
          }
        );

        let responseTwo = await promiseTwo.json();
        dispatch({ type: "STATISTICS", payload: responseTwo.response });
      } catch (error) {
        console.log("errrrrrrrr massage:" + error);
      }
    };

    getData();
  }, []);

  const getCountry = (currentCountry) => {
    dispatch({ type: "CURRENT_COUNTRY", payload: currentCountry });
  };

  return (
    <globalContext.Provider value={{ ...state, getCountry }}>
      {children}
    </globalContext.Provider>
  );
};
