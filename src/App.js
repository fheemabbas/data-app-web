import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = async (data) => {
    return axios
      .post(`https://data-server-app.herokuapp.com/add`, data)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  };
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
      <button
        type="submit"
        onClick={() => {
          const data = { name: name, address: address };
          handleSubmit(data);
        }}
      >
        submit
      </button>
    </div>
  );
}

export default App;
