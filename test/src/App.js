import React from "react";
import "./App.css";
import Ck12Test from "./components/Ck12Test";

function App() {
  return (
    <div className="App">
      <h1>Welcome to this catalogue</h1>
      <small>This is the data coming in from the api</small>
      <Ck12Test />
      <small className="footer_logo">Made with ❤ by parmar</small>
    </div>
  );
}

export default App;
