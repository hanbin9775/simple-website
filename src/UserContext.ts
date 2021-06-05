/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";

const userContext = React.createContext({
  state: {
    name: "",
    age: 0,
    graphValues: [50, 50, 50, 50, 50, 50, 50],
    translatedGraphInfo: ["+", "+", "+"],
  },
});

export default userContext;
