import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";
import Header from "./components/header";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
