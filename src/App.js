import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
// import CommunityChat from "./components/communityChat";
import Posts from './components/Posts';
import PersonalProgress from './components/PersonalProgress';
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <div className="App">
      {/* <CommunityChat /> */}
      <PersonalProgress />
      <Leaderboard />
      <Posts />
    </div>
  );
}

export default App;
