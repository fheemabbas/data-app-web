import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className="App">
      <h1>Data App</h1>
      <input
        className="input"
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <textarea
        className="input"
        name="address"
        rows="4"
        onChange={(e) => setAddress(e.target.value)}
        cols="22"
      />
      <br />
      <button type="submit">submit</button>
    </div>
  );
}

export default App;
