import React from "react";
import postsProvider from "./context/posts/postsContext";
import personalProgressProvider from "./context/personal-progress/personalPorgressContext";
import leaderboardProvider from "./context/leaderboard/leaderboardContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./components/Posts";
import TopComunity from "./components/TopComunity";

function App() {
  return (
    <postsProvider>
      <personalProgressProvider>
        <leaderboardProvider>
          <div className="App"></div>
        </leaderboardProvider>
      </personalProgressProvider>
    </postsProvider>
  );
}

export default App;
