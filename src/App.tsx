import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PlayersList from "./pages/players";
import PlayerDetails from "./pages/player-details";

import "./App.css";
import { DETAILS_ROUTE, LIST_ROUTE } from "./data/shared";

function App() {
  return (
    <div className="flex justify-center w-full p-6 ">
      <BrowserRouter>
        <Routes>
          <Route path={LIST_ROUTE} element={<PlayersList />}></Route>
          <Route path="/" element={<PlayersList />}></Route>
          <Route path={DETAILS_ROUTE} element={<PlayerDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
