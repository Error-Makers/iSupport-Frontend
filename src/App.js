import "./reset.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./components/Posts";
import TopComunity from "./components/TopComunity";
import Footer from "./components/Footer";
import Leaderboard from "./components/Leaderboard";
import PersonalProgress from "./components/PersonalProgress";

function App() {
  return <div className="App">
    <PersonalProgress/>
  </div>;
}

export default App;
