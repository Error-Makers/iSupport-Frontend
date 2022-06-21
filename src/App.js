import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import CommunityChat from "./components/communityChat";
import AuthComponent from "./pages/AuthLogin"

function App() {
  return (
    <div className="App">
      <AuthComponent/>
      {/* <CommunityChat /> */}
    </div>
  );
}

export default App;
